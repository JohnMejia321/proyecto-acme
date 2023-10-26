import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehiculosService {
  private apiUrl = 'http://localhost:8000/api/vehiculos/'; 

  constructor(private http: HttpClient) { }

  // Método para obtener todos los vehículos
  getVehiculos(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }

  // Método para agregar un nuevo vehículo
  agregarVehiculo(vehiculo: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, vehiculo);
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

