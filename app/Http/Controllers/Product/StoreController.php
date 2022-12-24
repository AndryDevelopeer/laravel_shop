<?php

namespace App\Http\Controllers\Product;

use App\Http\Controllers\Controller;
use App\Http\Requests\Product\StoreRequest;
use App\Models\Product;
use App\Models\ProductColor;
use App\Models\ProductTag;
use Illuminate\Support\Facades\Storage;

class StoreController extends Controller
{
    public function __invoke(StoreRequest $request)
    {
        $data = $request->validated();
        $data['is_active'] = $request->has('is_active');
        $data['is_deleted'] = $request->has('is_deleted');
        $tagIds = $data['tags'] ?? [];
        $colorIds = $data['colors'] ?? [];
        unset($data['tags'], $data['colors']);

        if ($request->has('preview_image')) {
            $data['preview_image'] = Storage::disk('public')->put('/images', $data['preview_image']);
        }

        $product = Product::firstOrCreate($data);
        $product->colors()->attach($colorIds);
        $product->tags()->attach($tagIds);

/*        foreach ($tagIds as $tagId) {
            ProductTag::firstOrCreate([
                'tag_id' => $tagId,
                'product_id' => $product->id,
            ]);
        }

        foreach ($colorIds as $colorId) {
            ProductColor::firstOrCreate([
                'color_id' => $colorId,
                'product_id' => $product->id,
            ]);
        }*/

        return redirect()->route('product.store');
    }
}
