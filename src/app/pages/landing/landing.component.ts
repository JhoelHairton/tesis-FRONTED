import { Component } from '@angular/core';
import { CargarScriptsService } from '../../cargar-scripts.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

  // cargar scriptd
  constructor( private _CargaScripts:CargarScriptsService,  private router: Router)
  {
    _CargaScripts.Carga(["landing/main"])
  }

  //cargar imagenes 
  imagen1: string = 'assets/img/landing/header.jpg';
  imagen2: string = 'assets/img/landing/facebook.png';
  bisleyn: string = 'assets/img/landing/instagram.png'

  goToLogin() {
    this.router.navigate(['/user/login']);
  }
}
