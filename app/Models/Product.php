<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Product extends Model
{
    protected $table = 'products';
    protected $guarded = false;

    public function getColors() :HasMany
    {
        return $this->hasMany(Color::class, 'color_id');
    }
}
