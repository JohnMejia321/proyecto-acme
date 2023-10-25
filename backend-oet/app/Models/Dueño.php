<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Dueño extends Model
{
    use HasFactory;

    protected $table = 'dueños'; // Especifica el nombre de la tabla

    protected $primaryKey = 'numero_cedula'; // Especifica la clave primaria

    // Lista de atributos que se pueden llenar
    protected $fillable = [
        'numero_cedula',
        'primer_nombre',
        'segundo_nombre',
        'apellidos',
        'direccion',
        'telefono',
    ];

    //  los campos de fecha por defecto (created_at y updated_at)
    public $timestamps = false;
}

