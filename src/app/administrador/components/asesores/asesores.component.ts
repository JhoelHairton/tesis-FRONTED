import { Component, OnInit  } from '@angular/core';
import * as bootstrap from 'bootstrap';


interface Asesor {
  nombre: string;
  calificacion: number;  // Calificación en estrellas (ej. 4.5)
  disponible: boolean;
  proyectosAsignados: number;
}

interface Solicitud {
  estudiante: string;
}

@Component({
  selector: 'app-asesores',
  templateUrl: './asesores.component.html',
  styleUrl: './asesores.component.css'
})
export class AsesoresComponent implements OnInit{
  asesores: Asesor[] = [
    { nombre: 'Carlos López', calificacion: 4.5, disponible: true, proyectosAsignados: 2 },
    { nombre: 'María Fernández', calificacion: 5, disponible: false, proyectosAsignados: 3 },
    { nombre: 'Jorge Martínez', calificacion: 3.8, disponible: true, proyectosAsignados: 1 },
    // Más asesores de ejemplo
  ];
  asesoresFiltrados: Asesor[] = [];
  proyectosDisponibles = [
    { nombre: 'Proyecto A' },
    { nombre: 'Proyecto B' },
    { nombre: 'Proyecto C' }
  ];
  solicitudesPendientes: Solicitud[] = [
    { estudiante: 'Juan Pérez' },
    { estudiante: 'Ana Gómez' }
  ];
  
  searchTerm = '';
  asesorSeleccionado: Asesor | null = null;
  proyectoSeleccionado = '';

  constructor() {}

  ngOnInit(): void {
    this.asesoresFiltrados = this.asesores;
  }

  buscarAsesor(): void {
    this.asesoresFiltrados = this.asesores.filter(asesor =>
      asesor.nombre.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  calcularEstrellas(calificacion: number): number[] {
    return Array(Math.round(calificacion)).fill(0);
  }

  asignarProyecto(asesor: Asesor): void {
    this.asesorSeleccionado = asesor;
    const proyectoModal = new bootstrap.Modal(document.getElementById('proyectoModal'));
    proyectoModal.show();
  }

  confirmarAsignacionProyecto(): void {
    if (this.asesorSeleccionado) {
      this.asesorSeleccionado.proyectosAsignados++;
    }
    this.proyectoSeleccionado = '';
    const proyectoModal = bootstrap.Modal.getInstance(document.getElementById('proyectoModal'));
    proyectoModal.hide();
  }

  verSolicitudes(asesor: Asesor): void {
    this.asesorSeleccionado = asesor;
    const solicitudesModal = new bootstrap.Modal(document.getElementById('solicitudesModal'));
    solicitudesModal.show();
  }

  aceptarSolicitud(solicitud: Solicitud): void {
    // Lógica para aceptar la solicitud
    console.log(`Solicitud aceptada: ${solicitud.estudiante}`);
    this.solicitudesPendientes = this.solicitudesPendientes.filter(s => s !== solicitud);
  }

  rechazarSolicitud(solicitud: Solicitud): void {
    // Lógica para rechazar la solicitud
    console.log(`Solicitud rechazada: ${solicitud.estudiante}`);
    this.solicitudesPendientes = this.solicitudesPendientes.filter(s => s !== solicitud);
  }

}
