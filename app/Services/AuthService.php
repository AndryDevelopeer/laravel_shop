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

    /**
     * @throws JsonException
     */
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
     * метод авторизует клиента по jwt токену из $_COOKIE['accessToken']
     */

    public function attempt(): bool
    {
        return $this->checkJWT($_COOKIE['accessToken'] ?? null);
    }

    /**
     * @throws JsonException
     */
    public function checkRefresh($token): APIResponse
    {
        $response = new APIResponse();
        $success = $this->checkJWT($token);

        if (!$success) {
            $response->addError('время жизни рефреш токена истекло');
            return $response;
        }

        $response->success = true;
        $response->data = [
            'accessToken' => $this->createJWT($this->user, self::LIFE_TIME_ACCESS_TOKEN)
        ];

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

    private function checkJWT($token): bool
    {
        if (!$token) {
            return false;
        }

        $arrToken = explode('.', $token, 3);

        if (count($arrToken) < 3) {
            return false;
        }

        $header = Json::decode(base64_decode($arrToken[0]));
        $payload = Json::decode(base64_decode($arrToken[1]));

        if ($header->lifeTime < date('Y-d-m H:i:s')) {
            return false;
        }
        $tokenSignature = $arrToken[0] . '.' . $arrToken[1] . '.' . self::SECRET_KEY;
        $success = Hash::check($tokenSignature, $arrToken[2]);

        if ($success) {
            $this->user = User::where(['id' => $payload->id])
                ->select('id', 'name', 'phone', 'gender', 'email', 'age', 'address', 'role_id')
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
