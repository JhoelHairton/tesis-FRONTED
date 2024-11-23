import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { GuardService } from './core/services/guard.service';  // Importa el AuthGuard para proteger rutas

const routes: Routes = [
  { 
    path: '', 
    component: LandingComponent 
  },
  
  { 
    path: 'user', 
    loadChildren: () => import('./user/user.module').then(m => m.UserModule) 
  },

  // Rutas protegidas para cada módulo
  { 
    path: 'administrador', 
    loadChildren: () => import('./administrador/administrador.module').then(m => m.AdministradorModule),
    canActivate: [GuardService],
    data: { expectedRole: 'admin' }  // Solo accesible por usuarios con rol 'admin'
  },
  { 
    path: 'asesor', 
    loadChildren: () => import('./asesor/asesor.module').then(m => m.AsesorModule),
    canActivate: [GuardService],
    data: { expectedRole: 'advisor' }  // Solo accesible por usuarios con rol 'advisor'
  },
  { 
    path: 'dictaminador', 
    loadChildren: () => import('./dictaminador/dictaminador.module').then(m => m.DictaminadorModule),
    canActivate: [GuardService],
    data: { expectedRole: 'dictaminador' }  // Solo accesible por usuarios con rol 'dictaminador'
  },
  { 
    path: 'estudiante', 
    loadChildren: () => import('./estudiante/estudiante.module').then(m => m.EstudianteModule),
    canActivate: [GuardService],
    data: { expectedRole: 'student' }  // Solo accesible por usuarios con rol 'student'
  },

  // Ruta comodín para manejar 404
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
