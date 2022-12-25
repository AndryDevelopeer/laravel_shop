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
        $saveImages = [];
        unset($data['tags'], $data['colors'], $data['images']);

        DB::beginTransaction();

        /* @TODO перенести все в билдел */

        if ($request->has('preview_img')) {
            $data['preview_img'] = Storage::disk('public')->put('/images/product', $data['preview_img']);
        }

        if (!empty($images)) {
            foreach ($images as $image) {
                $imagePath = Storage::disk('public')->put('/images/product', $image);
                $saveImages[] = Image::firstOrCreate([
                    'path' => $imagePath
                ]);
            }
        }

        $product = Product::firstOrCreate($data);

        /* @TODO переделать на атач */
        /*$product->colors()->attach($colorIds);
        $product->tags()->attach($tagIds);*/

        foreach ($saveImages as $saveImage) {
            ProductImage::firstOrCreate([
                'image_id' => $saveImage->id,
                'product_id' => $product->id,
            ]);
        }

        foreach ($tagIds as $tagId) {
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
        }

        DB::commit();

        return redirect()->route('product.store');
    }
}
