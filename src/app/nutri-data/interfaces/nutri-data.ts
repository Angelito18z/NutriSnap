// src/app/interfaces/nutri-data.interface.ts
export interface NutriData {
    id: string;
    usuarios: Usuario[];
    pacientes: Paciente[];
    administradores: Administrador[];
    trabajadores: Trabajador[];
}

export interface Usuario {
    id: string 
    nombre: string;
    email: string;
    rol: string;
    contrasena: string;
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
    alt_img?: string; 
}

export interface Alimento {
    id: number;
    nombre: string;
    calorias: number;
    carbohidratos: number;
    proteinas: number;
    grasas: number;
    fibra: number;
  }

  export interface Cita {
    id: string;
    paciente_id: number;
    trabajador_id: number;
    fecha: string;
    hora: string;
    duracion: number;
    notas: string;
  }
  