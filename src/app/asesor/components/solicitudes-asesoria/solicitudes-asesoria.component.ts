import { Component } from '@angular/core';

@Component({
  selector: 'app-solicitudes-asesoria',
  templateUrl: './solicitudes-asesoria.component.html',
  styleUrl: './solicitudes-asesoria.component.css'
})
export class SolicitudesAsesoriaComponent {
   // Lista de solicitudes de asesoría
   solicitudes = [
    {
      estudiante: 'Juan Pérez',
      proyecto: 'Sistema de Gestión Académica',
      lineaInvestigacion: 'Desarrollo de Software'
    },
    {
      estudiante: 'Ana López',
      proyecto: 'Análisis de Big Data en Redes Sociales',
      lineaInvestigacion: 'Big Data'
    },
    {
      estudiante: 'Carlos García',
      proyecto: 'Optimización de Algoritmos en IA',
      lineaInvestigacion: 'Inteligencia Artificial'
    }
  ];

  constructor() {}

  ngOnInit(): void {}

  // Aceptar una solicitud
  aceptarSolicitud(solicitud: any): void {
    alert(`Has aceptado la solicitud de ${solicitud.estudiante} para el proyecto "${solicitud.proyecto}".`);
    this.eliminarSolicitud(solicitud);
  }

  // Rechazar una solicitud
  rechazarSolicitud(solicitud: any): void {
    alert(`Has rechazado la solicitud de ${solicitud.estudiante} para el proyecto "${solicitud.proyecto}".`);
    this.eliminarSolicitud(solicitud);
  }

  // Eliminar una solicitud de la lista
  private eliminarSolicitud(solicitud: any): void {
    this.solicitudes = this.solicitudes.filter((s) => s !== solicitud);
  }

}
