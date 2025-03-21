import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
 import { DialogUserComponent } from '../../../components/dialog-user/dialog-user.component';
import { UsersService } from '../../../services/users/users.service';
import { Usuario } from '../../../nutri-data/interfaces/nutri-data';
import { DialogComponent } from '../../../components/dialog/dialog.component';
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

  constructor(private router:Router, private dialog:MatDialog, private usuarioService:UsersService){}
  
  exit(){
    this.router.navigate(['/auth']);

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
}
