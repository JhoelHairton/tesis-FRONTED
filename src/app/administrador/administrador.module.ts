import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminReportsComponent } from './components/admin-reports/admin-reports.component';
import { AdministradorRoutingModule } from './administrador-routing.module';
import { AdminHeaderComponent } from './components/admin-header/admin-header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
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
import { FormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';



@NgModule({
  declarations: [
    AdminDashboardComponent,
    AdminReportsComponent,
    AdminHeaderComponent,
    SidebarComponent,
    AdminInicioComponent,
    InscripcionesComponent,
    AsesoresComponent,
    LineasInvestigacionComponent,
    ProyectosComponent,
    EvaluacionesComponent,
    MensajesComponent,
    PagosComponent,
    UsuariosComponent,
    ConfiguracionComponent
  ],
  imports: [
    CommonModule,
    AdministradorRoutingModule,
    FormsModule,
    NgxChartsModule
    
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AdministradorModule { }
