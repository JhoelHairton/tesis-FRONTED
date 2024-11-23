import { Component } from '@angular/core';
import { CargarScriptsService } from '../../cargar-scripts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.css'
})
export class PageNotFoundComponent {

  // cargar scriptd
  constructor( private _CargaScripts:CargarScriptsService,  private router: Router)
  {
    _CargaScripts.Carga(["page-not-found/page"])
  }

}
