<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Model;

class ProductColor extends Model
{
    protected $table = 'product_color';
    protected $guarded = false;

    public function color(): HasOne
    {
        return $this->hasOne(Color::class, 'id', 'color_id');
    }
}
