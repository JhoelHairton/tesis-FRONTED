import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent implements OnInit {
  estudianteNombre = 'Juan Pérez'; // Nombre del estudiante, simulado
  estadoInscripcion = 'En progreso'; // Estado de inscripción
  mensajeInscripcion = 'Tu inscripción está en la etapa de validación.';
  pagosRealizados = '2 de 3'; // Pagos realizados
  mensajePagos = 'Te falta completar 1 pago.';
  progresoProyecto = 65; // Progreso del proyecto en porcentaje
  mensajeProgreso = 'Tu proyecto está en la fase de desarrollo.';
  descripcionInscripcion = 'Registro en el programa Ingeniería de Software.';
  estadoProyecto = 'Activo'; // Estado actual del proyecto
  descripcionProyecto = 'Desarrollo de una aplicación web para gestión académica.';

  constructor() {}

  ngOnInit(): void {
    // Aquí puedes agregar lógica para cargar datos reales desde un servicio HTTP.
  }

}
