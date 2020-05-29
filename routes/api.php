<?php

use Illuminate\Http\Request;

Route::group(['prefix' => 'auth'], function () {
    Route::post('register', 'AuthController@register');
    Route::post('login', 'AuthController@login');

    Route::group(['middleware' => 'auth:api'], function () {
        Route::get('logout', 'AuthController@logout');
        Route::get('profile', 'AuthController@profile');
    });
});

Route::group(['middleware' => 'auth:api'], function () {
    Route::group(['middleware' => 'scope:user'], function () {
        Route::get('get-categories', 'ProductController@categories');
        Route::resource('products', 'ProductController');
    });

    Route::group(['middleware' => 'scope:administrator'], function () {
        Route::resource('categories', 'CategoryController');
    });
});


