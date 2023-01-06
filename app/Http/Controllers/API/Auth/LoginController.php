<?php

namespace App\Http\Controllers\API\Auth;

use App\Http\Requests\API\Auth\LoginRequest;
use App\Http\Controllers\Controller;
use App\Services\AuthService;

class LoginController extends Controller
{
    public function __invoke(LoginRequest $request, AuthService $auth)
    {
        $data = $request->validated();
        $response = $auth->login($data);

        return $response->asJson();
    }
}
