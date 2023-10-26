<?php

namespace App\Http\Middleware;

use Closure;

class CorsMiddleware
{
    public function handle($request, Closure $next)
    {
        $response = $next($request);

        // Permitir solicitudes desde cualquier origen
        $response->header('Access-Control-Allow-Origin', '*');

        // Permitir solicitudes con estos métodos HTTP
        $response->header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');

        // Permitir estos encabezados personalizados
        $response->header('Access-Control-Allow-Headers', 'Content-Type, X-Requested-With');

        return $response;
    }
}
