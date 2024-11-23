import { Component, OnInit } from '@angular/core';
import * as bootstrap from 'bootstrap';

interface Pago {
  id: number;
  estudiante: string;
  programa: string;
  monto: number;
  fecha: Date;
  estado: string; // Completado, Pendiente, Atrasado
}

@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html',
  styleUrls: ['./pagos.component.css']
})
export class PagosComponent implements OnInit {
  pagos: Pago[] = [
    { id: 1, estudiante: 'Juan Pérez', programa: 'Ingeniería', monto: 1000, fecha: new Date('2023-08-01'), estado: 'Completado' },
    { id: 2, estudiante: 'Ana Gómez', programa: 'Arquitectura', monto: 1200, fecha: new Date('2023-08-15'), estado: 'Pendiente' },
    { id: 3, estudiante: 'Luis Martínez', programa: 'Medicina', monto: 1500, fecha: new Date('2023-07-20'), estado: 'Atrasado' }
  ];

  pagoSeleccionado: Pago | null = null;

  constructor() {}

  ngOnInit(): void {}

  verDetallesPago(pago: Pago): void {
    this.pagoSeleccionado = pago;
    const detallePagoModal = new bootstrap.Modal(document.getElementById('detallePagoModal'));
    detallePagoModal.show();
  }

  generarFactura(): void {
    if (this.pagoSeleccionado) {
      const factura = `
        Factura para ${this.pagoSeleccionado.estudiante}\n
        Programa: ${this.pagoSeleccionado.programa}\n
        Monto: $${this.pagoSeleccionado.monto.toFixed(2)}\n
        Fecha de Pago: ${this.pagoSeleccionado.fecha.toLocaleDateString()}\n
        Estado: ${this.pagoSeleccionado.estado}\n
      `;
      console.log(factura); // Aquí se puede implementar la lógica para exportar la factura
      alert('Factura generada en la consola');
    }
  }

  generarComprobante(): void {
    if (this.pagoSeleccionado) {
      const comprobante = `
        Comprobante de Pago para ${this.pagoSeleccionado.estudiante}\n
        Programa: ${this.pagoSeleccionado.programa}\n
        Monto: $${this.pagoSeleccionado.monto.toFixed(2)}\n
        Fecha de Pago: ${this.pagoSeleccionado.fecha.toLocaleDateString()}\n
        Estado: ${this.pagoSeleccionado.estado}\n
      `;
      console.log(comprobante); // Aquí se puede implementar la lógica para exportar el comprobante
      alert('Comprobante generado en la consola');
    }
  }
}
