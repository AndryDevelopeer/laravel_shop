<?php

namespace App\Http\Controllers\API\Auth;

use App\Http\Controllers\Controller;
use App\Http\Response\APIResponse;
use App\Services\AuthService;
use Illuminate\Http\Request;

class AuthoriseController extends Controller
{
    public function __invoke(Request $request, APIResponse $response, AuthService $auth)
    {
        $response->success = $auth->attempt();
        return $response->asJson();
    }
}
