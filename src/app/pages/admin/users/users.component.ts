import { Component } from '@angular/core';
import { UsersService } from '../../../services/users/users.service';
import { Usuario } from '../../../nutri-data/interfaces/nutri-data';
import { DialogComponent } from '../../../components/dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-users',
  standalone: false,
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  
  displayedColumns: (string | undefined)[] = ['id', 'nombre','email', 'rol','contrasena','actions'];
  Users: Usuario[] = [];

  constructor(private usuarioService: UsersService,private dialog: MatDialog,){

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

  edit(user: Usuario){

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

  //  mostrarDialogForm(tittle:string,message:string,action:string | null){
  //   const dialogRef = this.dialog.open(DialogUserComponent, {
  //      width: '500px'
  //    });
 
  //    return dialogRef.afterClosed();
  //  }
}
