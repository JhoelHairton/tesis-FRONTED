import { Component } from '@angular/core';

@Component({
  selector: 'app-evaluacion-proyectos',
  templateUrl: './evaluacion-proyectos.component.html',
  styleUrl: './evaluacion-proyectos.component.css'
})
export class EvaluacionProyectosComponent {
    // Proyecto seleccionado puede ser un objeto o null
  proyectoSeleccionado: { nombre: string } | null = null;

  // Modelo para la evaluación
  evaluacion = {
    calificacion: '',
    comentarios: ''
  };

  constructor() {}

  ngOnInit(): void {}

  // Guardar la evaluación del proyecto
  guardarEvaluacion(): void {
    if (this.evaluacion.calificacion && this.evaluacion.comentarios.trim() && this.proyectoSeleccionado) {
      alert(
        `Evaluación guardada:\n` +
          `Proyecto: ${this.proyectoSeleccionado.nombre}\n` +
          `Calificación: ${this.evaluacion.calificacion} estrellas\n` +
          `Comentarios: ${this.evaluacion.comentarios}`
      );
      this.resetFormulario();
    } else {
      alert('Por favor completa todos los campos antes de guardar.');
    }
  }

  // Cancelar la evaluación y limpiar los datos
  cancelarEvaluacion(): void {
    this.resetFormulario();
  }

  // Método para reiniciar el formulario
  private resetFormulario(): void {
    this.proyectoSeleccionado = null; // Ahora no debería generar error
    this.evaluacion = {
      calificacion: '',
      comentarios: ''
    };
  }
}
