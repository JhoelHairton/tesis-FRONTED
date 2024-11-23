import { Component } from '@angular/core';

@Component({
  selector: 'app-inscripciones',
  templateUrl: './inscripciones.component.html',
  styleUrl: './inscripciones.component.css'
})
export class InscripcionesComponent   {
   // Datos para el registro
   registro = {
    nombreCompleto: '',
    email: ''
  };

  // Datos para selección de programa y línea
  programas = ['Ingeniería de Software', 'Ingeniería Industrial', 'Ciencias Computacionales'];
  lineasInvestigacion = ['Inteligencia Artificial', 'Big Data', 'Desarrollo de Software'];
  programaSeleccionado = '';
  lineaSeleccionada = '';

  // Datos para pago
  totalPago = 500.0;

  // Datos para formación de grupos
  integrantes: string[] = [];
  nuevoIntegrante = '';

  // Métodos para cada funcionalidad
  onSubmitRegistro() {
    alert('Registro realizado con éxito:\n' + JSON.stringify(this.registro));
  }

  onSubmitPrograma() {
    alert(`Programa: ${this.programaSeleccionado}\nLínea: ${this.lineaSeleccionada}`);
  }

  realizarPago() {
    alert('Pago realizado con éxito.');
  }
  onSubmitGrupo() {
    alert('Grupo formado con éxito: ' + JSON.stringify(this.integrantes));
  }
  
  agregarIntegrante() {
    if (this.nuevoIntegrante.trim()) {
      this.integrantes.push(this.nuevoIntegrante.trim());
      this.nuevoIntegrante = '';
    }
  }

}
