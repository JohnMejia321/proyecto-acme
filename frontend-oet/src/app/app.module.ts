import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormularioVehiculoComponent } from './formularios/formulario-vehiculo/formulario-vehiculo.component';
import { FormularioConductorComponent } from './formularios/formulario-conductor/formulario-conductor.component';
import { FormularioDuenoComponent } from './formularios/formulario-dueno/formulario-dueno.component';
import { ConductorComponent } from './vistas/conductor/conductor.component';
import { DuenoComponent } from './vistas/dueno/dueno.component';
import { VehiculoComponent } from './vistas/vehiculo/vehiculo.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    FormularioVehiculoComponent,
    FormularioConductorComponent,
    FormularioDuenoComponent,
    ConductorComponent,
    DuenoComponent,
    VehiculoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
