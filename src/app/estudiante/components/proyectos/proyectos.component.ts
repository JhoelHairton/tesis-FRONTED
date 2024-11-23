import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.css'
})
export class ProyectosComponent {

   // Lista de proyectos asignados
   proyectos = [
    {
      titulo: 'Sistema de Gestión Académica',
      descripcion: 'Desarrollo de un sistema web para la gestión de tesis en universidades.',
      lineaInvestigacion: 'Desarrollo de Software',
      estado: 'En Progreso',
      progreso: 65,
      asesor: 'Dra. Ana Gómez',
      fechaInicio: new Date('2024-01-15'),
      fechaFin: new Date('2024-05-30')
    },
    {
      titulo: 'Análisis de Big Data en Redes Sociales',
      descripcion: 'Investigación sobre el análisis de grandes volúmenes de datos en redes sociales.',
      lineaInvestigacion: 'Big Data',
      estado: 'Completado',
      progreso: 100,
      asesor: 'Dr. Carlos Ramírez',
      fechaInicio: new Date('2023-06-01'),
      fechaFin: new Date('2023-11-30')
    }
  ];

  constructor() {}

  ngOnInit(): void {}

  // Método para ver detalles del proyecto (puede ser navegación o modal)
  verDetalles(proyecto: any): void {
    alert(`Detalles del proyecto: ${proyecto.titulo}`);
    // Aquí puedes implementar lógica para redirigir o mostrar más información
  }
}
