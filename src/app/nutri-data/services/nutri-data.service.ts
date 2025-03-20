// src/app/services/nutri-data.service.ts
import { Injectable } from '@angular/core';
import { environments } from '../../../enviroments/environments';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { NutriData, Usuario, Paciente, Administrador, Trabajador } from '../interfaces/nutri-data';

@Injectable({ providedIn: 'root' })
export class NutriDataService {
    private baseUrl: string = environments.baseURL;

    constructor(private http: HttpClient) { }

    // Obtener todos los datos de nutrición
    getNutriData(): Observable<NutriData[]> {
        return this.http.get<NutriData[]>(`${this.baseUrl}/nutriData`);
    }

    // Obtener un dato de nutrición por ID
    getNutriDataById(id: string): Observable<NutriData | undefined> {
        return this.http.get<NutriData>(`${this.baseUrl}/nutriData/${id}`)
            .pipe(
                catchError(error => of(undefined))
            );
    }

    // Obtener sugerencias de búsqueda
    getSuggestions(query: string): Observable<NutriData[]> {
        return this.http.get<NutriData[]>(`${this.baseUrl}/nutriData?q=${query}&_limit=6`);
    }

    // Actualizar un dato de nutrición
    updateNutriData(nutriData: NutriData): Observable<NutriData> {
        if (!nutriData.id) throw Error('NutriData ID is required');
        return this.http.patch<NutriData>(`${this.baseUrl}/nutriData/${nutriData.id}`, nutriData);
    }

    // Agregar un nuevo dato de nutrición
    addNutriData(nutriData: NutriData): Observable<NutriData> {
        return this.http.post<NutriData>(`${this.baseUrl}/nutriData`, nutriData);
    }

    // Eliminar un dato de nutrición por ID
    deleteNutriData(id: string): Observable<boolean> {
        return this.http.delete(`${this.baseUrl}/nutriData/${id}`)
            .pipe(
                catchError(error => of(false)),
                map(resp => true)
            );
    }
}