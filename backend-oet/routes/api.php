<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\ConductorController;
use App\Http\Controllers\VehiculoController;
use App\Http\Controllers\DueñoController;




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
    Route::post('', [ConductorController::class, 'agregar']);

    // Ruta para listar todos los conductores (método GET)
    Route::get('', [ConductorController::class, 'listar']);

    // Ruta para ver un conductor por su ID (método GET)
    Route::get('/{id}', [ConductorController::class, 'verPorId']);

    // Ruta para borrar un conductor por su ID (método DELETE)
    Route::delete('/{id}', [ConductorController::class, 'borrar']);
});



// Grupo de rutas para el controlador de Vehiculo
Route::prefix('vehiculos')->group(function () {
    Route::post('', [VehiculoController::class, 'agregar']); // Agregar un vehículo
    Route::get('', [VehiculoController::class, 'listar']); // Listar todos los vehículos
    Route::get('/{id}', [VehiculoController::class, 'verPorId']); // Ver un vehículo por su ID
    Route::delete('/{id}', [VehiculoController::class, 'borrar']); // Borrar un vehículo por su ID
});



// Grupo de rutas para el controlador de Dueño
Route::prefix('dueños')->group(function () {
    Route::post('', [DueñoController::class, 'agregar']); // Agregar un dueño
    Route::get('', [DueñoController::class, 'listar']); // Listar todos los dueños
    Route::get('/{id}', [DueñoController::class, 'verPorId']); // Ver un dueño por su ID
    Route::delete('/{id}', [DueñoController::class, 'borrar']); // Borrar un dueño por su ID
});



