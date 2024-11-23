import { Component } from '@angular/core';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrl: './mensajes.component.css'
})
export class MensajesComponent {

   // Lista de conversaciones
   conversaciones = [
    {
      nombre: 'Juan Pérez (Estudiante)',
      mensajesNuevos: 2,
      mensajes: [
        { emisor: 'Estudiante', contenido: 'Hola, ¿podrías revisar mi proyecto?', fecha: new Date() },
        { emisor: 'Evaluador', contenido: 'Claro, lo revisaré pronto.', fecha: new Date() }
      ]
    },
    {
      nombre: 'Ana López (Coordinadora)',
      mensajesNuevos: 1,
      mensajes: [
        { emisor: 'Coordinadora', contenido: 'Necesito tu feedback en el proyecto 2.', fecha: new Date() }
      ]
    },
    {
      nombre: 'Carlos García (Estudiante)',
      mensajesNuevos: 0,
      mensajes: [
        { emisor: 'Estudiante', contenido: 'Gracias por tu retroalimentación.', fecha: new Date() }
      ]
    }
  ];

  // Conversación seleccionada
  conversacionSeleccionada: any = null;

  // Mensaje nuevo
  nuevoMensaje: string = '';

  constructor() {}

  ngOnInit(): void {}

  // Seleccionar una conversación
  seleccionarConversacion(conversacion: any): void {
    this.conversacionSeleccionada = conversacion;
    conversacion.mensajesNuevos = 0; // Marcar como leído
  }

  // Enviar un mensaje
  enviarMensaje(): void {
    if (this.nuevoMensaje.trim() && this.conversacionSeleccionada) {
      const mensaje = {
        emisor: 'Evaluador',
        contenido: this.nuevoMensaje.trim(),
        fecha: new Date()
      };

      this.conversacionSeleccionada.mensajes.push(mensaje); // Agregar mensaje a la conversación
      this.nuevoMensaje = ''; // Limpiar el input
    }
  }
}
