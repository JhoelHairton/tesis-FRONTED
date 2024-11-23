import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-admin-inicio',
  templateUrl: './admin-inicio.component.html',
  styleUrl: './admin-inicio.component.css',
  encapsulation: ViewEncapsulation.None // Esto permite que los estilos sean globales

})
export class AdminInicioComponent {


  isSidebarHidden = false;  // Variable para controlar la visibilidad del sidebar

  toggleSidebar() {
    this.isSidebarHidden = !this.isSidebarHidden;  // Cambia el estado de visibilidad
  }

  totalInscripciones: number = 150;  // Ejemplo de datos
  totalProyectosActivos: number = 30; // Ejemplo de datos
  totalPagosPendientes: number = 5;  // Ejemplo de datos

  constructor() {}

  ngOnInit(): void {
    // Aquí puedes llamar a un servicio para obtener los datos reales
    this.loadDashboardData();
  }

  loadDashboardData(): void {
    // Simulación de carga de datos (ejemplo)
    // Aquí podrías obtener los datos desde un servicio de backend.
    // Ejemplo:
    // this.dataService.getDashboardData().subscribe(data => {
    //   this.totalInscripciones = data.totalInscripciones;
    //   this.totalProyectosActivos = data.totalProyectosActivos;
    //   this.totalPagosPendientes = data.totalPagosPendientes;
    // });
}
}
