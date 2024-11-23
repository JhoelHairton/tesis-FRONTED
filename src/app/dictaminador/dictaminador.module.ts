import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DictaminadorDashboardComponent } from './components/dictaminador-dashboard/dictaminador-dashboard.component';
import { DictaminadorRoutingModule } from './dictaminador-routing.module';
import { HeaderDicComponent } from './components/header-dic/header-dic.component';
import { HeaderSidebarComponent } from './components/header-sidebar/header-sidebar.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ProyectosAsignadosComponent } from './components/proyectos-asignados/proyectos-asignados.component';
import { EvaluacionProyectosComponent } from './components/evaluacion-proyectos/evaluacion-proyectos.component';
import { MensajesComponent } from './components/mensajes/mensajes.component';
import { PerfilComponent } from './components/perfil/perfil.component'
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DictaminadorDashboardComponent,
    HeaderDicComponent,
    HeaderSidebarComponent,
    InicioComponent,
    ProyectosAsignadosComponent,
    EvaluacionProyectosComponent,
    MensajesComponent,
    PerfilComponent
  ],
  imports: [
    CommonModule,
    DictaminadorRoutingModule,
    FormsModule
  ]
})
export class DictaminadorModule { }
