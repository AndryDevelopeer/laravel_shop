<?php

namespace App\Http\Controllers\API\Personal;

use App\Http\Controllers\Controller;
use App\Http\Response\APIResponse;
use App\Services\AuthService;
use Illuminate\Http\Request;

class IndexController extends Controller
{
    public function __invoke(Request $request, APIResponse $response, AuthService $auth)
    {
        if ($auth->attempt()) {
            $response->data = $auth->getUser();
            $response->success = true;
        } else {
            $response->addError('Пользователь не найден');
        }
        return $response->asJson();
    }
}
