import { Component } from '@angular/core';

@Component({
  selector: 'app-header-dic',
  templateUrl: './header-dic.component.html',
  styleUrl: './header-dic.component.css'
})
export class HeaderDicComponent {
  isSidebarHidden = false;  // Variable para controlar la visibilidad del sidebar


  toggleSidebar() {
    this.isSidebarHidden = !this.isSidebarHidden;  // Cambia el estado de visibilidad
  }

}
