import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UserRoutingModule } from './user-routing.module';
import { FormsModule } from '@angular/forms';  // Importa FormsModule
import { RouterModule } from '@angular/router';





@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'login', component: LoginComponent }
    ])
    
  ]
})
export class UserModule { }
