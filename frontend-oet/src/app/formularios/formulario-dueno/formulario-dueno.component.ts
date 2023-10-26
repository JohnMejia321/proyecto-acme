import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DuenosService } from 'src/app/servicios/duenos.service';

@Component({
  selector: 'app-formulario-dueno',
  templateUrl: './formulario-dueno.component.html',
  styleUrls: ['./formulario-dueno.component.css']
})
export class FormularioDuenoComponent implements OnInit {

  numero_cedula: number = 0;
  primer_nombre: string = '';
  segundo_nombre: string = '';
  apellidos: string = '';
  direccion: string = '';
  telefono: string = '';

  dueños: any[] = []; // Para almacenar la lista de dueños

  constructor(private service: DuenosService,private router: Router) {}


  ngOnInit(): void {
    this.enlistarDuenos(); // Llama a la función para listar los dueños al cargar el componente
  }

  agregarDueno() {
    const nuevoDueno = {
      numero_cedula: this.numero_cedula,
      primer_nombre: this.primer_nombre,
      segundo_nombre: this.segundo_nombre,
      apellidos: this.apellidos,
      direccion: this.direccion,
      telefono: this.telefono
    };

    this.service.agregarDueno(nuevoDueno).subscribe(
      (response) => {
        // Realizar acciones después de agregar el dueño, como limpiar el formulario
        console.log('Dueño agregado con éxito');
        this.enlistarDuenos(); // Vuelve a listar los dueños después de agregar uno nuevo
        this.router.navigate(['/informe-dueno']); // Redirige a la ruta informe-dueno
      },
      (error) => {
        console.error('Error al agregar el dueño:', error);
      }
    );
  }


  enlistarDuenos() {
    this.service.enlistarDuenos().subscribe(
      (response: any) => {
        this.dueños = response; // Asigna la lista de dueños al arreglo local
      },
      (error) => {
        console.error('Error al obtener la lista de dueños:', error);
      }
    );
  }

  eliminarDueno(numeroCedula: number) {
    this.service.eliminarDueno(numeroCedula).subscribe(
      (response) => {
        console.log('Dueño eliminado con éxito');
        this.enlistarDuenos(); // Vuelve a listar los dueños después de eliminar uno
      },
      (error) => {
        console.error('Error al eliminar el dueño:', error);
      }
    );
  }

}
