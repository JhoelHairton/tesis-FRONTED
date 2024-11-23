import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isSidebarHidden = false;  // Variable para controlar la visibilidad del sidebar
  
  toggleSidebar() {
    this.isSidebarHidden = !this.isSidebarHidden;  // Cambia el estado de visibilidad
  }
}
