<?php

namespace App\Http\Middleware;

use App\Services\AuthService;
use Illuminate\Http\Request;
use Closure;

class AdminPanelMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param \Illuminate\Http\Request $request
     * @param \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        $auth = new AuthService();

        if ($auth->attempt() && $auth->isAdmin()) {
            return $next($request);
        } else {
           return redirect()->route('site.index');
        }
    }
}
