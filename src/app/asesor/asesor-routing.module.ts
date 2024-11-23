import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AsesorDashboardComponent } from './components/asesor-dashboard/asesor-dashboard.component'
import { SolicitudesAsesoriaComponent } from './components/solicitudes-asesoria/solicitudes-asesoria.component';
import { ProyectosAsignadosComponent } from './components/proyectos-asignados/proyectos-asignados.component';
import { MensajesComponent } from './components/mensajes/mensajes.component';
import { EvaluacionProyectosComponent } from './components/evaluacion-proyectos/evaluacion-proyectos.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { GuardService } from '../core/services/guard.service';
import { InicioComponent } from './components/inicio/inicio.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: AsesorDashboardComponent,
    canActivate: [GuardService],
    data: { expectedRole: 'advisor' },
    children: [

      { path: '', component: InicioComponent },
      { path: 'solicitudes', component: SolicitudesAsesoriaComponent },
      { path: 'proyectos', component: ProyectosAsignadosComponent },
      { path: 'mensajes', component: MensajesComponent },
      { path: 'evaluaciones', component: EvaluacionProyectosComponent },
      { path: 'perfil', component: PerfilComponent }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AsesorRoutingModule { }
