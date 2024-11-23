import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrl: './mensajes.component.css'
})
export class MensajesComponent {
  archivos = [
    {
      nombre: 'Informe Avance 1.pdf',
      tamano: 1.2,
      fecha: new Date('2024-11-01'),
      estado: 'Revisado',
      comentarios: [
        {
          autor: 'Dr. Carlos Ramírez',
          texto: 'Buen avance, pero faltan detalles en la metodología.',
          fecha: new Date('2024-11-03')
        }
      ]
    },
    {
      nombre: 'Diagrama UML Proyecto.png',
      tamano: 0.8,
      fecha: new Date('2024-11-10'),
      estado: 'Pendiente',
      comentarios: []
    }
  ];

  archivoSeleccionado: any = null;
  archivoCargado: File | null = null;

  mensajes = [
    {
      emisor: 'Asesor',
      contenido: 'Hola, ¿cómo va tu proyecto?',
      fecha: new Date()
    },
    {
      emisor: 'Estudiante',
      contenido: 'Va bien, gracias. Estoy terminando el primer informe.',
      fecha: new Date()
    }
  ];

  nuevoMensaje: string = '';

  constructor() {}

  ngOnInit(): void {}

  // Cargar archivo seleccionado
  cargarArchivo(event: any): void {
    this.archivoCargado = event.target.files[0];
  }

  subirArchivo(): void {
    if (this.archivoCargado) {
      const nuevoArchivo = {
        nombre: this.archivoCargado.name,
        tamano: parseFloat((this.archivoCargado.size / (1024 * 1024)).toFixed(2)), // Conversión corregida
        fecha: new Date(),
        estado: 'Pendiente',
        comentarios: []
      };
  
      this.archivos.push(nuevoArchivo);
      this.archivoCargado = null; // Limpiar archivo cargado
      alert('Archivo subido con éxito.');
    }
  }
  

  // Descargar archivo
  descargarArchivo(archivo: any): void {
    const link = document.createElement('a');
    link.href = `/assets/documentos/${archivo.nombre}`;
    link.download = archivo.nombre;
    link.click();
  }

  // Ver comentarios del archivo seleccionado
  verComentarios(archivo: any): void {
    this.archivoSeleccionado = archivo;
  }

  // Enviar mensaje en el chat
  enviarMensaje(): void {
    if (this.nuevoMensaje.trim()) {
      this.mensajes.push({
        emisor: 'Estudiante',
        contenido: this.nuevoMensaje.trim(),
        fecha: new Date()
      });
      this.nuevoMensaje = '';
    }
  }

}
