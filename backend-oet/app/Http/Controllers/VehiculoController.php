<?php

namespace App\Http\Controllers;

use App\Models\Vehiculo;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Validator;

class VehiculoController extends Controller
{
    /**
     * Agregar un nuevo vehículo.
     */
    public function agregar(Request $request)
    {
        // Validar los datos de entrada
        $validator = Validator::make($request->all(), [
            'placa' => 'required|max:10',
            'color' => 'max:45',
            'marca' => 'max:45',
            'tipo_de_vehiculo' => 'in:particular,publico',
            'conductorID' => 'required|integer|exists:conductores,numero_cedula',
            'propietarioID' => 'required|integer|exists:dueños,numero_cedula',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], Response::HTTP_BAD_REQUEST);
        }

        // Crear un nuevo vehículo
        $vehiculo = new Vehiculo;
        // Asignar los valores a los campos
        $vehiculo->placa = $request->input('placa');
        $vehiculo->color = $request->input('color');
        $vehiculo->marca = $request->input('marca');
        $vehiculo->tipo_de_vehiculo = $request->input('tipo_de_vehiculo');
        $vehiculo->conductorID = $request->input('conductorID');
        $vehiculo->propietarioID = $request->input('propietarioID');
        $vehiculo->save();

        return response()->json(['message' => 'Vehículo creado con éxito'], Response::HTTP_CREATED);
    }

    /**
     * Listar todos los vehículos.
     */
    public function listar()
    {
        $vehiculos = Vehiculo::all();
        return response()->json($vehiculos, Response::HTTP_OK);
    }

    /**
     * Ver un vehículo por su ID.
     */
    public function verPorId($id)
    {
        $vehiculo = Vehiculo::find($id);

        if (!$vehiculo) {
            return response()->json(['error' => 'Vehículo no encontrado'], Response::HTTP_NOT_FOUND);
        }

        return response()->json($vehiculo, Response::HTTP_OK);
    }

    /**
     * Borrar un vehículo por su ID.
     */
    public function borrar($id)
    {
        $vehiculo = Vehiculo::find($id);

        if (!$vehiculo) {
            return response()->json(['error' => 'Vehículo no encontrado'], Response::HTTP_NOT_FOUND);
        }

        $vehiculo->delete();
        return response()->json(['message' => 'Vehículo eliminado con éxito'], Response::HTTP_OK);
    }
}
