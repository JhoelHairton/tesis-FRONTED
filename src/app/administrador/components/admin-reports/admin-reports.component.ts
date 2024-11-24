import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-reports',
  templateUrl: './admin-reports.component.html',
  styleUrl: './admin-reports.component.css'
})
export class AdminReportsComponent {
  
  tipoInforme: string | null = null;
  tituloInforme: string = '';

  // Datos de los informes
  dataInscripciones = [
    { time: '2024-01-01', value: 100 },
    { time: '2024-02-01', value: 200 },
    { time: '2024-03-01', value: 150 },
    { time: '2024-04-01', value: 250 }
  ];

  dataPagos = [
    { time: '2024-01-01', value: 5000 },
    { time: '2024-02-01', value: 7000 },
    { time: '2024-03-01', value: 3000 },
    { time: '2024-04-01', value: 6000 }
  ];

  dataProyectos = [
    { time: 'Etapa 1', value: 30 },
    { time: 'Etapa 2', value: 60 },
    { time: 'Etapa 3', value: 90 }
  ];

  dataAsesores = [
    { time: '2024-01', value: 10 },
    { time: '2024-02', value: 15 },
    { time: '2024-03', value: 8 },
    { time: '2024-04', value: 12 }
  ];

  // Opciones para los gráficos
  chartOptions = {
    layout: {
      backgroundColor: '#ffffff',
      textColor: '#333333'
    },
    grid: {
      vertLines: { color: '#eeeeee' },
      horzLines: { color: '#eeeeee' }
    }
  };

  constructor() {}

  ngOnInit(): void {}

  seleccionarInforme(tipo: string): void {
    this.tipoInforme = tipo;
    switch (tipo) {
      case 'inscripciones':
        this.tituloInforme = 'Informe de Inscripciones';
        break;
      case 'pagos':
        this.tituloInforme = 'Informe de Pagos';
        break;
      case 'proyectos':
        this.tituloInforme = 'Informe de Proyectos';
        break;
      case 'asesores':
        this.tituloInforme = 'Rendimiento de Asesores';
        break;
    }
  }

  exportarPDF(): void {
    alert('Exportar informe en PDF (Funcionalidad por implementar)');
  }
}