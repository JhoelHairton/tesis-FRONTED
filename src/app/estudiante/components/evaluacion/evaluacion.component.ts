import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evaluacion',
  templateUrl: './evaluacion.component.html',
  styleUrl: './evaluacion.component.css'
})
export class EvaluacionComponent implements OnInit {

    // Lista de evaluaciones
    evaluaciones = [
      {
        proyecto: 'Sistema de Gestión Académica',
        evaluador: 'Dr. Carlos Ramírez',
        calificacion: 4,
        comentarios: 'Buen trabajo en la implementación, pero faltaron pruebas adicionales.'
      },
      {
        proyecto: 'Análisis de Big Data en Redes Sociales',
        evaluador: 'Dra. Ana Gómez',
        calificacion: 5,
        comentarios: 'Excelente investigación, resultados muy bien presentados.'
      }
    ];
  
    constructor() {}
  
    ngOnInit(): void {}
  
    // Método para calcular estrellas (calificación)
    calcularEstrellas(calificacion: number): Array<number> {
      return Array(calificacion).fill(0);
    }
}
