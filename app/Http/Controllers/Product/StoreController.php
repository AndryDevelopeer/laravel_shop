<?php

namespace App\Http\Controllers\Product;

use App\Http\Requests\Product\StoreRequest;
use App\Services\ProductService;
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
    public function __invoke(StoreRequest $request, ProductService $service)
    {
        $service->set($request);
        $service->create();

        return redirect()->route('product.store');
    }
}
