<?php

namespace App\Http\Controllers\API\Admin\Product\Image;

use Illuminate\Support\Facades\Storage;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use App\Models\ProductImage;
use Illuminate\Http\Request;
use App\Models\Image;

class DeleteController extends Controller
{
    public function __invoke(Request $request)
    {
        $validated = $request->validate([
            'imgIds' => 'required|array|max:255',
            'productId' => 'nullable|required|integer|max:255',
        ]);

        DB::beginTransaction();

        foreach ($validated['imgIds'] as $id) {
            $successPI = ProductImage::where([
                'image_id' => (int)$id, 'product_id' => $validated['productId']
            ])->first()->delete();

            $img = Image::find((int)$id);
            Storage::disk('public')->delete($img->path);
            $successI = $img->delete();

            if (!$successPI || !$successI) {
                DB::rollBack();
                return response()->json(['success' => false]);
            }
        }

        DB::commit();

        return response()->json(['success' => true]);
    }
}
