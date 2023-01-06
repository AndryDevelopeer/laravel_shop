<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Color;
use App\Models\Product;
use App\Models\ProductColor;
use App\Models\ProductTag;
use App\Models\Role;
use App\Models\Tag;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        Category::factory(10)->create();
        Color::factory(30)->create();
        Tag::factory(20)->create();
        Role::factory(2)->create();
        User::factory(20)->create();
        Product::factory(20)->create();
        ProductColor::factory(30)->create();
        ProductTag::factory(30)->create();
    }
}
