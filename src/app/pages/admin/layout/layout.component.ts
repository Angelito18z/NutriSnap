import { Component } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router:Router){}
  
  exit(){
    this.router.navigate(['/auth']);

  }
}
