import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EmpleadosAddComponent } from './add/empleados-add.component';
import { EmpleadosListComponent } from './list/empleados-list.component';
import { EmpleadosShowComponent } from './show/empleados-show.component';
import { EmpleadosRoutingModule } from './empleados-routing.module';
import { SweetAlertGrow } from 'sweetalert2';

@NgModule({
    declarations: [
      EmpleadosAddComponent,
      EmpleadosListComponent,
      EmpleadosShowComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        EmpleadosRoutingModule
    ],
    exports: []
  })
  export class EmpleadosModule { }