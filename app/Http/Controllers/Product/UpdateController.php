<?php

namespace App\Http\Controllers\Product;

use App\Http\Requests\Product\UpdateRequest;
use Illuminate\Http\RedirectResponse;
use App\Http\Controllers\Controller;
use App\Services\ProductService;
use App\Models\Product;
use Exception;

class UpdateController extends Controller
{
    /**
     * @throws Exception
     */
    public function __invoke(UpdateRequest $request, Product $product, ProductService $service): RedirectResponse
    {
        //dd($request->validated());
        $service->set($request, $product);
        $service->update();

        return redirect()->route('product.index');
    }
}
