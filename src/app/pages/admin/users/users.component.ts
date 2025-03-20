import { Component } from '@angular/core';
import { UsersService } from '../../../services/users/users.service';
import { Usuario } from '../../../nutri-data/interfaces/nutri-data';
@Component({
  selector: 'app-users',
  standalone: false,
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  
  displayedColumns: (string | undefined)[] = ['id', 'nombre','email', 'rol','contrasena','actions'];
  Users: Usuario[] = [];

  constructor(private usuarioService: UsersService){

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

  delete(user: Usuario){

  }
}
