<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Vehiculo extends Model
{
    use HasFactory;

    protected $table = 'vehiculos'; // Especifica el nombre de la tabla

    protected $primaryKey = 'placa'; // Especifica la clave primaria

    // Lista de atributos que se pueden llenar
    protected $fillable = [
        'placa',
        'color',
        'marca',
        'tipo_de_vehiculo',
        'conductorID',
        'propietarioID',
    ];

    // Si no deseas los campos de fecha por defecto (created_at y updated_at)
    public $timestamps = false;

    // Definir relaciones con las tablas relacionadas (Conductor y Dueño)
    public function conductor()
    {
        return $this->belongsTo(Conductor::class, 'conductorID', 'numero_cedula');
    }

    public function propietario()
    {
        return $this->belongsTo(Dueño::class, 'propietarioID', 'numero_cedula');
    }
}


