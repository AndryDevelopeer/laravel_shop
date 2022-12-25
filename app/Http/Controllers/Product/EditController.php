<?php

namespace App\Http\Controllers\Product;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Product;
use App\Models\Color;
use App\Models\Tag;

class EditController extends Controller
{
    public function __invoke(Product $product)
    {
        $categories = Category::all();
        $colors = Color::all();
        $tags = Tag::all();
        $title = 'Редактировать товар';

        /** @TODO поле выбора картинки не сохраняет старые значения */

        return view('product.create', compact(['product', 'categories', 'colors', 'tags', 'title']));
    }
}
