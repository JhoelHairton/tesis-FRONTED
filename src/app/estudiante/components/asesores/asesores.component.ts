import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asesores',
  templateUrl: './asesores.component.html',
  styleUrl: './asesores.component.css'
})
export class AsesoresComponent implements OnInit {
    // Lista de asesores
    asesores = [
      {
        nombre: 'Dra. Ana Gómez',
        lineaInvestigacion: 'Inteligencia Artificial',
        calificacion: 5,
        disponibilidad: true
      },
      {
        nombre: 'Dr. Carlos Ramírez',
        lineaInvestigacion: 'Big Data',
        calificacion: 4,
        disponibilidad: false
      },
      {
        nombre: 'MSc. Laura Martínez',
        lineaInvestigacion: 'Desarrollo de Software',
        calificacion: 3,
        disponibilidad: true
      }
    ];
  
    constructor() {}
  
    ngOnInit(): void {}
  
    // Método para calcular estrellas (calificación)
    calcularEstrellas(calificacion: number): Array<number> {
      return Array(calificacion).fill(0);
    }
  
    // Método para solicitar asesoría
    solicitarAsesoria(asesor: any): void {
      alert(`Has solicitado asesoría con ${asesor.nombre} en la línea de ${asesor.lineaInvestigacion}.`);
    }

}
