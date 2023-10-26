import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VehiculosService } from 'src/app/servicios/vehiculos.service';

@Component({
  selector: 'app-formulario-vehiculo',
  templateUrl: './formulario-vehiculo.component.html',
  styleUrls: ['./formulario-vehiculo.component.css']
})
export class FormularioVehiculoComponent {
  placa: string = '';
  color: string = '';
  marca: string = '';
  tipo: string = '';
  conductorID: string = '';
  propietarioID: string = '';


  constructor(private service: VehiculosService,private router:Router) { }


  enviarDatos() {
    // Crear un objeto con los datos del vehículo
    const vehiculo = {
      placa: this.placa,
      color: this.color,
      marca: this.marca,
      tipo_de_vehiculo: this.tipo,
      conductorID: this.conductorID,
      propietarioID: this.propietarioID
    };
  
    // Llamar al método del servicio para agregar el vehículo
    this.service.agregarVehiculo(vehiculo).subscribe(
      (response) => {
        console.log('Vehículo agregado con éxito:', response);
        this.service.getVehiculos();
        this.router.navigate(['/informe-vehiculo']); 
      },
      (error) => {
        console.error('Error al agregar el vehículo:', error);
      }
    );
  }
  
}

