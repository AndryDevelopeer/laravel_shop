<?php

namespace App\Http\Controllers\Product;

use App\Http\Controllers\Controller;
use App\Models\Product;

class ShowController extends Controller
{
    public function __invoke(Product $product)
    {
        /* @TODO мультиплай инпут с картинками не але */
        return view('product.show', compact('product'));
    }
}
