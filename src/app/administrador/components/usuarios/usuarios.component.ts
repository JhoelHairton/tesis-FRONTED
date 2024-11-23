import { Component, OnInit } from '@angular/core';
import * as bootstrap from 'bootstrap';


interface Usuario {
  id: number;
  nombre: string;
  email: string;
  rol: string;
  permisos: string[];
}

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  
  usuarios: Usuario[] = [
    { id: 1, nombre: 'Juan Pérez', email: 'juan@example.com', rol: 'Estudiante', permisos: ['Ver Proyectos'] },
    { id: 2, nombre: 'Ana Gómez', email: 'ana@example.com', rol: 'Asesor', permisos: ['Ver Proyectos', 'Evaluar Proyectos'] },
    { id: 3, nombre: 'Carlos Martínez', email: 'carlos@example.com', rol: 'Administrador', permisos: ['Ver Proyectos', 'Administrar Usuarios', 'Administrar Pagos'] }
  ];

  roles: string[] = ['Estudiante', 'Asesor', 'Evaluador', 'Administrador'];
  permisosDisponibles: string[] = ['Ver Proyectos', 'Evaluar Proyectos', 'Administrar Usuarios', 'Administrar Pagos'];
  
  usuarioSeleccionado:  Usuario = { id: 0, nombre: '', email: '', rol: '', permisos: [] };
  constructor() {}

  ngOnInit(): void {}

  guardarUsuario(): void {
    if (this.usuarioSeleccionado) {
      if (this.usuarioSeleccionado.id) {
        // Actualizar usuario existente
        const index = this.usuarios.findIndex(u => u.id === this.usuarioSeleccionado?.id);
        if (index !== -1) {
          this.usuarios[index] = { ...this.usuarioSeleccionado };
        }
      } else {
        // Agregar nuevo usuario
        const nuevoId = this.usuarios.length + 1;
        this.usuarios.push({ ...this.usuarioSeleccionado, id: nuevoId });
      }
      this.cancelarEdicion();
    }
  }

  editarUsuario(usuario: Usuario): void {
    this.usuarioSeleccionado = { ...usuario };
  }

  eliminarUsuario(usuario: Usuario): void {
    this.usuarios = this.usuarios.filter(u => u.id !== usuario.id);
  }

  cancelarEdicion(): void {
    this.usuarioSeleccionado = { id: 0, nombre: '', email: '', rol: '', permisos: [] }; 
  }

  editarPermisos(usuario: Usuario): void {
    this.usuarioSeleccionado = { ...usuario };
    const permisosModal = new bootstrap.Modal(document.getElementById('permisosModal')!);
    permisosModal.show();
  }

  togglePermiso(permiso: string, event: Event): void {
    const isChecked = (event.target as HTMLInputElement).checked;
    if (this.usuarioSeleccionado) {
      if (isChecked) {
        if (!this.usuarioSeleccionado.permisos.includes(permiso)) {
          this.usuarioSeleccionado.permisos.push(permiso);
        }
      } else {
        this.usuarioSeleccionado.permisos = this.usuarioSeleccionado.permisos.filter(p => p !== permiso);
      }
    }
  }

  guardarPermisos(): void {
    const permisosModal = bootstrap.Modal.getInstance(document.getElementById('permisosModal')!);
    permisosModal?.hide();
  }
}
