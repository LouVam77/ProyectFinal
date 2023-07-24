import { Component, OnDestroy } from '@angular/core';
import { Subscription, map } from 'rxjs';
import { DatabaseService } from '../../services/database.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component ({
  selector: "app-empleados-add",
  templateUrl: "./empleados-show.component.html",
  styleUrls: ["./empleados-show.component.scss"]
})
export class EmpleadosShowComponent {

  id: string= '';
  nombre: string = '';
  apellido: string = '';
  genero: number;
  cargo: string = "";
  genero2: string = "";
  profesion: string = "";

  constructor(
    activated: ActivatedRoute,
    private databaseService: DatabaseService,
    private toast?: ToastrService
  ) {

    activated.params.subscribe((params: any) => {
      console.log('Parámetros', params);

      this.id = params.id;
      this.databaseService.get(params.id).then(val => {
        const document = val.data();
        this.nombre = document.Nombre;
        this.apellido = document.Apellido;
        this.genero2 = document.Genero;
        this.cargo = document.Cargo;
        this.profesion = document.Profesion;

      });
    });
  }

  update() {
    if (this.nombre.trim() == "" || this.apellido.trim() == "" || this.cargo.trim() == "" || this.genero == undefined || this.profesion.trim() == "") {
      Swal.fire({
        icon: 'warning',
        title: 'Campos vacios...',
        confirmButtonText: 'Ok',
        color: '#FFFFFF',
        confirmButtonColor: '#FFC284',
        background: '#3E0E0E'
     });
      return      
    } 

    if (this.genero == 1) {
      this.genero2 = "Female";
    }
    else if (this.genero == 2) {
      this.genero2 = "Male";
    }

    this.databaseService.update(
      this.id, this.nombre, this.apellido, this.genero2, this.cargo, this.profesion
    )

    Swal.fire({
      icon: 'success',
      title: '¡Registro actualizado!',
      confirmButtonText: 'Listo',
      background: '#50D67D',
      confirmButtonColor: '#6AF739',
   })
  }
}