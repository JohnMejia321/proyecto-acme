import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConductoresService } from 'src/app/servicios/conductores.service';

@Component({
  selector: 'app-conductor',
  templateUrl: './conductor.component.html',
  styleUrls: ['./conductor.component.css']
})
export class ConductorComponent implements OnInit {

  conductores: any[] = [];

  constructor(private service: ConductoresService,private router:Router) { }

  ngOnInit() {
    this.enlistarConductores();
  }

  enlistarConductores() {
    this.service.enlistarConductores().subscribe(
      (response: any) => {
        this.conductores = response.conductores;
      },
      (error) => {
        console.error('Error al listar conductores:', error);
      }
    );
  }

  eliminarConductor(id: number) {
    this.service.eliminarConductor(id).subscribe(
      (response) => {
        console.log('Conductor eliminado con éxito');
        this.enlistarConductores();
      },
      (error) => {
        console.error('Error al eliminar el conductor:', error);
      }
    );
  }

  navegarAFormularioConductor(){
    this.router.navigate(['/formulario-conductor']);

  }

}
