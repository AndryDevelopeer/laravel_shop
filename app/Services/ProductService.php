<?php

namespace App\Services;

use App\Http\Requests\Product\UpdateRequest;
use App\Http\Requests\Product\StoreRequest;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\DB;
use App\Models\ProductColor;
use App\Models\ProductImage;
use App\Models\ProductTag;
use App\Models\Product;
use App\Models\Image;
use Exception;

class ProductService
{
    private $request;
    private $product;
    private $data;
    private $tagIds = [];
    private $colorIds = [];
    private $imagesId = [];
    private $images = [];

    /**
     * @param UpdateRequest|StoreRequest $request
     * @param Product|null $product
     */

    public function set($request, Product $product = null): void
    {
        $this->request = $request;
        $this->product = $product;
    }

    /**
     * Create new product with relation
     * @return void
     * @throws Exception
     */
    public function create(): void
    {
        $this->validate();

        DB::beginTransaction();

        try {
            $product = Product::firstOrCreate($this->data);
            if ($product) {
                $this->savePreviewImg($product);
                $this->saveImages($product);
                $this->attach($product);
            }
        } catch (Exception $e) {
            DB::rollBack();
            /* @TODO прикрутить нормальное отображение ошибок */
            throw new Exception($e->getMessage());
        }

        DB::commit();
    }

    /**
     * Update new product with relation
     * @return void
     * @throws Exception
     */
    public function update(): void
    {
        $this->validate();

        DB::beginTransaction();

        try {
            $this->savePreviewImg();
            $success = $this->product->update($this->data);

            if ($success) {
                $this->saveImages($this->product);
                $this->attach($this->product);
            }
        } catch (Exception $e) {
            DB::rollBack();
            /* @TODO прикрутить нормальное отображение ошибок */
            throw new Exception($e->getMessage());
        }

        DB::commit();
    }

    private function validate(): bool
    {
        if (!$this->request) {
            return false;
        }

        $this->data = $this->request->validated();

        $this->data['is_active'] = $this->request->has('is_active');
        $this->data['is_deleted'] = $this->request->has('is_deleted');

        $this->data['price'] = (integer)$this->data['price'];
        $this->data['count'] = (integer)$this->data['count'];

        $this->tagIds = $this->request->has('tags') ? $this->data['tags'] : [];
        $this->colorIds = $this->request->has('colors') ? $this->data['colors'] : [];
        $this->images = $this->request->has('images') ? $this->data['images'] : [];

        unset($this->data['tags'], $this->data['colors'], $this->data['images']);

        return true;
    }

    private function deleteOldImages(): void
    {
        foreach ($this->product->images as $items) {
            $imagePaths[] = $items->image->path;
        }

        if (!empty($imagePaths)) {
           $this->deleteStorageItems($imagePaths);
        }
    }

    /**
     * @param $path string|array
     */
    private function deleteStorageItems($path): void
    {
        Storage::disk('public')->delete($path);
    }

    private function savePreviewImg(Product $product = nulL): void
    {
        if (!$this->request->has('preview_img')) {
            return;
        }

        /*if ($this->product) {
            $this->deleteStorageItems($this->product->preview_img);
        }*/

        $path = $product->name ?? $this->product->name;
        $path = str_replace(' ', '', $path);

        $this->data['preview_img'] = Storage::disk('public')
            ->put("/images/product/{$path}", $this->data['preview_img']);
    }

    private function saveImages(Product $product = nulL): void
    {
        if (empty($this->images)) {
            return;
        }

        /*if ($product) {
            foreach ($product->images as $item) {
                $item->delete();
                $item->image->delete();
            }
        }*/

        $path = str_replace(' ', '', $product->name);

        foreach ($this->images as $image) {
            $imagePath = Storage::disk('public')->put("/images/product/{$path}", $image);
            $this->imagesId[] = Image::firstOrCreate([
                'path' => $imagePath
            ])->id;
        }
    }

    private function attach(Product $product): void
    {
        $this->createRelation($this->imagesId, $product, 'image');
        $this->createRelation($this->tagIds, $product, 'tag');
        $this->createRelation($this->colorIds, $product, 'color');
    }

    private function createRelation(array $items, Product $product, string $type): void
    {
        foreach ($items as $itemId) {
            $itemsToCreate[] = [
                'product_id' => $product->id,
                "{$type}_id" => $itemId,
            ];
        }

        if (empty($itemsToCreate)) {
            return;
        }

        $entity = null;
        switch ($type) {
            case 'image':
                $entity = new ProductImage();
                break;
            case 'tag':
                $entity = new ProductTag();
                break;
            case 'color':
                $entity = new ProductColor();
                break;
        }

        if ($entity) {
            $entity->insert($itemsToCreate);
        }
    }

    /**
     * @return mixed
     */
    public function getRequest()
    {
        return $this->request;
    }

    /**
     * @return mixed
     */
    public function getData()
    {
        return $this->data;
    }

    /**
     * @return array
     */
    public function getTagIds(): array
    {
        return $this->tagIds;
    }

    /**
     * @return array
     */
    public function getColorIds(): array
    {
        return $this->colorIds;
    }

    /**
     * @return array
     */
    public function getImages(): array
    {
        return $this->images;
    }

    /**
     * @return mixed
     */
    public function getProduct()
    {
        return $this->product;
    }
}
