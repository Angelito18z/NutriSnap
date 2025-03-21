import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../../nutri-data/interfaces/nutri-data';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiUrl = 'http://localhost:3000/usuarios';

  constructor(private http: HttpClient) {}

  //Metodo para obtener todos los usuarios
  getUsuarios(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

    //Metodo para obtener un usuario mediante el id
    getUsuarioById(id: number): Observable<any> {
      return this.http.get(`${this.apiUrl}/${id}`);
    }
  
    deleteUsuario(id: number):Observable<any>{
      return this.http.delete(`${this.apiUrl}/${id}`);
    } 

    addUsuario(user: Usuario):Observable<Usuario>{
      return this.http.post<Usuario>(`${this.apiUrl}/usuarios/${user.id}`,user);
  }

  updateUsuario (user:Usuario):Observable<Usuario>{
    if(!user.id) throw Error('User is required');
    return this.http.patch<Usuario>(`${this.apiUrl}/usuario/${user.id}`, user);
}
  
}
