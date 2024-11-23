import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsesorDashboardComponent } from './components/asesor-dashboard/asesor-dashboard.component';
import { AsesorRoutingModule } from './asesor-routing.module';
import { InicioComponent } from './components/inicio/inicio.component';
import { SolicitudesAsesoriaComponent } from './components/solicitudes-asesoria/solicitudes-asesoria.component';
import { ProyectosAsignadosComponent } from './components/proyectos-asignados/proyectos-asignados.component';
import { MensajesComponent } from './components/mensajes/mensajes.component';
import { EvaluacionProyectosComponent } from './components/evaluacion-proyectos/evaluacion-proyectos.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component'
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AsesorDashboardComponent,
    InicioComponent,
    SolicitudesAsesoriaComponent,
    ProyectosAsignadosComponent,
    MensajesComponent,
    EvaluacionProyectosComponent,
    PerfilComponent,
    SidebarComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    AsesorRoutingModule,
    FormsModule
  
  ]
})
export class AsesorModule { }
