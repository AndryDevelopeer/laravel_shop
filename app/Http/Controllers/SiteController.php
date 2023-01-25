<?php

namespace App\Http\Controllers;

use App\Services\ExternalAuthService;
use Illuminate\Http\Request;

class SiteController extends Controller
{
    public function __invoke(Request $request, ExternalAuthService $authService)
    {
       // $authService->checkAuth($request);

        return view('site.index');
    }
}
