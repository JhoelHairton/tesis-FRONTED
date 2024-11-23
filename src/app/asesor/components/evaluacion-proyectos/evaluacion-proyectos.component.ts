import { Component } from '@angular/core';

@Component({
  selector: 'app-evaluacion-proyectos',
  templateUrl: './evaluacion-proyectos.component.html',
  styleUrl: './evaluacion-proyectos.component.css'
})
export class EvaluacionProyectosComponent {
   // Lista de proyectos asignados
   proyectos = [
    {
      nombre: 'Sistema de Gestión Académica',
      estudiantes: ['Juan Pérez', 'Ana López', 'Carlos García'],
      estado: 'En Progreso'
    },
    {
      nombre: 'Análisis de Big Data en Redes Sociales',
      estudiantes: ['Laura Martínez', 'Pedro Sánchez'],
      estado: 'Completado'
    },
    {
      nombre: 'Optimización de Algoritmos en IA',
      estudiantes: ['Luis Fernández', 'María Rivera'],
      estado: 'Requiere Revisión'
    }
  ];

  // Proyecto seleccionado para evaluación
  proyectoSeleccionado: any = null;

  // Modelo de evaluación
  evaluacion = {
    calificacion: '',
    comentarios: ''
  };

  constructor() {}

  ngOnInit(): void {}

  // Seleccionar un proyecto para evaluar
  evaluarProyecto(proyecto: any): void {
    this.proyectoSeleccionado = proyecto;
    this.evaluacion = { calificacion: '', comentarios: '' }; // Resetear evaluación
  }

  // Guardar la evaluación del proyecto
  guardarEvaluacion(): void {
    if (this.evaluacion.calificacion && this.evaluacion.comentarios.trim()) {
      alert(
        `Evaluación guardada para el proyecto "${this.proyectoSeleccionado.nombre}":\n` +
          `Calificación: ${this.evaluacion.calificacion} estrellas\n` +
          `Comentarios: ${this.evaluacion.comentarios}`
      );
      this.proyectoSeleccionado = null; // Limpiar proyecto seleccionado
    }
  }

  // Cancelar la evaluación
  cancelarEvaluacion(): void {
    this.proyectoSeleccionado = null;
  }

}
