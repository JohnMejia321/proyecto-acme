import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConductoresService {

  private apiUrl = 'http://localhost:8000/api/conductores';

  constructor(private http: HttpClient) { }

  enlistarConductores(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  agregarConductor(conductor: any): Observable<any> {
    return this.http.post(this.apiUrl, conductor);
  }

  eliminarConductor(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }
}
