import { Component,Input  } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-form',
  standalone: false,
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  @Input() isLogin: boolean = true;

  constructor(private router: Router, private snackBar: MatSnackBar){}

  login() {
    // Obtener los valores de los campos
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;

    // Validar que todos los campos estén completos
    if (!email || !password) {
        this.showToast('Todos los campos son obligatorios', 'error');
        return;
    }

    // Obtener el correo y contraseña guardados en localStorage
    const savedEmail = localStorage.getItem('email');
    const savedPassword = localStorage.getItem('password');

    // Validar que el correo y contraseña coincidan
    if (email === savedEmail && password === savedPassword) {
        this.showToast('Inicio de sesión exitoso', 'success');
        this.router.navigate(['/landing']); // Redirigir a la página de landing
    } else {
        this.showToast('Correo o contraseña incorrectos', 'error');
    }
}

// Función para manejar el registro
register() {
  // Obtener los valores de los campos
  const name = (document.getElementById('name') as HTMLInputElement).value;
  const email = (document.getElementById('email') as HTMLInputElement).value;
  const password = (document.getElementById('password') as HTMLInputElement).value;
  const confirmPassword = (document.getElementById('confirm-password') as HTMLInputElement).value;

  // Validar que todos los campos estén completos
  if (!name || !email || !password || !confirmPassword) {
      this.showToast('Todos los campos son obligatorios', 'error');
      return;
  }

  // Validar que las contraseñas coincidan
  if (password !== confirmPassword) {
      this.showToast('Las contraseñas no coinciden', 'error');
      return;
  }

  // Guardar el correo y contraseña en localStorage
  localStorage.setItem('email', email);
  localStorage.setItem('password', password);

  // Mostrar mensaje de éxito
  this.showToast('Registro exitoso', 'success');

  // Redirigir a la página de login
  this.router.navigate(['/auth/login']);
}

   // Función para mostrar notificaciones con estilos en línea
   showToast(message: string, color: string) {
    const styleClass = color === 'success' ? 'success-snackbar' : 
                       color === 'error' ? 'error-snackbar' : 
                       'warning-snackbar';

    this.snackBar.open(message, 'Cerrar', {
      duration: 3000,
      panelClass: [styleClass], // Aplica la clase dinámica
      horizontalPosition: 'end',
      verticalPosition: 'bottom'
    });
  }
}
