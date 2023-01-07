<?php

namespace App\Http\Controllers\API\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\API\Auth\CheckRefresh;
use App\Http\Response\APIResponse;
use App\Services\AuthService;
use Illuminate\Http\Request;

class CheckRefreshTokenController extends Controller
{
    public function __invoke(CheckRefresh $request, AuthService $auth): string
    {
        $data = $request->validated();
        $response = $auth->checkRefresh($data['refreshToken']);

        return $response->asJson();
    }
}
