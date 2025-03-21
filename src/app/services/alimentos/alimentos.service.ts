import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlimentosService {
  private apiUrl = 'http://localhost:3000/productos';

  constructor(private http: HttpClient) {}

  getAlimentoById(id: string): Observable<any> {
    console.log('Making API call for ID:', id); // Debugging line
    return this.http.get(`${this.apiUrl}/${id}`);
  }
}
