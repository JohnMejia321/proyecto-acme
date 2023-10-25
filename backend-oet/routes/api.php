<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\ConductorController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::prefix('conductores')->group(function () {
    // Ruta para agregar un nuevo conductor (método POST)
    Route::post('agregar', [ConductorController::class, 'agregar']);

    // Ruta para listar todos los conductores (método GET)
    Route::get('listar', [ConductorController::class, 'listar']);

    // Ruta para ver un conductor por su ID (método GET)
    Route::get('ver/{id}', [ConductorController::class, 'verPorId']);

    // Ruta para borrar un conductor por su ID (método DELETE)
    Route::delete('borrar/{id}', [ConductorController::class, 'borrar']);
});

