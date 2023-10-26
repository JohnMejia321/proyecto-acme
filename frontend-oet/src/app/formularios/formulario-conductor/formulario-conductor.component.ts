import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConductoresService } from 'src/app/servicios/conductores.service';

@Component({
  selector: 'app-formulario-conductor',
  templateUrl: './formulario-conductor.component.html',
  styleUrls: ['./formulario-conductor.component.css']
})
export class FormularioConductorComponent  {

  numeroCedula: number = 0;
  primerNombre: string = '';
  segundoNombre: string = '';
  apellidos: string = '';
  direccion: string = '';
  telefono: string = '';

  constructor(private service: ConductoresService,private router: Router) { }

  agregarConductor() {
    const nuevoConductor = {
      numero_cedula: this.numeroCedula,
      primer_nombre: this.primerNombre,
      segundo_nombre: this.segundoNombre,
      apellidos: this.apellidos,
      direccion: this.direccion,
      telefono: this.telefono
    };

    this.service.agregarConductor(nuevoConductor).subscribe(
      (response) => {
        console.log('Conductor agregado con éxito');
        this.router.navigate(['/informe-conductor']);
      },
      (error) => {
        console.error('Error al agregar el conductor:', error);
      }
    );
  }

}
