// src/app/interfaces/nutri-data.interface.ts
export interface NutriData {
    id: string;
    usuarios: Usuario[];
    pacientes: Paciente[];
    administradores: Administrador[];
    trabajadores: Trabajador[];
}

export interface Usuario {
    id: number;
    nombre: string;
    email: string;
    rol: string;
    contraseña: string;
    fecha_registro: string;
    ultimo_acceso: string;
}

export interface Paciente {
    id: number;
    usuario_id: number;
    edad: number;
    genero: string;
    altura: number;
    peso: number;
    objetivo: string;
    alergias: string[];
    condiciones_medicas: string[];
    historial_nutricional: HistorialNutricional[];
}

export interface HistorialNutricional {
    fecha: string;
    comida: string;
    descripcion: string;
    calorias: number;
}

export interface Administrador {
    id: number;
    usuario_id: number;
    nivel_acceso: string;
    responsabilidades: string[];
}

export interface Trabajador {
    id: number;
    usuario_id: number;
    especialidad: string;
    horario: string;
    pacientes_asignados: number[];
}