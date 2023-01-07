<?php

namespace App\Http\Middleware;

use Illuminate\Http\RedirectResponse;
use App\Http\Response\APIResponse;
use App\Services\AuthService;
use Illuminate\Http\Response;
use Illuminate\Http\Request;
use Closure;

class PersonalMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param Request $request
     * @param Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return Response|RedirectResponse|null
     */
    public function handle(Request $request, Closure $next)
    {
        $auth = new AuthService();
        $response = new APIResponse();

        if ($auth->attempt()) {
            return $next($request);
        } else {
            $response->addError('Unauthorized');
            return response($response->asJson());
        }
    }
}
