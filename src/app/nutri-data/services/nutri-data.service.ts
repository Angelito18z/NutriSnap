import { Injectable } from '@angular/core';
import { environments } from '../../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { NutriData, Usuario, Paciente, Administrador, Trabajador,Alimento  } from '../interfaces/nutri-data';

@Injectable({ providedIn: 'root' })
export class NutriDataService {
    private baseUrl: string = environments.baseURL;

    constructor(private http: HttpClient) { }

    // ==================== Métodos CRUD para NutriData ====================
    getNutriData(): Observable<NutriData[]> {
        return this.http.get<NutriData[]>(`${this.baseUrl}/nutriData`);
    }

    getNutriDataById(id: string): Observable<NutriData | undefined> {
        return this.http.get<NutriData>(`${this.baseUrl}/nutriData/${id}`)
            .pipe(
                catchError(error => of(undefined))
            );
    }

    updateNutriData(nutriData: NutriData): Observable<NutriData> {
        if (!nutriData.id) throw Error('NutriData ID is required');
        return this.http.patch<NutriData>(`${this.baseUrl}/nutriData/${nutriData.id}`, nutriData);
    }

    addNutriData(nutriData: NutriData): Observable<NutriData> {
        return this.http.post<NutriData>(`${this.baseUrl}/nutriData`, nutriData);
    }

    deleteNutriData(id: string): Observable<boolean> {
        return this.http.delete(`${this.baseUrl}/nutriData/${id}`)
            .pipe(
                catchError(error => of(false)),
                map(resp => true)
            );
    }

    // ==================== Métodos CRUD para Usuario ====================
    getUsuarios(): Observable<Usuario[]> {
        return this.http.get<Usuario[]>(`${this.baseUrl}/usuarios`);
    }

    getUsuarioById(id: number): Observable<Usuario | undefined> {
        return this.http.get<Usuario>(`${this.baseUrl}/usuarios/${id}`)
            .pipe(
                catchError(error => of(undefined))
            );
    }

    addUsuario(usuario: Usuario): Observable<Usuario> {
        return this.http.post<Usuario>(`${this.baseUrl}/usuarios`, usuario);
    }

    updateUsuario(usuario: Usuario): Observable<Usuario> {
        if (!usuario.id) throw Error('Usuario ID is required');
        return this.http.patch<Usuario>(`${this.baseUrl}/usuarios/${usuario.id}`, usuario);
    }

    deleteUsuario(id: number): Observable<boolean> {
        return this.http.delete(`${this.baseUrl}/usuarios/${id}`)
            .pipe(
                catchError(error => of(false)),
                map(resp => true)
            );
    }

    // ==================== Métodos CRUD para Paciente ====================
    getPacientes(): Observable<Paciente[]> {
        return this.http.get<Paciente[]>(`${this.baseUrl}/pacientes`);
    }

    getPacienteById(id: number): Observable<Paciente | undefined> {
        return this.http.get<Paciente>(`${this.baseUrl}/pacientes/${id}`)
            .pipe(
                catchError(error => of(undefined))
            );
    }

    addPaciente(paciente: Paciente): Observable<Paciente> {
        return this.http.post<Paciente>(`${this.baseUrl}/pacientes`, paciente);
    }

    updatePaciente(paciente: Paciente): Observable<Paciente> {
        if (!paciente.id) throw Error('Paciente ID is required');
        return this.http.patch<Paciente>(`${this.baseUrl}/pacientes/${paciente.id}`, paciente);
    }

    deletePaciente(id: number): Observable<boolean> {
        return this.http.delete(`${this.baseUrl}/pacientes/${id}`)
            .pipe(
                catchError(error => of(false)),
                map(resp => true)
            );
    }

    // ==================== Métodos CRUD para Administrador ====================
    getAdministradores(): Observable<Administrador[]> {
        return this.http.get<Administrador[]>(`${this.baseUrl}/administradores`);
    }

    getAdministradorById(id: number): Observable<Administrador | undefined> {
        return this.http.get<Administrador>(`${this.baseUrl}/administradores/${id}`)
            .pipe(
                catchError(error => of(undefined))
            );
    }

    addAdministrador(administrador: Administrador): Observable<Administrador> {
        return this.http.post<Administrador>(`${this.baseUrl}/administradores`, administrador);
    }

    updateAdministrador(administrador: Administrador): Observable<Administrador> {
        if (!administrador.id) throw Error('Administrador ID is required');
        return this.http.patch<Administrador>(`${this.baseUrl}/administradores/${administrador.id}`, administrador);
    }

    deleteAdministrador(id: number): Observable<boolean> {
        return this.http.delete(`${this.baseUrl}/administradores/${id}`)
            .pipe(
                catchError(error => of(false)),
                map(resp => true)
            );
    }

    // ==================== Métodos CRUD para Trabajador ====================
    getTrabajadores(): Observable<Trabajador[]> {
        return this.http.get<Trabajador[]>(`${this.baseUrl}/trabajadores`);
    }

    getTrabajadorById(id: number): Observable<Trabajador | undefined> {
        return this.http.get<Trabajador>(`${this.baseUrl}/trabajadores/${id}`)
            .pipe(
                catchError(error => of(undefined))
            );
    }

    addTrabajador(trabajador: Trabajador): Observable<Trabajador> {
        return this.http.post<Trabajador>(`${this.baseUrl}/trabajadores`, trabajador);
    }

    updateTrabajador(trabajador: Trabajador): Observable<Trabajador> {
        if (!trabajador.id) throw Error('Trabajador ID is required');
        return this.http.patch<Trabajador>(`${this.baseUrl}/trabajadores/${trabajador.id}`, trabajador);
    }

    deleteTrabajador(id: number): Observable<boolean> {
        return this.http.delete(`${this.baseUrl}/trabajadores/${id}`)
            .pipe(
                catchError(error => of(false)),
                map(resp => true)
            );
    }
}

export class AlimentoService {
    private baseUrl: string = environments.baseURL;
  
    constructor(private http: HttpClient) {}
  
    getAlimentos(): Observable<Alimento[]> {
      return this.http.get<Alimento[]>(`${this.baseUrl}/alimentos`);
    }
  
    getAlimentoById(id: number): Observable<Alimento | undefined> {
      return this.http.get<Alimento>(`${this.baseUrl}/alimentos/${id}`).pipe(
        catchError(() => of(undefined))
      );
    }
  
    addAlimento(alimento: Alimento): Observable<Alimento> {
      return this.http.post<Alimento>(`${this.baseUrl}/alimentos`, alimento);
    }
  
    updateAlimento(alimento: Alimento): Observable<Alimento> {
      if (!alimento.id) throw Error('Alimento ID is required');
      return this.http.patch<Alimento>(`${this.baseUrl}/alimentos/${alimento.id}`, alimento);
    }
  
    deleteAlimento(id: number): Observable<boolean> {
      return this.http.delete(`${this.baseUrl}/alimentos/${id}`).pipe(
        catchError(() => of(false)),
        map(() => true)
      );
    }
  }