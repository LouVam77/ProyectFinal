import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Toast, ToastrService } from 'ngx-toastr';
import { APIService } from '../services/api.service';
import { FormControl } from '@angular/forms';
import { debounce, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.scss']
})
export class PaisesComponent {

    paises: any;
    //resultados = [];
  
    constructor(
      http: HttpClient,
      toast: ToastrService,
      private apiService: APIService
    ) {
      this.list()
    }
  
    async list() {
      this.paises = await this.apiService.getInfo();
      console.log(this.paises)
     }

  filtre_valor = "";

  handleSearch(value: string) {
    console.log(value)
    this.filtre_valor = value;
   }
}