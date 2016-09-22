<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$app->get('/', function() use ($app) {
    return "Lumen RESTful API for Task List Projetc";
});

$app->group(['prefix' => 'api/v1/','namespace' => 'App\Http\Controllers', 'middleware' => 'authApi'], function($app)
{
    $app->get('tasks','TaskController@index');
    $app->get('task/{id}','TaskController@getTask');
    $app->post('task','TaskController@createTask');
    $app->put('task/{id}','TaskController@updateTask');
    $app->delete('task/{id}','TaskController@deleteTask');
});
