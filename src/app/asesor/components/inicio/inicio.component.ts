import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  proyectosActivos: number = 5; // Número de proyectos activos (ejemplo)
  solicitudesPendientes: number = 2; // Número de solicitudes pendientes (ejemplo)

  constructor() {}

  ngOnInit(): void {
    // Aquí podrías agregar lógica para obtener datos desde un servicio
    // Ejemplo: Consultar proyectos activos y solicitudes pendientes desde la API
  }

}
