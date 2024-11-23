import { Component, OnInit } from '@angular/core';

interface Grupo {
  id: number;
  nombre: string;
}

interface Proyecto {
  id?: number;
  nombre: string;
  descripcion: string;
  grupo: Grupo;
  etapa: number;  // Etapa de progreso (1 a 4, por ejemplo)
}

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.css'
})
export class ProyectosComponent implements OnInit {
  proyectos: Proyecto[] = [
    { id: 1, nombre: 'Sistema de Gestión', descripcion: 'Proyecto de sistema de gestión de estudiantes', grupo: { id: 1, nombre: 'Grupo A' }, etapa: 2 },
    { id: 2, nombre: 'App Móvil', descripcion: 'Aplicación móvil para el registro de actividades', grupo: { id: 2, nombre: 'Grupo B' }, etapa: 1 }
  ];
  
  grupos: Grupo[] = [
    { id: 1, nombre: 'Grupo A' },
    { id: 2, nombre: 'Grupo B' },
    { id: 3, nombre: 'Grupo C' }
  ];
  
  proyectoSeleccionado: Proyecto = { nombre: '', descripcion: '', grupo: { id: 0, nombre: '' }, etapa: 1 };

  constructor() {}

  ngOnInit(): void {}

  guardarProyecto(): void {
    if (this.proyectoSeleccionado.id) {
      // Actualizar proyecto existente
      const index = this.proyectos.findIndex(p => p.id === this.proyectoSeleccionado.id);
      if (index !== -1) {
        this.proyectos[index] = { ...this.proyectoSeleccionado };
      }
    } else {
      // Agregar nuevo proyecto
      const nuevoId = this.proyectos.length + 1;
      this.proyectos.push({ ...this.proyectoSeleccionado, id: nuevoId });
    }
    this.cancelarEdicion();
  }

  editarProyecto(proyecto: Proyecto): void {
    this.proyectoSeleccionado = { ...proyecto };
  }

  eliminarProyecto(proyecto: Proyecto): void {
    this.proyectos = this.proyectos.filter(p => p.id !== proyecto.id);
  }

  cancelarEdicion(): void {
    this.proyectoSeleccionado = { nombre: '', descripcion: '', grupo: { id: 0, nombre: '' }, etapa: 1 };
  }

  actualizarEtapa(proyecto: Proyecto): void {
    if (proyecto.etapa < 4) {
      proyecto.etapa += 1;
    } else {
      alert('El proyecto ya está en la última etapa.');
    }
  }

  calcularProgreso(etapa: number): number {
    const totalEtapas = 4; // Suponiendo que hay 4 etapas en total
    return (etapa / totalEtapas) * 100;
  }

}
