import { Component } from '@angular/core';
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
  conductor: string = '';
  propietario: string = '';


  constructor(private service: VehiculosService) { }


  enviarDatos() {
    // Crear un objeto con los datos del vehículo
    const vehiculo = {
      placa: this.placa,
      color: this.color,
      marca: this.marca,
      tipo_de_vehiculo: this.tipo,
      conductor: this.conductor,
      propietario: this.propietario
    };
  
    // Llamar al método del servicio para agregar el vehículo
    this.service.agregarVehiculo(vehiculo).subscribe(
      (response) => {
        console.log('Vehículo agregado con éxito:', response);
        // Aquí puedes realizar acciones adicionales después de agregar el vehículo, como redireccionar o mostrar un mensaje de éxito.
      },
      (error) => {
        console.error('Error al agregar el vehículo:', error);
        // Aquí puedes manejar errores, como mostrar un mensaje de error al usuario.
      }
    );
  }
  
}

