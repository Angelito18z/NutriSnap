import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UsersService } from '../../services/users/users.service'; // Importa el servicio de usuarios
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Usuario } from '../../nutri-data/interfaces/nutri-data';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  standalone:false
})
export class FormComponent {
  @Input() isLogin: boolean = true;

  constructor(
    private router: Router,
    private snackBar: MatSnackBar,
    private usersService: UsersService // Inyecta el servicio de usuarios
  ) {}

  // Método para manejar el inicio de sesión
  login() {
    // Obtener los valores de los campos
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;
  
    // Validar que todos los campos estén completos
    if (!email || !password) {
      this.showToast('Todos los campos son obligatorios', 'error');
      return;
    }
  
    // Consumir el servicio para autenticar al usuario
    this.usersService.getUsuarios().subscribe(
      (usuarios: Usuario[]) => {
        // Verificar que se recibieron datos
        if (!usuarios || usuarios.length === 0) {
          this.showToast('No se encontraron usuarios', 'error');
          return;
        }
  
        // Buscar el usuario en la lista
        const usuario = usuarios.find(
          (u) => u.email === email && u.contrasena === password 
        );
  
        // Verificar si se encontró el usuario
        if (usuario) {
          // Guardar el token en el localStorage (simulado)
          this.usersService.generateToken();
          this.showToast('Inicio de sesión exitoso', 'success');
          this.router.navigate(['/admin']); // Redirigir a la página de admin
        } else {
          console.log('Usuario no encontrado:', { email, password }); // Depuración
          this.showToast('Correo o contraseña incorrectos', 'error');
        }
      },
      (error) => {
        console.error('Error al obtener usuarios:', error); // Depuración
        this.showToast('Error al autenticar', 'error');
      }
    );
  }

  // Método para manejar el registro
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
  
    const nuevoUsuario: Usuario = {
      id: (Date.now() + Math.floor(Math.random() * 1000)).toString(), // Genera un ID único
      nombre: name,
      email: email,
      rol: 'usuario',
      contrasena: password,
      fecha_registro: new Date().toISOString(),
      ultimo_acceso: new Date().toISOString(),
    };
  
    // Consumir el servicio para registrar al usuario y esperar la respuesta
    this.usersService.addUsuario(nuevoUsuario).subscribe({
      next: (usuarioCreado: Usuario) => {
        // Aquí deberías recibir el usuario con el ID generado por el backend
        console.log('Usuario registrado:', usuarioCreado);
        this.showToast('Registro exitoso', 'success');
        this.router.navigate(['/auth/login']); // Redirigir a la página de login
      },
      error: (error) => {
        console.error('Error al registrar usuario:', error);
        this.showToast('Error al registrar el usuario', 'error');
      }
    });
  }
  
  // Función para mostrar notificaciones con estilos en línea
  showToast(message: string, color: string) {
    const styleClass =
      color === 'success'
        ? 'success-snackbar'
        : color === 'error'
        ? 'error-snackbar'
        : 'warning-snackbar';

    this.snackBar.open(message, 'Cerrar', {
      duration: 3000,
      panelClass: [styleClass], // Aplica la clase dinámica
      verticalPosition: 'bottom',
    });
  }

  // Método para regresar a la página de inicio
  goBack() {
    this.router.navigate(['/landing']);
  }
}