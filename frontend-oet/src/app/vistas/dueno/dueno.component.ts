import { Component, OnInit } from '@angular/core';
import { DuenosService } from 'src/app/servicios/duenos.service';

@Component({
  selector: 'app-dueno',
  templateUrl: './dueno.component.html',
  styleUrls: ['./dueno.component.css']
})
export class DuenoComponent implements OnInit {

    duenos: any[] = [];
  
    constructor(private dueñosService: DuenosService) { }
  
    ngOnInit(): void {
      this.enlistarDueños();
    }
  
    enlistarDueños() {
      this.dueñosService.enlistarDuenos().subscribe(
        (data: any) => {
          this.duenos = data;
        },
        (error) => {
          console.error('Error al enlistar dueños:', error);
        }
      );
    }
  
    agregarDueno() {
      // Aquí puedes implementar la lógica para agregar un nuevo dueño.
      // Puedes abrir un modal, una página de formulario, etc.
    }
  
    eliminarDueno(numeroCedula: number) {
      if (confirm('¿Estás seguro de que deseas eliminar a este dueño?')) {
        this.dueñosService.eliminarDueno(numeroCedula).subscribe(
          () => {
            this.enlistarDueños(); // Vuelve a enlistar después de eliminar
          },
          (error) => {
            console.error('Error al eliminar dueño:', error);
          }
        );
      }
    }
}
