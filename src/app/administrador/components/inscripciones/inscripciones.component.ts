import { Component, OnInit } from '@angular/core';
import * as bootstrap from 'bootstrap';


interface Estudiante {
  nombre: string;
  programa: string;
  estado: string;
  etapa: string;
  pago: string;
}

@Component({
  selector: 'app-inscripciones',
  templateUrl: './inscripciones.component.html',
  styleUrl: './inscripciones.component.css'
})
export class InscripcionesComponent implements OnInit {
  estudiantes: Estudiante[] = [
    { nombre: 'Juan Pérez', programa: 'Ingeniería', estado: 'Completado', etapa: '3', pago: 'Pagado' },
    { nombre: 'Ana Gómez', programa: 'Arquitectura', estado: 'Pendiente', etapa: '1', pago: 'Pendiente' },
    { nombre: 'Luis Martínez', programa: 'Medicina', estado: 'En Proceso', etapa: '2', pago: 'Pagado' },
    // Más estudiantes de ejemplo
  ];
  estudiantesFiltrados: Estudiante[] = [];
  estudianteSeleccionado: Estudiante | null = null;
  proyectosDisponibles = [
    { nombre: 'Proyecto A' },
    { nombre: 'Proyecto B' },
    { nombre: 'Proyecto C' }
  ];
  proyectoSeleccionado = '';

  searchTerm = '';

  constructor() {}

  ngOnInit(): void {
    this.estudiantesFiltrados = this.estudiantes;
  }

  buscarEstudiante(): void {
    this.estudiantesFiltrados = this.estudiantes.filter(estudiante =>
      estudiante.nombre.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  verDetalles(estudiante: Estudiante): void {
    this.estudianteSeleccionado = estudiante;
    const detallesModal = new bootstrap.Modal(document.getElementById('detallesModal'));
    detallesModal.show();
  }

  asignarProyecto(estudiante: Estudiante): void {
    this.estudianteSeleccionado = estudiante;
    const proyectoModal = new bootstrap.Modal(document.getElementById('proyectoModal'));
    proyectoModal.show();
  }

  confirmarAsignacionProyecto(): void {
    console.log(`Proyecto asignado: ${this.proyectoSeleccionado}`);
    // Aquí puedes realizar la lógica para asignar el proyecto al estudiante
    this.proyectoSeleccionado = '';
    const proyectoModal = bootstrap.Modal.getInstance(document.getElementById('proyectoModal'));
    proyectoModal.hide();
  }

  gestionarGrupo(estudiante: Estudiante): void {
    this.estudianteSeleccionado = estudiante;
    const grupoModal = new bootstrap.Modal(document.getElementById('grupoModal'));
    grupoModal.show();
  }

}
