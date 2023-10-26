import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormularioVehiculoComponent } from './formularios/formulario-vehiculo/formulario-vehiculo.component';
import { VehiculoComponent } from './vistas/vehiculo/vehiculo.component';
import { DuenoComponent } from './vistas/dueno/dueno.component';
import { FormularioDuenoComponent } from './formularios/formulario-dueno/formulario-dueno.component';
import { FormularioConductorComponent } from './formularios/formulario-conductor/formulario-conductor.component';
import { ConductorComponent } from './vistas/conductor/conductor.component';




const routes: Routes = [
  { path: 'formulario-vehiculo', component: FormularioVehiculoComponent },
  { path: 'informe-vehiculo', component: VehiculoComponent },
  { path: 'formulario-dueno', component: FormularioDuenoComponent },
  { path: 'informe-dueno', component: DuenoComponent },
  { path: 'formulario-conductor', component: FormularioConductorComponent },
  { path: 'informe-conductor', component: ConductorComponent },


 { path: '', redirectTo: '/informe-vehiculo', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
