import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent {
  perfil = {
    nombre: 'Dr. Carlos Ramírez',
    email: 'carlos.ramirez@universidad.edu',
    telefono: '987654321',
    disponibilidad: 'Disponible', // Disponible o No Disponible
    maxProyectos: 3 // Máximo número de proyectos que puede gestionar
  };

  constructor() {}

  ngOnInit(): void {}

  // Guardar cambios en la información personal
  guardarCambios(): void {
    alert(`Información personal actualizada:\n${JSON.stringify(this.perfil, null, 2)}`);
  }

  // Actualizar la disponibilidad
  actualizarDisponibilidad(): void {
    alert(`Disponibilidad actualizada:\nEstado: ${this.perfil.disponibilidad}\nMáximo de proyectos: ${this.perfil.maxProyectos}`);
  }

}
