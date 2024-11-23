import { Component } from '@angular/core';

@Component({
  selector: 'app-estudiante-header',
  templateUrl: './estudiante-header.component.html',
  styleUrl: './estudiante-header.component.css'
})
export class EstudianteHeaderComponent {
  isSidebarHidden = false;  // Variable para controlar la visibilidad del sidebar
  
  toggleSidebar() {
    this.isSidebarHidden = !this.isSidebarHidden;  // Cambia el estado de visibilidad
  }

}
