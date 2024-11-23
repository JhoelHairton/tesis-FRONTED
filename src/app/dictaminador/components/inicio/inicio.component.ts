import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  proyectosAsignados: number = 8;
  evaluacionesPendientes: number = 3;

  constructor() {}

  ngOnInit(): void {}

}
