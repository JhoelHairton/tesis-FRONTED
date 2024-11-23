import { Component } from '@angular/core';

@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html',
  styleUrl: './pagos.component.css'
})
export class PagosComponent {
   // Lista de pagos del estudiante
   pagos = [
    {
      concepto: 'Inscripción 2024',
      monto: 500,
      fecha: new Date('2024-01-15'),
      estado: 'Pagado',
      comprobante: 'comprobante-inscripcion-2024.pdf'
    },
    {
      concepto: 'Curso de Inglés',
      monto: 300,
      fecha: new Date('2024-02-01'),
      estado: 'Pendiente',
      comprobante: null
    },
    {
      concepto: 'Proyecto Final',
      monto: 1000,
      fecha: new Date('2024-03-01'),
      estado: 'Pagado',
      comprobante: 'comprobante-proyecto-final.pdf'
    }
  ];

  constructor() {}

  ngOnInit(): void {}

  // Método para descargar el comprobante
  descargarComprobante(archivo: string): void {
    const link = document.createElement('a');
    link.href = `/assets/comprobantes/${archivo}`;
    link.download = archivo;
    link.click();
  }

}
