<?php

namespace App\Http\Controllers\Main;

use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Models\User;

class IndexController extends Controller
{
    public function __invoke()
    {
        $usersCount = User::all()->count();
        $productsCount = Product::all()->count();

        return view('main.index', compact(['usersCount','productsCount']));
    }
}
