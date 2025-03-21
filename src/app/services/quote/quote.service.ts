import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Cita } from '../../nutri-data/interfaces/nutri-data';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  private apiUrl = 'http://localhost:3000/citas'; // URL de la API para citas
  private citasSubject = new BehaviorSubject<Cita[]>([]);
  citas$ = this.citasSubject.asObservable();

  constructor(private http: HttpClient) {}

  // Método para obtener todas las citas
  getCitas(): Observable<Cita[]> {
    return this.http.get<Cita[]>(this.apiUrl);
  }

  // Método para actualizar la lista de citas
  actualizarCitas(citas: Cita[]): void {
    this.citasSubject.next(citas);
  }

  // Método para obtener una cita por su ID
  getCitaById(id: string): Observable<Cita> {
    return this.http.get<Cita>(`${this.apiUrl}/${id}`);
  }

  // Método para eliminar una cita
  deleteCita(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  // Método para agregar una nueva cita
  addCita(cita: Cita): Observable<Cita> {
    return this.http.post<Cita>(this.apiUrl, cita);
  }

  // Método para actualizar una cita existente
  updateCita(cita: Cita): Observable<Cita> {
    if (!cita.id) throw Error('Cita ID is required');
    return this.http.put<Cita>(`${this.apiUrl}/${cita.id}`, cita);
  }

  // Método para verificar si el usuario está autenticado (opcional, si lo necesitas)
  isAuthenticated(): boolean {
    const token = localStorage.getItem('token'); // Asume que el token se almacena con la clave 'token'
    return !!token; // Devuelve true si el token existe, false si no existe
  }

  // Método para generar un token (opcional, si lo necesitas)
  generateToken(): string {
    const header = btoa(JSON.stringify({ alg: 'HS256', typ: 'JWT' }));
    const payload = btoa(JSON.stringify({ user: 'usuario', exp: Date.now() + 3600000 }));
    const signature = btoa(Math.random().toString(36).substring(2));

    const token = `${header}.${payload}.${signature}`;
    this.setToken(token); // Guardar el token en localStorage
    return token;
  }

  // Método para guardar el token en localStorage (opcional, si lo necesitas)
  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  // Método para eliminar el token del localStorage (opcional, si lo necesitas)
  removeToken(): void {
    localStorage.removeItem('token');
  }
}