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
            $table->integer('price');
            $table->integer('count');
            $table->boolean('is_active')->default(true)->nullable();
            $table->boolean('is_deleted')->default(false)->nullable();

            $table->foreignId('category_id')->index()->constrained('categories')->onDelete('no action');
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
