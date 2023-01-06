<?php

namespace App\Services;

use Illuminate\Support\Facades\Hash;
use App\Http\Response\APIResponse;
use Nette\Utils\JsonException;
use Nette\Utils\Json;
use App\Models\User;

class AuthService
{
    private const SECRET_KEY = 'KJOU&(^SDOJ;masd';
    private const LIFE_TIME_ACCESS_TOKEN = 15;
    private const LIFE_TIME_REFRESH_TOKEN = 10080;

    private $user = null;

    public function login(array $data): APIResponse
    {
        $response = new APIResponse();

        $user = User::where(['email' => $data['email']])->first();

        if (!$user) {
            $response->addError('Пользователь с таким email не найден', 'email');
            return $response;
        }

        if (!Hash::check($data['password'], $user['password'])) {
            $response->addError('Неправильный пароль', 'password');
        }

        if (!$response->hasErrors()) {
            $response->success = true;
            $response->data = [
                'accessToken' => $this->createJWT($user, self::LIFE_TIME_ACCESS_TOKEN),
                'refreshToken' => $this->createJWT($user, self::LIFE_TIME_REFRESH_TOKEN),
            ];
        }

        return $response;
    }

    /**
     * @throws JsonException
     */
    public function createJWT(User $user, $lifeTime): string
    {
        $header = base64_encode(Json::encode([
            'alg' => 'HS256',
            'typ' => 'JWT',
            'lifeTime' => date('Y-d-m H:i:s', strtotime("+{$lifeTime} minutes")),
        ]));

        $payload = base64_encode(Json::encode([
            'id' => $user->id,
            'name' => $user->name,
        ]));

        $signature = Hash::make($header . '.' . $payload . '.' . self::SECRET_KEY);

        return $header . '.' . $payload . '.' . $signature;
    }

    /**
     * метод авторизует клиента по jwt токену
     */

    public function attempt(): bool
    {
        $token = $_COOKIE['accessToken'] ?? null;

        if (!$token) {
            return false;
        }

        $exp = explode('.', $token, 3);
        $header = Json::decode(base64_decode($exp[0]));
        $payload = Json::decode(base64_decode($exp[1]));

        if ($header->lifeTime < date('Y-d-m H:i:s')) {
            return false;
        }

        $tokenSignature = $exp[0] . '.' . $exp[1] . '.' . self::SECRET_KEY;
        $success = Hash::check($tokenSignature, $exp[2]);

        if ($success) {
            $this->user = User::where(['id' => $payload->id])
                ->select('name', 'phone', 'gender', 'email', 'age', 'address', 'role_id')
                ->first();
        }

        return $success && $this->user;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function isAdmin(): bool
    {
        return $this->user->role->name === 'admin';
    }
}
