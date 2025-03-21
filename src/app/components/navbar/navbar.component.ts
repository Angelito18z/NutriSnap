import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users/users.service';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isAuthenticated: boolean = false;
  constructor(private router: Router, private userService: UsersService){}
  
  ngOnInit(){
   this.isAuthenticated = this.userService.isAuthenticated();
  }

  login(){
    this.router.navigate(['/auth/login'])
  }

  register(){
    this.router.navigate(['/auth/register']) 
  }

  logout(){
    this.userService.removeToken();
    this.isAuthenticated = this.userService.isAuthenticated(); 
  }
}
