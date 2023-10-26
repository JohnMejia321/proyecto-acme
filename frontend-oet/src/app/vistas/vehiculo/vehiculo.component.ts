import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VehiculosService } from 'src/app/servicios/vehiculos.service';

@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.css']
})
export class VehiculoComponent implements OnInit {

  vehiculos: any[] = [];

  constructor(private service: VehiculosService,private router: Router) { }

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
    this.router.navigate(['/formulario-vehiculo']);
  }

}
