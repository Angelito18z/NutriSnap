import { Component } from '@angular/core';
import { Trabajador } from '../../../nutri-data/interfaces/nutri-data';
@Component({
  selector: 'app-heroe',
  standalone: false,
  templateUrl: './heroe.component.html',
  styleUrl: './heroe.component.scss'
})
export class HeroeComponents {
  trabajador: Trabajador = {
    id: 1,
    alt_img: 'assets/nutriologos/Angel.jpg',
    usuario_id: 1,
    especialidad: '',
    horario: '',
    pacientes_asignados: []
  };
}

