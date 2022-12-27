<?php

namespace App\Http\Controllers;


class SiteController extends Controller
{
    public function __invoke()
    {
        return view('site.index');
    }
}
