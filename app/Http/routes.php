<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/','HomeController@index');
Route::get('/home','HomeController@home');

// Membership routes
Route::get('/membership/create','MemberController@create');
Route::get('/membership/edit','MemberController@edit');
Route::get('/membership/delete/{id}','MemberController@destroy');
Route::get('/membership/activate/{id}','MemberController@create');
// End of membership routes
