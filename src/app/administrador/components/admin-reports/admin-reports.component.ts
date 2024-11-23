import { Component } from '@angular/core';
import { jsPDF } from 'jspdf';
import { Color, ScaleType  } from '@swimlane/ngx-charts';


@Component({
  selector: 'app-admin-reports',
  templateUrl: './admin-reports.component.html',
  styleUrl: './admin-reports.component.css'
})
export class AdminReportsComponent {
  
  tipoInforme: string | null = null;
  tituloInforme: string = '';
  
  colorScheme: Color = {
    name: 'sequentialScheme',
    selectable: true,
    group: ScaleType.Ordinal, // Aquí usamos la enumeración correcta
    domain: ['#f7fcf0', '#ccebc5', '#a8ddb5', '#7bccc4', '#43a2ca', '#0868ac'] 
  };

  // Datos de ejemplo
  dataInscripciones = [
    { name: 'Enero', value: 50 },
    { name: 'Febrero', value: 80 },
    { name: 'Marzo', value: 45 },
    { name: 'Abril', value: 75 },
    { name: 'Mayo', value: 60 }
  ];

  dataPagos = [
    { name: 'Pagados', value: 300 },
    { name: 'Pendientes', value: 120 },
    { name: 'Atrasados', value: 30 }
  ];

  dataProyectos = [
    { name: 'Inicio', value: 20 },
    { name: 'Etapa 1', value: 50 },
    { name: 'Etapa 2', value: 75 },
    { name: 'Etapa 3', value: 100 }
  ];

  dataAsesores = [
    { name: 'Asesor A', value: 85 },
    { name: 'Asesor B', value: 70 },
    { name: 'Asesor C', value: 65 },
    { name: 'Asesor D', value: 90 }
  ];

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
      default:
        this.tituloInforme = '';
    }
  }

  exportarPDF(): void {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text(this.tituloInforme, 10, 10);
    doc.setFontSize(12);
    doc.text('Este es un informe generado automáticamente.', 10, 20);
    doc.save(`${this.tituloInforme}.pdf`);
  }

}
