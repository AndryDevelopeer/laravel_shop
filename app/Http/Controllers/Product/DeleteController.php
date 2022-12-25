<?php

namespace App\Http\Controllers\Product;

use Illuminate\Support\Facades\Storage;
use App\Http\Controllers\Controller;
use App\Models\Product;

class DeleteController extends Controller
{
    public function __invoke(Product $product)
    {
        /** удалять картинки */
        $paths[] = $product->preview_img;

        $product->colors->each(function ($color) {
            $color->delete();
        });
        $product->tags->each(function ($tag) {
            $tag->delete();
        });
        $product->images->each(function ($image) {
            $image->delete();
        });

        if (!empty($paths) && $product->deleteOrFail()) {
            Storage::disk('public')->delete($paths);
        }

        return redirect()->route('product.index');
    }
}
