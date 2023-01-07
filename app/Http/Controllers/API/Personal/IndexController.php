<?php

namespace App\Http\Controllers\API\Personal;

use App\Http\Controllers\Controller;
use App\Http\Response\APIResponse;
use App\Services\AuthService;
use Illuminate\Http\Request;

class IndexController extends Controller
{
    public function __invoke(Request $request, APIResponse $response)
    {
        $response->data = $request->attributes->get('user') ?? null;
        $response->success = !!$response->data;

        return $response->asJson();
    }
}
