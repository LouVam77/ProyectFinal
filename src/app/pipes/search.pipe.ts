import { NonNullAssert } from '@angular/compiler';
import { Pipe, PipeTransform } from '@angular/core';
import Swal from 'sweetalert2';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(lista: any[], texto: string) {
    if(!texto) return lista
    if(lista.find(item => item.name.common.toUpperCase().includes(texto.toUpperCase())) === undefined ) {
    Swal.fire({
      icon: 'warning',
      title: '¡ Pais no encontrado !',
      text: 'No se contiene el pais en lista o no es existente :/',
      confirmButtonText: 'Ok',
      color: '#FFEFBD',
      confirmButtonColor: '#818AFF',
      background: '#555ECF',
      cancelButtonAriaLabel: 'Thumbs down'
     });
    }
    return lista.filter(item => item.name.common.toUpperCase().includes(texto.toUpperCase()));
    };
  }
