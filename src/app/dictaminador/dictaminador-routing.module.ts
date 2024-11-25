import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DictaminadorDashboardComponent } from './components/dictaminador-dashboard/dictaminador-dashboard.component'
import { GuardService } from '../core/services/guard.service';
import { ProyectosAsignadosComponent } from './components/proyectos-asignados/proyectos-asignados.component';
import { EvaluacionProyectosComponent } from './components/evaluacion-proyectos/evaluacion-proyectos.component';
import { MensajesComponent } from './components/mensajes/mensajes.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { InicioComponent } from './components/inicio/inicio.component';

const routes: Routes = [
  { path: 'dashboard', 
    component: DictaminadorDashboardComponent,
    canActivate: [GuardService],
    data: { expecteRole: 'EVALUADOR'},
    children: [
      { path: '', component: InicioComponent },
      { path: 'proyectos-asignados', component: ProyectosAsignadosComponent },
      { path: 'evaluacion-proyectos', component: EvaluacionProyectosComponent },
      { path: 'mensajes', component: MensajesComponent },
      { path: 'perfil', component: PerfilComponent }

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DictaminadorRoutingModule { }

