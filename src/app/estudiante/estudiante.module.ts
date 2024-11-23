import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstudianteDashboardComponent } from './components/estudiante-dashboard/estudiante-dashboard.component';
import { EstudianteRoutingModule } from './estudiante-routing.module';
import { EstudianteHeaderComponent } from './components/estudiante-header/estudiante-header.component';
import { EstudianteSidebarComponent } from './components/estudiante-sidebar/estudiante-sidebar.component';
import { InscripcionesComponent } from './components/inscripciones/inscripciones.component';
import { AsesoresComponent } from './components/asesores/asesores.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { EvaluacionComponent } from './components/evaluacion/evaluacion.component';
import { MensajesComponent } from './components/mensajes/mensajes.component';
import { PagosComponent } from './components/pagos/pagos.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { InicioComponent } from './components/inicio/inicio.component'
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    EstudianteDashboardComponent,
    EstudianteHeaderComponent,
    EstudianteSidebarComponent,
    InscripcionesComponent,
    AsesoresComponent,
    ProyectosComponent,
    EvaluacionComponent,
    MensajesComponent,
    PagosComponent,
    PerfilComponent,
    InicioComponent
  ],
  imports: [
    CommonModule,
    EstudianteRoutingModule,
    FormsModule
    
  ]
})
export class EstudianteModule { }
