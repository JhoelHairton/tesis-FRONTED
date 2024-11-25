import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { UserModule } from './user/user.module'; // Import solo si no es lazy-loaded



import { CargarScriptsService } from './cargar-scripts.service';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartComponent } from './informes/components/chart/chart.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,         // Importamos el módulo Core solo una vez
    SharedModule,
    UserModule,
    NgxChartsModule,
    HttpClientModule
    
    
    
  ],
  providers: [
    CargarScriptsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
