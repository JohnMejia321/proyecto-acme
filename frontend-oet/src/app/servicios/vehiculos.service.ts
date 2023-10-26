import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehiculosService {
  private apiUrl = 'http://localhost:8000/api/vehiculos'; 

  constructor(private http: HttpClient) { }

  // Método para obtener todos los vehículos
  getVehiculos(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }

  agregarVehiculo(vehiculo: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, vehiculo).pipe(
      catchError((error: any) => {
        console.error('Error al agregar vehículo:', error);
        throw error;
      })
    );
  }
  

  // Método para obtener un vehículo por ID
  getVehiculoPorId(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  // Método para eliminar un vehículo por ID
  eliminarVehiculo(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}

