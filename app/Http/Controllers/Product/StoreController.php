<?php

namespace App\Http\Controllers\Product;

use App\Http\Requests\Product\StoreRequest;
use Illuminate\Support\Facades\Storage;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use App\Models\ProductColor;
use App\Models\ProductImage;
use App\Models\ProductTag;
use App\Models\Product;
use App\Models\Image;

class StoreController extends Controller
{
    public function __invoke(StoreRequest $request)
    {
        $data = $request->validated();
        $data['is_active'] = $request->has('is_active');
        $data['is_deleted'] = $request->has('is_deleted');

        $data['price'] = (integer)$data['price'];
        $data['count'] = (integer)$data['count'];

        $tagIds = $data['tags'] ?? [];
        $colorIds = $data['colors'] ?? [];
        $images = $data['images'] ?? [];
        $saveImagesId = [];
        unset($data['tags'], $data['colors'], $data['images']);

        DB::beginTransaction();

        /* @TODO перенести все в билдел */

        if ($request->has('preview_img')) {
            $data['preview_img'] = Storage::disk('public')->put('/images/product', $data['preview_img']);
        }

        if (!empty($images)) {
            foreach ($images as $image) {
                $imagePath = Storage::disk('public')->put('/images/product', $image);
                $saveImagesId[] = Image::firstOrCreate([
                    'path' => $imagePath
                ])->id;
            }
        }

        $product = Product::firstOrCreate($data);

        $product_id = $product->id;

        foreach ($saveImagesId as $image_id) {
dd(compact('product_id', 'image_id'));
            $product->images()->attach(compact('product_id', 'image_id'));
        }

        foreach ($tagIds as $tag_id) {
            $product->tags()->attach(compact('product_id', 'tag_id'));
        }

        foreach ($colorIds as $color_id) {
            $product->colors()->attach(compact('product_id', 'color_id'));
        }
        DB::commit();

        return redirect()->route('product.store');
    }
}
