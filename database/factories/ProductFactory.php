<?php

namespace Database\Factories;

use App\Models\Category;
use App\Models\Color;
use Illuminate\Database\Eloquent\Factories\Factory;

class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->text(20),
            'description' => $this->faker->text(100),
            'content' => $this->faker->text(),
            'category_id' => Category::get()->random()->id,
            'price' => $this->faker->numberBetween(1000, 200000),
            'count' => $this->faker->numberBetween(1, 50),
            'is_active' => $this->faker->boolean(90),
            'is_deleted' => $this->faker->boolean(10),
        ];
    }
}
