import { Component, OnInit } from '@angular/core';
import { Modal } from 'bootstrap';

interface Evaluador {
  id: number;
  nombre: string;
}

interface Evaluacion {
  evaluador: string;
  calificacion: number;
  feedback: string;
}

interface Proyecto {
  id: number;
  nombre: string;
  evaluadores: Evaluador[];
  evaluaciones: Evaluacion[];
}

@Component({
  selector: 'app-evaluaciones',
  templateUrl: './evaluaciones.component.html',
  styleUrls: ['./evaluaciones.component.css']
})
export class EvaluacionesComponent implements OnInit {
  proyectos: Proyecto[] = [
    {
      id: 1,
      nombre: 'Sistema de Gestión',
      evaluadores: [],
      evaluaciones: [
        { evaluador: 'Carlos López', calificacion: 85, feedback: 'Buen trabajo en general.' }
      ]
    },
    {
      id: 2,
      nombre: 'App Móvil',
      evaluadores: [],
      evaluaciones: [
        { evaluador: 'María Fernández', calificacion: 90, feedback: 'Excelente diseño y funcionalidad.' }
      ]
    }
  ];

  evaluadores: Evaluador[] = [
    { id: 1, nombre: 'Carlos López' },
    { id: 2, nombre: 'María Fernández' },
    { id: 3, nombre: 'Jorge Martínez' }
  ];

  asignacionSeleccionada = { proyecto: null as Proyecto | null, evaluador: null as Evaluador | null };
  proyectoSeleccionado: Proyecto | null = null;
  evaluacionSeleccionada: Evaluacion | null = null;

  constructor() {}

  ngOnInit(): void {}

  asignarEvaluador(): void {
    // Aseguramos que el tipo de proyecto y evaluador no es null
    const proyecto = this.asignacionSeleccionada.proyecto;
    const evaluador = this.asignacionSeleccionada.evaluador;

    if (proyecto && evaluador) {
      // Verificamos si el evaluador ya está asignado al proyecto
      if (!proyecto.evaluadores.find((e: Evaluador) => e.id === evaluador.id)) {
        proyecto.evaluadores.push(evaluador);
      }
      // Limpiamos la selección
      this.asignacionSeleccionada = { proyecto: null, evaluador: null };
    }
  }

  verEvaluaciones(proyecto: Proyecto): void {
    this.proyectoSeleccionado = proyecto;
    if (proyecto.evaluaciones.length > 0) {
      this.evaluacionSeleccionada = proyecto.evaluaciones[0]; // Muestra la primera evaluación como ejemplo
    } else {
      this.evaluacionSeleccionada = null;
    }
    const modalElement = document.getElementById('evaluacionModal');
    if (modalElement) {
      const evaluacionModal = new Modal(modalElement);
      evaluacionModal.show();
    }
  }
}
