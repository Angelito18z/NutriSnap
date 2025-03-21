import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../../nutri-data/interfaces/nutri-data';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiUrl = 'http://localhost:3000/usuarios';
  private usuariosSubject = new BehaviorSubject<Usuario[]>([]);
  usuarios$ = this.usuariosSubject.asObservable();

  constructor(private http: HttpClient) {}

  // Método para obtener todos los usuarios
  getUsuarios(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // Método para actualizar la lista de usuarios
  actualizarUsuarios(usuarios: Usuario[]): void {
    this.usuariosSubject.next(usuarios);
  }

  // Método para obtener un usuario mediante el id
  getUsuarioById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  // Método para eliminar un usuario
  deleteUsuario(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
  
  // Método para agregar un nuevo usuario
  addUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.apiUrl}`, usuario);
  }

  // Método para actualizar un usuario existente
  updateUsuario(user: Usuario): Observable<Usuario> {
    if (!user.id) throw Error('User ID is required');
    return this.http.put<Usuario>(`${this.apiUrl}/${user.id}`, user);
  }

  // Método para verificar si el usuario está autenticado
  isAuthenticated(): boolean {
    const token = localStorage.getItem('token'); // Asume que el token se almacena con la clave 'token'
    return !!token; // Devuelve true si el token existe, false si no existe
  }

  // Método para asignar el token en el localStorage
  generateToken(): string {
    const header = btoa(JSON.stringify({ alg: 'HS256', typ: 'JWT' }));
    const payload = btoa(JSON.stringify({ user: 'usuario', exp: Date.now() + 3600000 }));
    const signature = btoa(Math.random().toString(36).substring(2));
  
    const token = `${header}.${payload}.${signature}`;
    this.setToken(token); // Guardar el token en localStorage
    return token;
  }
  

  setToken(token:string){
    localStorage.setItem('token', token)
  }
  // Método para eliminar el token del localStorage
  removeToken(): void {
    localStorage.removeItem('token'); // Elimina el token del localStorage
  }
}