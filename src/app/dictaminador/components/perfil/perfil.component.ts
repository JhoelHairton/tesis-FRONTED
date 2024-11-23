import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent {
// Información personal del evaluador
perfil = {
  nombre: 'Dr. Carlos Ramírez',
  email: 'carlos.ramirez@universidad.edu',
  telefono: '987654321',
  disponibilidad: 'Disponible', // Opciones: Disponible o No Disponible
  maxEvaluaciones: 5 // Máximo de evaluaciones activas
};

constructor() {}

ngOnInit(): void {}

// Guardar cambios en la información personal
guardarCambios(): void {
  alert(`Información personal actualizada:\n${JSON.stringify(this.perfil, null, 2)}`);
}

// Guardar configuraciones del perfil
guardarConfiguraciones(): void {
  alert(`Configuraciones guardadas:\nDisponibilidad: ${this.perfil.disponibilidad}\nMáximo de evaluaciones activas: ${this.perfil.maxEvaluaciones}`);
}
}
