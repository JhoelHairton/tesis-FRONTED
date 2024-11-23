import { Component } from '@angular/core';

@Component({
  selector: 'app-proyectos-asignados',
  templateUrl: './proyectos-asignados.component.html',
  styleUrl: './proyectos-asignados.component.css'
})
export class ProyectosAsignadosComponent {

  // Lista de proyectos asignados
  proyectos = [
    {
      nombre: 'Sistema de Gestión Académica',
      estudiantes: ['Juan Pérez', 'Ana López', 'Carlos García'],
      lineaInvestigacion: 'Desarrollo de Software',
      progreso: 75
    },
    {
      nombre: 'Análisis de Big Data en Redes Sociales',
      estudiantes: ['Laura Martínez', 'Pedro Sánchez'],
      lineaInvestigacion: 'Big Data',
      progreso: 100
    },
    {
      nombre: 'Optimización de Algoritmos en IA',
      estudiantes: ['Luis Fernández', 'María Rivera'],
      lineaInvestigacion: 'Inteligencia Artificial',
      progreso: 50
    }
  ];

  constructor() {}

  ngOnInit(): void {}

  // Método para ver detalles del proyecto (simulado con alerta)
  verDetalles(proyecto: any): void {
    alert(`Detalles del proyecto:\n${JSON.stringify(proyecto, null, 2)}`);
  }

}
