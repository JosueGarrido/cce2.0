<?php

use app\User;
use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
//Rutas usuarios
Route::group(['middleware' => ['cors']], function () {

    Route::post('login', 'UserController@authenticate');
    Route::post('logout', 'UserController@logout');
    Route::post('register', 'UserController@register');
    Route::post('register-client', 'UserController@registerClient');
    Route::get('users', 'UserController@index');
    Route::delete('users/{user}', 'UserController@delete');
    Route::get('users/{user}/profile_picture', 'UserController@image');
    Route::get('products/{product}/image', 'ProductController@image');
    Route::get('products', 'ProductController@indexall');
    Route::get('category1', 'CategoryLevel1Controller@index');
    Route::get('category2', 'CategoryLevel2Controller@index');
    Route::get('category3', 'CategoryLevel3Controller@index');
    Route::get('user', 'UserController@getAuthenticatedUser');
    Route::get('products/{id}', 'ProductController@show');

    //Productos de un usuario
    Route::get('users/{user}/products/', 'ProductController@index');
    //Productos de una categoria
    Route::get('category2/{category2}/products/', 'ProductController@indexcat2');
    Route::get('category1/{category1}/products/', 'ProductController@indexcat1');

    Route::group(['middleware' => ['jwt.verify']], function() {



        Route::post('users', 'UserController@store');
        Route::put('users/{user}', 'UserController@update');
        Route::get('users/{user}', 'UserController@show');


        //Rutas audio/video formats
        Route::get('audioformats', 'AudioVideoFormatController@index');
        Route::get('audioformats/{id}', 'AudioVideoFormatController@show');
        Route::post('audioformats', 'AudioVideoFormatController@store');
        Route::put('audioformats/{id}', 'AudioVideoFormatController@update');
        Route::delete('audioformats/{id}', 'AudioVideoFormatController@delete');

        //Rutas categorias nivel 1

        Route::get('category1/{id}', 'CategoryLevel1Controller@show');
        Route::post('category1', 'CategoryLevel1Controller@store');
        Route::put('category1/{id}', 'CategoryLevel1Controller@update');
        Route::delete('category1/{id}', 'CategoryLevel1Controller@delete');

        //Rutas categorias nivel 2
        Route::get('category2/{id}', 'CategoryLevel2Controller@show');
        Route::post('category2', 'CategoryLevel2Controller@store');
        Route::put('category2/{id}', 'CategoryLevel2Controller@update');
        Route::delete('category2/{id}', 'CategoryLevel2Controller@delete');

        //Rutas categorias nivel 3

        Route::get('category3/{id}', 'CategoryLevel3Controller@show');
        Route::post('category3', 'CategoryLevel3Controller@store');
        Route::put('category3/{id}', 'CategoryLevel3Controller@update');
        Route::delete('category3/{id}', 'CategoryLevel3Controller@delete');

        //Rutas categorias nivel 4
        Route::get('category4', 'CategoryLevel4Controller@index');
        Route::get('category4/{id}', 'CategoryLevel4Controller@show');
        Route::post('category4', 'CategoryLevel4Controller@store');
        Route::put('category4/{id}', 'CategoryLevel4Controller@update');
        Route::delete('category4/{id}', 'CategoryLevel4Controller@delete');

        //Rutas proyectos culturales
        Route::get('culturalprojects', 'Cultural_ProjectsController@index');
        Route::get('culturalprojects/{id}', 'Cultural_ProjectsController@show');
        Route::post('culturalprojects', 'Cultural_ProjectsController@store');
        Route::put('culturalprojects/{id}', 'Cultural_ProjectsController@update');
        Route::delete('culturalprojects/{id}', 'Cultural_ProjectsController@delete');

        //Rutas formatos de foto
        Route::get('photoformats', 'PhotoFormatController@index');
        Route::get('photoformats/{id}', 'PhotoFormatController@show');
        Route::post('photoformats', 'PhotoFormatController@store');
        Route::put('photoformats/{id}', 'PhotoFormatController@update');
        Route::delete('photoformats/{id}', 'PhotoFormatController@delete');

        //Productos


        Route::post('products', 'ProductController@store');
        Route::put('products/{id}', 'ProductController@update');
        Route::delete('products/{id}', 'ProductController@delete');



        //Reconocimientos
        Route::get('recognitions', 'RecognitionController@index');
        Route::get('recognitions/{id}', 'RecognitionController@show');
        Route::post('recognitions', 'RecognitionController@store');
        Route::put('recognitions/{id}', 'RecognitionController@update');
        Route::delete('recognitions/{id}', 'RecognitionController@delete');

        //ventas
        Route::get('sales', 'SaleController@index');
        Route::get('sales/{id}', 'SaleController@show');
        Route::post('products/{product}/sales', 'SaleController@store');
        Route::put('sales/{id}', 'SaleController@update');
        Route::delete('sales/{id}', 'SaleController@delete');

        //Ventas de un producto
        Route::get('products/{product}/sales/', 'SaleController@indexsales');

        //links
        Route::get('weblinks', 'Web_LinksController@index');
        Route::get('weblinks/{id}', 'Web_LinksController@show');
        Route::post('weblinks', 'Web_LinksController@store');
        Route::put('weblinks/{id}', 'Web_LinksController@update');
        Route::delete('weblinks/{id}', 'Web_LinksController@delete');


        //trajectory
        Route::get('trajectories', 'TrajectoryController@index');
        Route::get('trajectories/{id}', 'TrajectoryController@show');
        Route::post('trajectories', 'TrajectoryController@store');
        Route::put('trajectories/{id}', 'TrajectoryController@update');
        Route::delete('trajectories/{id}', 'TrajectoryController@delete');

        //questions
        Route::get('questions', 'QuestionsController@index');
        Route::get('questions/{id}', 'QuestionsController@show');
        Route::post('questions', 'QuestionsController@store');
        Route::put('questions/{id}', 'QuestionsController@update');
        Route::delete('questions/{id}', 'QuestionsController@delete');

        //answers
        Route::get('answers', 'AnswersController@index');
        Route::get('answers/{id}', 'AnswersController@show');
        Route::post('answers', 'AnswersController@store');
        Route::put('answers/{id}', 'AnswersController@update');
        Route::delete('answers/{id}', 'AnswersController@delete');

        //reputation
        Route::get('users/{user}/reputations', 'ReputationController@index');
        Route::get('reputations/{id}', 'ReputationController@show');
        Route::post('users/{user}/reputations', 'ReputationController@store');
        Route::put('reputations/{id}', 'ReputationController@update');
        Route::delete('reputations/{id}', 'ReputationController@delete');


    });
});




