<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Product;
use App\Models\Color;

class ProductColorFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'color_id' => Color::get()->random()->id,
            'product_id' => Product::get()->random()->id,
        ];
    }
}
