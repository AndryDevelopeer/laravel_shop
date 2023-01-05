<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['prefix' => 'admin'], function () {
    Route::post('/product/image/delete', \App\Http\Controllers\API\Admin\Product\Image\DeleteController::class);
});

Route::group(['prefix' => 'auth'], function () {
    Route::post('/login', \App\Http\Controllers\API\Auth\LoginController::class);
    Route::post('/register', \App\Http\Controllers\API\Auth\RegisterController::class);
    Route::post('/authorise', \App\Http\Controllers\API\Auth\AuthoriseController::class);
});
