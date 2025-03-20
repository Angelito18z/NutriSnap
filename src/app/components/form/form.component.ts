import { Component,Input  } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  standalone: false,
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  @Input() isLogin: boolean = true;

  constructor(private router: Router){}

  login() {
    console.log('Iniciando sesión...');

    this.router.navigate(['/landing']);
}

// Función para manejar el registro
register() {
    console.log('Registrando usuario...');

    this.router.navigate(['/auth/login']);
}
}
