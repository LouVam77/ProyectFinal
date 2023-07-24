import { Component, OnDestroy } from '@angular/core';
import { Subscription, map } from 'rxjs';
import { DatabaseService } from '../../services/database.service';
import Swal from 'sweetalert2';

@Component ({
  selector: "app-empleados-list",
  templateUrl: "./empleados-list.component.html",
  styleUrls: ["./empleados-list.component.scss"]
})
export class EmpleadosListComponent implements OnDestroy {

  emple: any[] = [];

  private subscription?: Subscription

  constructor(
    private databaseService: DatabaseService,
  ) {

    this.list();
  }
  
  list() {
    this.subscription = this.databaseService.list() 
      .snapshotChanges()
      .pipe( //FILTRA O TRAE
        map(
          data => data.map(
            c => ({
              id: c.payload.doc.id, //DOCUMENTOS VIENEN
              ...c.payload.doc.data() //lOS DATOS VIENEN
            })
        )
        )
      )
      .subscribe(data => {
        console.log('Cargar información', data);
        this.emple = data;
      });
  }

  delete(item: any) {
    console.log('Eliminar registro', item);
    this.databaseService?.delete(item.id);
    Swal.fire({
      icon: 'success',
      width: 400,
      padding: '3em',
      background: '#50D67D',
      title: '¡Persona eliminada!',
      confirmButtonText: 'Ok',
      confirmButtonColor: '#6AF739',
   });
  }

  ngOnDestroy() {
    console.log('ONDESTROY');
    this.subscription?.unsubscribe();
  }

}