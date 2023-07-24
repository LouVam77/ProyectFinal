import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounce, debounceTime } from 'rxjs/operators';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
      
     ngOnInit() {
         this.search.valueChanges
         .pipe(
          debounceTime(1000)
         )
         .subscribe(value => this.searchEmitter.emit(value));
     }
  
     search = new FormControl('');
  
     @Output('search') searchEmitter = new EventEmitter<string>();
  
     /*async buscarPalabras(palabraB: string) {
      for (let i = 0; i < this.paises.length; i++) {
        const palabra: string = this.paises[i];
        // Verificamos si la palabra contiene la palabra buscada (ignorando mayúsculas y minúsculas)
        if (this.paises.toLowerCase().includes(palabraB.toLowerCase())) {
          this.resultados.push(palabra)
        }
      }
      return this.resultados;
    }
  
    async palabraLista() {
      this.buscarPalabras(this.palabraB);
    }*/
}
