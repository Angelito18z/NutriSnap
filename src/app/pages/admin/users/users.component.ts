import { Component } from '@angular/core';
import { UsersService } from '../../../services/users/users.service';
import { Usuario } from '../../../nutri-data/interfaces/nutri-data';
import { DialogComponent } from '../../../components/dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogUserComponent } from '../../../components/dialog-user/dialog-user.component';

@Component({
  selector: 'app-users',
  standalone: false,
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  
  displayedColumns: (string | undefined)[] = ['id', 'nombre','email', 'rol','contrasena','actions'];
  Users: Usuario[] = [];

  constructor(private usuarioService: UsersService,private dialog: MatDialog,private router:Router){

  }

  ngOnInit(){
    this.getUsuarios();
    console.log('displayedColumns:', this.displayedColumns);

  }

  getUsuarios() {
    this.usuarioService.getUsuarios().subscribe(
      (usuarios: Usuario[]) => {
        this.Users = usuarios; 
      },
      (error) => {
        console.error('Error al obtener usuarios:', error);
      }
    );
  }
  
  // En users.component.ts
edit(user: Usuario): void {
  // Abre el diálogo con los datos del usuario seleccionado
  const dialogRef = this.dialog.open(DialogUserComponent, {
    width: '500px',
    data: user, // Pasa el usuario seleccionado al diálogo
  });

  // Cuando se cierra el diálogo
  dialogRef.afterClosed().subscribe((result: Usuario) => {
    if (result) {
      console.log('Usuario editado:', result);
      this.actualizarUsuario(result); // Llama al método para actualizar el usuario
    }
  });
}

// Método para actualizar el usuario
actualizarUsuario(usuario: Usuario): void {
  this.usuarioService.updateUsuario(usuario).subscribe({
    next: (response) => {
      this.mostrarDialog(
        'Usuario actualizado con éxito',
        `Se actualizó a ${usuario.nombre} satisfactoriamente`,
        null
      );
      this.getUsuarios(); // Actualiza la lista de usuarios
    },
    error: (error) => {
      this.mostrarDialog(
        'Error al actualizar el usuario',
        `Hubo un error al actualizar a ${usuario.nombre}`,
        null
      );
    },
  });
}

   // Método para eliminar un usuario
   delete(user: Usuario) {
    // Mostrar el diálogo de confirmación
    this.mostrarDialog(
      '¿Estás seguro de borrar este usuario?',
      `Se eliminará a ${user.nombre} permanentemente.`,
      'Eliminar'
    ).subscribe((result: boolean) => {
      if (result) {
        // Si el usuario confirma, llamar al servicio para eliminar
        this.usuarioService.deleteUsuario(user.id).subscribe({
          next: () => {
            this.mostrarDialog(
              'Usuario Eliminado',
              'El usuario fue eliminado satisfactoriamente',
              null
            );
            this.getUsuarios();
          },
          error: (err) => {
            this.mostrarDialog(
              'Error al eliminar el usuario',
              'Hubo un error al eliminar el usuario :(',
              null
            );
          }
        });
      } else {
        this.mostrarDialog(
          'Accion cancelada ',
          'Operación cancelada satisfactoriamente',
          null
        );
      }
    });
  }

  mostrarDialog(tittle:string,message:string,action:string | null){
    const dialogRef = this.dialog.open(DialogComponent, {
       data: {
         title: tittle,
         message: message,
         action: action
       }
     });
 
     return dialogRef.afterClosed();
   }

   openDialog(): void {
    const currentRoute = this.router.url;

    switch (currentRoute) {
      case '/admin/users':
      this.openAgregarUsuarioDialog();
        break;
      case '/admin/trabajadores':
//        this.openAgregarTrabajadorDialog();
        break;
      case '/admin/pacientes':
 //       this.openAgregarOtraPaginaDialog();
        break;
      default:
        console.warn('No hay un diálogo definido para esta ruta:', currentRoute);
        break;
    }
  }

    openAgregarUsuarioDialog(): void {
      const dialogRef = this.dialog.open(DialogUserComponent, {
        width: '500px',
      });
  
      dialogRef.afterClosed().subscribe((result: Usuario) => {
        if (result) {
          console.log('Usuario a agregar:', result);
          this.agregarUsuario(result); // Llama al método para agregar el usuario
        }
      });
    }

    
      agregarUsuario(usuario: Usuario): void {
        this.usuarioService.addUsuario(usuario).subscribe({
          next: (response) => {
            this.mostrarDialog(
              'Usuario agregado con exito ',
              `Se agregó a ${usuario.nombre} satisfactoriamente`,
              null
            );
            this.getUsuarios()
          },
          error: (error) => {
            this.mostrarDialog(
              'Error al agregar al usuario',
              `Hubo un error al agregar al usuario ${usuario.nombre}`,
              null
            );   },
        });
      }
}
