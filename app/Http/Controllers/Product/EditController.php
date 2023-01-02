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
        $type = 'update';
        $images = [];

        foreach ($product->images as $item) {
            $images[] = $item->image->path;
        }
        /** @TODO поле выбора картинки не сохраняет старые значения */
        /* @TODO подставлять картинки в мультиселект */

        return view('product.create', compact([
            'product', 'categories', 'colors', 'tags', 'title', 'type', 'images'
        ]));
    }
}
