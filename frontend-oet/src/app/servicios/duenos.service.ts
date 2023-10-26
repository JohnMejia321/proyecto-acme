import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DuenosService {

  private apiUrl = 'http://localhost:8000/api/duenos'; // Reemplaza con la URL correcta de tu backend

  constructor(private http: HttpClient) {}

  enlistarDuenos(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }

  agregarDueno(dueno: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, dueno);
  }

  eliminarDueno(numeroCedula: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${numeroCedula}`);
  }
}
