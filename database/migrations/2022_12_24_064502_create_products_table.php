<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->text('description')->nullable();
            $table->text('content')->nullable();
            $table->string('preview_img')->nullable();
            $table->string('full_img')->nullable();
            $table->integer('price');
            $table->integer('count');
            $table->boolean('is_active');
            $table->boolean('is_deleted');

            $table->foreignId('category_id')->index()->constrained('categories');
            $table->foreignId('tag_id')->nullable()->index()->constrained('tags');
            $table->foreignId('color_id')->nullable()->index()->constrained('colors');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}
