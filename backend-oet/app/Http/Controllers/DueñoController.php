<?php

namespace App\Http\Controllers;

use App\Models\Dueño;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Validator;

class DueñoController extends Controller
{
    /**
     * Agregar un nuevo dueño.
     */
    public function agregar(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'numero_cedula' => 'required|integer|unique:dueños',
            'primer_nombre' => 'required|string',
            'segundo_nombre' => 'string|nullable',
            'apellidos' => 'required|string',
            'direccion' => 'string|nullable',
            'telefono' => 'string|nullable',


        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], Response::HTTP_BAD_REQUEST);
        }

        $dueño = new Dueño;
        $dueño->numero_cedula = $request->input('numero_cedula');
        $dueño->primer_nombre = $request->input('primer_nombre');
        $dueño->segundo_nombre = $request->input('segundo_nombre');
        $dueño->apellidos = $request->input('apellidos');
        $dueño->direccion = $request->input('direccion');
        $dueño->telefono = $request->input('telefono');
        $dueño->save();

        return response()->json(['message' => 'Dueño creado con éxito'], Response::HTTP_CREATED);
    }

    /**
     * Listar todos los dueños.
     */
    public function listar()
    {
        $dueños = Dueño::all();
        return response()->json($dueños, Response::HTTP_OK);
    }

    /**
     * Ver un dueño por su ID.
     */
    public function verPorId($id)
    {
        $dueño = Dueño::find($id);

        if (!$dueño) {
            return response()->json(['error' => 'Dueño no encontrado'], Response::HTTP_NOT_FOUND);
        }

        return response()->json($dueño, Response::HTTP_OK);
    }

    /**
     * Actualizar un dueño por su ID.
     */
    

    /**
     * Borrar un dueño por su ID.
     */
    public function borrar($id)
    {
        $dueño = Dueño::find($id);

        if (!$dueño) {
            return response()->json(['error' => 'Dueño no encontrado'], Response::HTTP_NOT_FOUND);
        }

        $dueño->delete();
        return response()->json(['message' => 'Dueño eliminado con éxito'], Response::HTTP_OK);
    }
}

