import { Component, OnInit } from '@angular/core';
import { VehiculosService } from 'src/app/servicios/vehiculos.service';

@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.css']
})
export class VehiculoComponent implements OnInit {

  vehiculos: any[] = [];

  constructor(private service: VehiculosService) { }

  ngOnInit() {
    this.cargarVehiculos();
  }

  cargarVehiculos() {
    this.service.getVehiculos().subscribe((data: any) => {
      this.vehiculos = data;
    });
  }

  eliminarVehiculo(id: number) {
    this.service.eliminarVehiculo(id).subscribe(() => {
      // Actualizar la lista de vehículos después de eliminar
      this.cargarVehiculos();
    });
  }

  agregarVehiculo() {
    // Redirigir a la página de creación de vehículo o mostrar un formulario de creación en un modal, por ejemplo
  }

}
