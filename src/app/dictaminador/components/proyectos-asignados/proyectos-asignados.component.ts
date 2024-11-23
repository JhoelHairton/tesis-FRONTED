import { Component } from '@angular/core';

@Component({
  selector: 'app-proyectos-asignados',
  templateUrl: './proyectos-asignados.component.html',
  styleUrl: './proyectos-asignados.component.css'
})
export class ProyectosAsignadosComponent {
  proyectos = [
    {
      nombre: 'Sistema de Gestión Académica',
      estudiantes: ['Juan Pérez', 'Ana López'],
      lineaInvestigacion: 'Desarrollo de Software',
      estado: 'En Progreso'
    },
    {
      nombre: 'Análisis de Big Data',
      estudiantes: ['Carlos Ramírez', 'Laura Sánchez'],
      lineaInvestigacion: 'Big Data',
      estado: 'Completo'
    },
    {
      nombre: 'Optimización de Algoritmos en IA',
      estudiantes: ['Pedro Martínez'],
      lineaInvestigacion: 'Inteligencia Artificial',
      estado: 'Requiere Revisión'
    }
  ];

  constructor() {}

  ngOnInit(): void {}

  // Acción para evaluar un proyecto
  evaluarProyecto(proyecto: any): void {
    alert(`Iniciar evaluación para el proyecto: ${proyecto.nombre}`);
  }

}
