<?php

namespace App\Http\Controllers\API\Auth;

use App\Http\Controllers\Controller;
use App\Services\AuthService;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    public function __invoke(Request $request, AuthService $auth)
    {
        $request->validate([
            'email' => 'string|required',
            'password' => 'string|required',
            'remember' => 'boolean|nullable',
        ]);

        $response = $auth->login($request);

        return $response->asJson();
    }
}
