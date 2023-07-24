import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpleadosListComponent } from './list/empleados-list.component';
import { EmpleadosAddComponent } from './add/empleados-add.component';
import { EmpleadosShowComponent } from './show/empleados-show.component';

const routes: Routes = [
    {
      path: '',
      children: [
        {
          path: '',
          component: EmpleadosListComponent
        },
        {
          path: 'list',
          component: EmpleadosListComponent
        },
        {
          path: 'add',
          component: EmpleadosAddComponent
        },
        {
          path: 'edit/:id',
          component: EmpleadosShowComponent
        }
      ]
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })  
  export class EmpleadosRoutingModule {}
  