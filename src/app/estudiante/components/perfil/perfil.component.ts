import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent {
   // Información del usuario
   usuario = {
    nombre: 'Juan Pérez',
    email: 'juan.perez@email.com',
    telefono: '123456789'
  };

  // Campos para cambiar la contraseña
  contrasenaActual = '';
  nuevaContrasena = '';
  confirmarContrasena = '';

  constructor() {}

  ngOnInit(): void {}

  // Guardar cambios en la información personal
  guardarCambios(): void {
    alert('Información actualizada con éxito:\n' + JSON.stringify(this.usuario));
  }

  // Cambiar contraseña
  cambiarContrasena(): void {
    if (this.nuevaContrasena !== this.confirmarContrasena) {
      alert('Las contraseñas no coinciden.');
      return;
    }
    alert('Contraseña cambiada con éxito.');
    // Reiniciar campos de contraseña
    this.contrasenaActual = '';
    this.nuevaContrasena = '';
    this.confirmarContrasena = '';
  }

}
