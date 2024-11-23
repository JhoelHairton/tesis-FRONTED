import { Component, OnInit } from '@angular/core';

interface LineaInvestigacion {
  id?: number;
  nombre: string;
  programa: string;
}

interface Asesor {
  nombre: string;
  calificacion: number;
  lineaInvestigacion: string;
}

interface Proyecto {
  nombre: string;
  lineaInvestigacion: string;
}

@Component({
  selector: 'app-lineas-investigacion',
  templateUrl: './lineas-investigacion.component.html',
  styleUrl: './lineas-investigacion.component.css'
})
export class LineasInvestigacionComponent implements OnInit{
  lineasInvestigacion: LineaInvestigacion[] = [
    { id: 1, nombre: 'Inteligencia Artificial', programa: 'Ingeniería' },
    { id: 2, nombre: 'Arquitectura Sostenible', programa: 'Arquitectura' }
  ];
  
  programas: string[] = ['Ingeniería', 'Arquitectura', 'Medicina'];
  lineaSeleccionada: LineaInvestigacion = { nombre: '', programa: '' };

  filtroLinea: string = '';
  asesores: Asesor[] = [
    { nombre: 'Carlos López', calificacion: 4.5, lineaInvestigacion: 'Inteligencia Artificial' },
    { nombre: 'María Fernández', calificacion: 5, lineaInvestigacion: 'Arquitectura Sostenible' },
    { nombre: 'Ana Gómez', calificacion: 3.8, lineaInvestigacion: 'Inteligencia Artificial' }
  ];
  proyectos: Proyecto[] = [
    { nombre: 'Sistema de Reconocimiento Facial', lineaInvestigacion: 'Inteligencia Artificial' },
    { nombre: 'Edificio Verde', lineaInvestigacion: 'Arquitectura Sostenible' }
  ];
  
  asesoresFiltrados: Asesor[] = [];
  proyectosFiltrados: Proyecto[] = [];

  constructor() {}

  ngOnInit(): void {
    this.actualizarFiltros();
  }

  guardarLineaInvestigacion(): void {
    if (this.lineaSeleccionada.id) {
      // Actualizar línea existente
      const index = this.lineasInvestigacion.findIndex(l => l.id === this.lineaSeleccionada.id);
      if (index !== -1) {
        this.lineasInvestigacion[index] = { ...this.lineaSeleccionada };
      }
    } else {
      // Agregar nueva línea
      const nuevoId = this.lineasInvestigacion.length + 1;
      this.lineasInvestigacion.push({ ...this.lineaSeleccionada, id: nuevoId });
    }
    this.cancelarEdicion();
  }

  editarLinea(linea: LineaInvestigacion): void {
    this.lineaSeleccionada = { ...linea };
  }

  eliminarLinea(linea: LineaInvestigacion): void {
    this.lineasInvestigacion = this.lineasInvestigacion.filter(l => l.id !== linea.id);
    this.actualizarFiltros();
  }

  cancelarEdicion(): void {
    this.lineaSeleccionada = { nombre: '', programa: '' };
  }

  filtrarAsesoresYProyectos(): void {
    if (this.filtroLinea) {
      this.asesoresFiltrados = this.asesores.filter(asesor => asesor.lineaInvestigacion === this.filtroLinea);
      this.proyectosFiltrados = this.proyectos.filter(proyecto => proyecto.lineaInvestigacion === this.filtroLinea);
    } else {
      this.asesoresFiltrados = [];
      this.proyectosFiltrados = [];
    }
  }

  actualizarFiltros(): void {
    // Llamar al método de filtrado inicial para mostrar listas vacías si no hay filtro seleccionado
    this.filtrarAsesoresYProyectos();
  }

}
