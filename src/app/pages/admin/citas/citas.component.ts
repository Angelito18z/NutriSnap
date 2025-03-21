import { Component } from '@angular/core';
import { Cita } from '../../../nutri-data/interfaces/nutri-data';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { QuoteService } from '../../../services/quote/quote.service';
import { DialogQuoteComponent } from '../../../components/dialog-quote/dialog-quote.component';
import { DialogComponent } from '../../../components/dialog/dialog.component';



@Component({
  selector: 'app-citas',
  standalone: false,
  templateUrl: './citas.component.html',
  styleUrl: './citas.component.scss'
})

  export class CitasComponent {
  
    displayedColumns: (string | undefined)[] = ['id', 'paciente_id', 'trabajador_id', 'fecha', 'hora', 'duracion', 'notas', 'actions'];
    Citas: Cita[] = [];
  
    constructor(private quoteService: QuoteService, private dialog: MatDialog, private router: Router) {}
  
    ngOnInit() {
      this.getCitas();
      console.log('displayedColumns:', this.displayedColumns);
    }
  
    // Obtener la lista de citas
    getCitas() {
      this.quoteService.getCitas().subscribe(
        (citas: Cita[]) => {
          this.Citas = citas;
        },
        (error) => {
          console.error('Error al obtener citas:', error);
        }
      );
    }
  
    // Editar una cita
    edit(cita: Cita): void {
      const dialogRef = this.dialog.open(DialogQuoteComponent, {
        width: '500px',
        data: cita, // Pasa la cita seleccionada al diálogo
      });
  
      dialogRef.afterClosed().subscribe((result: Cita) => {
        if (result) {
          console.log('Cita editada:', result);
          this.actualizarCita(result); // Llama al método para actualizar la cita
        }
      });
    }
  
    // Actualizar una cita
    actualizarCita(cita: Cita): void {
      this.quoteService.updateCita(cita).subscribe({
        next: (response) => {
          this.mostrarDialog(
            'Cita actualizada con éxito',
            `Se actualizó la cita del ${cita.fecha} satisfactoriamente`,
            null
          );
          this.getCitas(); // Actualiza la lista de citas
        },
        error: (error) => {
          this.mostrarDialog(
            'Error al actualizar la cita',
            `Hubo un error al actualizar la cita del ${cita.fecha}`,
            null
          );
        },
      });
    }
  
    // Eliminar una cita
    delete(cita: Cita) {
      this.mostrarDialog(
        '¿Estás seguro de borrar esta cita?',
        `Se eliminará la cita del ${cita.fecha} permanentemente.`,
        'Eliminar'
      ).subscribe((result: boolean) => {
        if (result) {
          this.quoteService.deleteCita(cita.id).subscribe({
            next: () => {
              this.mostrarDialog(
                'Cita Eliminada',
                'La cita fue eliminada satisfactoriamente',
                null
              );
              this.getCitas();
            },
            error: (err) => {
              this.mostrarDialog(
                'Error al eliminar la cita',
                'Hubo un error al eliminar la cita :(',
                null
              );
            }
          });
        } else {
          this.mostrarDialog(
            'Acción cancelada',
            'Operación cancelada satisfactoriamente',
            null
          );
        }
      });
    }
  
    // Método para mostrar diálogos
    mostrarDialog(titulo: string, mensaje: string, accion: string | null) {
      const dialogRef = this.dialog.open(DialogComponent, {
        data: {
          title: titulo,
          message: mensaje,
          action: accion
        }
      });
  
      return dialogRef.afterClosed();
    }
  
    // Abrir diálogo para agregar o editar según la ruta
    openDialog(): void {
      const currentRoute = this.router.url;
  
      switch (currentRoute) {
        case '/admin/quote':
          this.openAgregarCitaDialog();
          break;
        default:
          console.warn('No hay un diálogo definido para esta ruta:', currentRoute);
          break;
      }
    }
  
    // Abrir diálogo para agregar una cita
    openAgregarCitaDialog(): void {
      const dialogRef = this.dialog.open(DialogQuoteComponent, {
        width: '500px',
      });
  
      dialogRef.afterClosed().subscribe((result: Cita) => {
        if (result) {
          console.log('Cita a agregar:', result);
          this.agregarCita(result); // Llama al método para agregar la cita
        }
      });
    }
  
    // Agregar una cita
    agregarCita(cita: Cita): void {
      this.quoteService.addCita(cita).subscribe({
        next: (response) => {
          this.mostrarDialog(
            'Cita agregada con éxito',
            `Se agregó la cita del ${cita.fecha} satisfactoriamente`,
            null
          );
          this.getCitas(); // Actualiza la lista de citas
        },
        error: (error) => {
          this.mostrarDialog(
            'Error al agregar la cita',
            `Hubo un error al agregar la cita del ${cita.fecha}`,
            null
          );
        },
      });
    }
  }

