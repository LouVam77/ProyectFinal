import { Component } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';
import { Toast, ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';

@Component ({
  selector: "app-empleados-add",
  templateUrl: "./empleados-add.component.html",
  styleUrls: ["./empleados-add.component.scss"]
})
export class EmpleadosAddComponent {

    constructor(
        private baseData: DatabaseService,
        private toastr?: ToastrService
    ) {}

    nombre: string = "";
    apellido: string = "";
    cargo: string = "";
    genero?: number;
    profesion: string = "";
    genero2: string = "";
    
    /*onFileSelected(event: any) {
      const files: FileList = event.target.files;
      for (let i = 0; i < files.length; i++) {
        const file: File = files[i];
        this.foto.push(file);
      }
    }*/

    add() {
        if (this.nombre.trim() == "" || this.apellido.trim() == "" || this.cargo.trim() == "" || this.genero == undefined || this.profesion.trim() == "") {
          Swal.fire({
            icon: 'error',
            width: 400,
            padding: '1em',
            background: '#FF4F4F',
            title: '¡Campos vacios!',
            confirmButtonText: 'Ok',
            confirmButtonColor: '#FE3434',
         });
            return;      
          } 

          if (this.genero == 1) {
            this.genero2 = "Female";
          }
          else if (this.genero == 2) {
            this.genero2 = "Male";
          }

          console.log("Nombre", this.nombre)
          console.log("Apellido", this.apellido)
          console.log("Genero", this.genero2)
          console.log("Cargo", this.cargo)
          console.log("Profesion", this.profesion)
      
          this.baseData.add(this.nombre, this.apellido, this.genero2, this.cargo, this.profesion);

          Swal.fire({
            icon: 'success',
            width: 400,
            padding: '1em',
            background: '#50D67D',
            title: '¡Agregad@!',
            confirmButtonText: 'Ok',
            confirmButtonColor: '#6AF739',
         });
      
          this.nombre = "";
          this.apellido = "";
          this.genero = undefined;
          this.cargo = "";
          this.profesion = "";
        }
}
