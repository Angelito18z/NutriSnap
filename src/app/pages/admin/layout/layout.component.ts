import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-layout',
  standalone: false,
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {



  public sidebarItems = [
    {label: 'Usuarios', icon: 'group', url: './users'},    
  ]

  constructor(private router:Router, private dialog:MatDialog){}
  
  openDialog(): void {
    const currentRoute = this.router.url;

    switch (currentRoute) {
      case '/admin/users':
     //   this.openAgregarUsuarioDialog();
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


  // openAgregarUsuarioDialog(): void {
  //   const dialogRef = this.dialog.open(DialogUserComponent, {
  //     width: '500px'
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     if (result) {
  //       console.log('Usuario agregado:', result);
  //       // Lógica para agregar el usuario
  //     }
  //   });
  // }


  exit(){
    this.router.navigate(['/auth']);

  }
}
