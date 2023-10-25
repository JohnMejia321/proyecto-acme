<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use App\Models\Conductor;


class ConductorController extends Controller{


public function agregar(Request $request)
{
    // Valida los datos del formulario
    $request->validate([
        'numero_cedula' => 'required|integer|unique:conductores',
        'primer_nombre' => 'required|string',
        'segundo_nombre' => 'string|nullable',
        'apellidos' => 'required|string',
        'direccion' => 'string|nullable',
        'telefono' => 'string|nullable',
        'ciudad' => 'string|nullable',
    ]);

    // Crea un nuevo conductor utilizando los datos del formulario
    $conductor = new Conductor([
        'numero_cedula' => $request->input('numero_cedula'),
        'primer_nombre' => $request->input('primer_nombre'),
        'segundo_nombre' => $request->input('segundo_nombre'),
        'apellidos' => $request->input('apellidos'),
        'direccion' => $request->input('direccion'),
        'telefono' => $request->input('telefono'),
        'ciudad' => $request->input('ciudad'),
    ]);

    // Guarda el conductor en la base de datos
    $conductor->save();

    // Devuelve una respuesta JSON con un mensaje de éxito
    return response()->json(['message' => 'Conductor agregado con éxito']);
}

public function listar()
{
    // Obtiene todos los conductores de la base de datos
    $conductores = Conductor::all();

    // Devuelve una respuesta JSON con la lista de conductores
    return response()->json(['conductores' => $conductores]);
}

public function verPorId($id)
{
    // Busca un conductor por su ID
    $conductor = Conductor::find($id);

    // Comprueba si el conductor existe
    if ($conductor) {
        // Devuelve una respuesta JSON con los detalles del conductor
        return response()->json(['conductor' => $conductor]);
    } else {
        // Devuelve una respuesta JSON con un mensaje de error si el conductor no se encuentra
        return response()->json(['error' => 'Conductor no encontrado'], 404);
    }
}

public function borrar($id)
{
    // Busca un conductor por su ID
    $conductor = Conductor::find($id);

    // Comprueba si el conductor existe
    if ($conductor) {
        // Borra el conductor de la base de datos
        $conductor->delete();

        // Devuelve una respuesta JSON con un mensaje de éxito
        return response()->json(['message' => 'Conductor borrado con éxito']);
    } else {
        // Devuelve una respuesta JSON con un mensaje de error si el conductor no se encuentra
        return response()->json(['error' => 'Conductor no encontrado'], 404);
    }
}

}
