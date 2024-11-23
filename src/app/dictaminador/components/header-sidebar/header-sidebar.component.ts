import { Component, ViewEncapsulation } from '@angular/core';
import { CargarScriptsService } from '../../../cargar-scripts.service';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-header-sidebar',
  templateUrl: './header-sidebar.component.html',
  styleUrl: './header-sidebar.component.css',
  encapsulation: ViewEncapsulation.None // Esto permite que los estilos sean globales

})
export class HeaderSidebarComponent {
  isSidebarHidden = false;  // Variable para controlar la visibilidad del sidebar

  toggleSidebar() {
    this.isSidebarHidden = !this.isSidebarHidden;  // Cambia el estado de visibilidad
  }

   // cargar scriptd
   constructor( private _CargaScripts:CargarScriptsService, private authService: AuthService )
   {
     _CargaScripts.Carga(["sidebar/sidebar"])
   }

   
   logout() {
    this.authService.logout();
  }

}
