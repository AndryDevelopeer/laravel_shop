<?php

namespace App\Services;

use Illuminate\Support\Facades\Hash;
use App\Http\Response\APIResponse;
use Nette\Utils\JsonException;
use Illuminate\Http\Request;
use Nette\Utils\Json;
use App\Models\User;

class AuthService
{
    private const SECRET_KEY = 'KJOU&(^SDOJ;masd';

    public function login(Request $request): APIResponse
    {
        $response = new APIResponse();

        $user = User::where(['email' => $request->email])->first();

        if (!$user) {
            $response->addError('Пользователь не найден');
            return $response;
        }

        if (!Hash::check($request->password, $user['password'])) {
            $response->addError('Неправильный пароль');
        }

        if (!$response->hasErrors()) {
            $response->success = true;
            $response->data = [
                'accessToken' => $this->createJWT($user)
            ];
        }

        return $response;
    }

    /**
     * @throws JsonException
     */
    public function createJWT(User $user): string
    {
        $header = base64_encode(Json::encode([
            'alg' => 'HS256',
            'typ' => 'JWT',
            'lifeTime' => date('Y-d-m H:i:s', strtotime("+15 minutes")),
        ]));

        $payload = base64_encode(Json::encode([
            'name' => $user->name,
            'admin' => $user->is_admin,
        ]));

        $signature = Hash::make($header . '.' . $payload . '.' . self::SECRET_KEY);

        return $header . '.' . $payload . '.' . $signature;
    }

    public function attempt(string $token): bool
    {
        if (!$token) {
            return false;
        }

        $exp = explode('.', $token, 3);
        $header = Json::decode(base64_decode($exp[0]));

        if ($header->lifeTime < date('Y-d-m H:i:s')) {
            return false;
        }

        $tokenSignature = $exp[0] . '.' . $exp[1] . '.' . self::SECRET_KEY;

        return Hash::check($tokenSignature, $exp[2]);
    }
}
