import { Component } from '@angular/core';
import * as bootstrap from 'bootstrap';


@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.css']
})
export class ConfiguracionComponent {
  // Configuración inicial
  config = {
    limiteEstudiantes: 3, // Valor predeterminado
    maxAsesores: 5, // Valor predeterminado
    configAdicional: '' // Configuración adicional como texto libre
  };

  // Método para guardar los cambios
  guardarConfiguracion(): void {
    const confirmacionModal = new bootstrap.Modal(document.getElementById('confirmacionModal')!);
    confirmacionModal.show();
  }

  // Método para confirmar guardado
  confirmarGuardado(): void {
    const confirmacionModal = bootstrap.Modal.getInstance(document.getElementById('confirmacionModal')!);
    confirmacionModal?.hide();
    alert('Los cambios han sido guardados exitosamente.');
    // Aquí puedes agregar lógica para enviar los datos al backend si es necesario
  }

  // Método para reiniciar los valores a los predeterminados
  reiniciarValores(): void {
    this.config = {
      limiteEstudiantes: 3,
      maxAsesores: 5,
      configAdicional: ''
    };
  }
}
