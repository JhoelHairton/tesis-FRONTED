import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EstudianteDashboardComponent } from './components/estudiante-dashboard/estudiante-dashboard.component'
import { InscripcionesComponent } from './components/inscripciones/inscripciones.component';
import { AsesoresComponent } from './components/asesores/asesores.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { EvaluacionComponent } from './components/evaluacion/evaluacion.component';
import { MensajesComponent } from './components/mensajes/mensajes.component';
import { PagosComponent } from './components/pagos/pagos.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { GuardService } from '../core/services/guard.service';
import { InicioComponent } from './components/inicio/inicio.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: EstudianteDashboardComponent,
    canActivate: [GuardService],
    data: { expectedRole: 'student' },
    children: [
      { path: '', component: InicioComponent }, // Página inicial del dashboard
      { path: 'inscripciones', component: InscripcionesComponent },
      { path: 'asesores', component: AsesoresComponent },
      { path: 'proyectos', component: ProyectosComponent },
      { path: 'evaluaciones', component: EvaluacionComponent },
      { path: 'mensajes', component: MensajesComponent },
      { path: 'pagos', component: PagosComponent },
      { path: 'perfil', component: PerfilComponent }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstudianteRoutingModule { }
