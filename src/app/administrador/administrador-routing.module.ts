import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminReportsComponent } from './components/admin-reports/admin-reports.component';
import { GuardService } from '../core/services/guard.service';
import { AdminInicioComponent } from './components/admin-inicio/admin-inicio.component';
import { InscripcionesComponent } from './components/inscripciones/inscripciones.component';
import { AsesoresComponent } from './components/asesores/asesores.component';
import { LineasInvestigacionComponent } from './components/lineas-investigacion/lineas-investigacion.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { EvaluacionesComponent } from './components/evaluaciones/evaluaciones.component';
import { MensajesComponent } from './components/mensajes/mensajes.component';
import { PagosComponent } from './components/pagos/pagos.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { ConfiguracionComponent } from './components/configuracion/configuracion.component';


const routes: Routes = [
  {
    path: 'dashboard',
    component: AdminDashboardComponent,
    canActivate: [GuardService],
    data: { expectedRole: 'admin' },
    children: [
      { path: '', component: AdminInicioComponent },  // Página de inicio del Dashboard
      { path: 'reportes', component: AdminReportsComponent },
      { path: 'inscripciones', component: InscripcionesComponent },
      { path: 'asesores', component: AsesoresComponent },
      { path: 'lineas-investigacion', component: LineasInvestigacionComponent },
      { path: 'proyectos', component: ProyectosComponent },
      { path: 'evaluaciones', component: EvaluacionesComponent },
      { path: 'mensajes', component: MensajesComponent },
      { path: 'pagos', component: PagosComponent },
      { path: 'usuarios', component: UsuariosComponent },
      { path: 'configuracion', component: ConfiguracionComponent }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministradorRoutingModule { }
