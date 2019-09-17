<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});


Route::get('/movies', 'MoviesController@index')->name('movies.index');
Route::post('/movies', 'MoviesController@store')->name('movies.store');
Route::get('/movies/create', 'MoviesController@create')->name('movies.create');
Route::get('movies/{movie}', 'MoviesController@show')->name('movies.show');
Route::patch('movies/{movie}', 'MoviesController@update')->name('movies.update');
Route::delete('movies/{movie}', 'MoviesController@destroy')->name('movies.destroy');
Route::get('movies/{movie}/edit', 'MoviesController@edit')->name('movies.edit');

//Route::get('/genres', 'GenresController@index');

Route::resource('/genres', 'GenresController');

// GET|HEAD  | genres              | genres.index   | GenresController@index
// POST      | genres              | genres.store   | GenresController@store
// GET|HEAD  | genres/create       | genres.create  | GenresController@create
// GET|HEAD  | genres/{genre}      | genres.show    | GenresController@show
// PUT|PATCH | genres/{genre}      | genres.update  | GenresController@update
// DELETE    | genres/{genre}      | genres.destroy | GenresController@destroy
// GET|HEAD  | genres/{genre}/edit | genres.edit    | GenresController@edit
