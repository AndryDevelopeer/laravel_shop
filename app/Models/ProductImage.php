<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class ProductImage extends Model
{
    protected $table = 'product_image';
    protected $guarded = false;

    public function image(): HasOne
    {
        return $this->hasOne(Image::class, 'id', 'image_id');
    }

    public function product(): HasOne
    {
        return $this->hasOne(Product::class, 'id', 'product_id');
    }
}
