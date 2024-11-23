import { Component, OnInit } from '@angular/core';

interface Contacto {
  id: number;
  nombre: string;
  rol: string; // Estudiante, Asesor, Evaluador
  nuevosMensajes: number;
}

interface Mensaje {
  remitente: string; // Administrador o el contacto
  texto: string;
}

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.css']
})
export class MensajesComponent implements OnInit {
  contactos: Contacto[] = [
    { id: 1, nombre: 'Juan Pérez', rol: 'Estudiante', nuevosMensajes: 2 },
    { id: 2, nombre: 'María López', rol: 'Asesor', nuevosMensajes: 0 },
    { id: 3, nombre: 'Carlos Gómez', rol: 'Evaluador', nuevosMensajes: 1 }
  ];

  mensajes: { [key: number]: Mensaje[] } = {
    1: [
      { remitente: 'Juan Pérez', texto: 'Hola, necesito ayuda con mi proyecto.' },
      { remitente: 'Administrador', texto: 'Claro, ¿en qué puedo ayudarte?' }
    ],
    2: [
      { remitente: 'María López', texto: '¿Cuándo se programará la próxima evaluación?' }
    ],
    3: [
      { remitente: 'Carlos Gómez', texto: 'El proyecto que evalué tiene buena calidad.' }
    ]
  };

  contactoSeleccionado: Contacto | null = null;
  mensajeNuevo: string = '';

  constructor() {}

  ngOnInit(): void {}

  seleccionarContacto(contacto: Contacto): void {
    this.contactoSeleccionado = contacto;
    contacto.nuevosMensajes = 0; // Limpiar notificaciones de nuevos mensajes
  }

  enviarMensaje(): void {
    if (this.contactoSeleccionado && this.mensajeNuevo.trim()) {
      const nuevoMensaje: Mensaje = {
        remitente: 'Administrador',
        texto: this.mensajeNuevo.trim()
      };
      this.mensajes[this.contactoSeleccionado.id].push(nuevoMensaje);
      this.mensajeNuevo = ''; // Limpiar el campo de entrada
    }
  }
}
