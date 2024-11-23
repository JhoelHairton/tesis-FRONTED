import { Component } from '@angular/core';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrl: './mensajes.component.css'
})
export class MensajesComponent {
   // Lista de estudiantes y sus mensajes
   estudiantes = [
    {
      nombre: 'Juan Pérez',
      nuevosMensajes: 3,
      mensajes: [
        { emisor: 'Estudiante', contenido: 'Hola, profesor.', fecha: new Date() },
        { emisor: 'Asesor', contenido: 'Hola, Juan. ¿Cómo va el proyecto?', fecha: new Date() }
      ]
    },
    {
      nombre: 'Ana López',
      nuevosMensajes: 0,
      mensajes: [
        { emisor: 'Estudiante', contenido: 'Tengo dudas sobre el avance.', fecha: new Date() }
      ]
    },
    {
      nombre: 'Carlos García',
      nuevosMensajes: 1,
      mensajes: []
    }
  ];

  // Estudiante seleccionado
  estudianteSeleccionado: any = null;

  // Mensaje nuevo
  nuevoMensaje: string = '';

  constructor() {}

  ngOnInit(): void {}

  // Seleccionar un estudiante de la lista
  seleccionarEstudiante(estudiante: any): void {
    this.estudianteSeleccionado = estudiante;
    estudiante.nuevosMensajes = 0; // Marcar como leído
  }

  // Enviar un mensaje al estudiante seleccionado
  enviarMensaje(): void {
    if (this.nuevoMensaje.trim() && this.estudianteSeleccionado) {
      const mensaje = {
        emisor: 'Asesor',
        contenido: this.nuevoMensaje.trim(),
        fecha: new Date()
      };

      this.estudianteSeleccionado.mensajes.push(mensaje); // Agregar mensaje a la conversación
      this.nuevoMensaje = ''; // Limpiar el input
    }
  }

}
