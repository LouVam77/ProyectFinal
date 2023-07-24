import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpleadosListComponent } from './empleados/list/empleados-list.component';
import { EmpleadosAddComponent } from './empleados/add/empleados-add.component';
import { InicioComponent } from './inicio/inicio.component';
import { PaisesComponent } from './paises/paises.component';

const routes: Routes = [
  {
    path: '',
    component: InicioComponent
  },
  {
    path: 'paises',
    component: PaisesComponent
  },
  {
     path: 'empleados',
     loadChildren: () => import('./empleados/empleados.module').then(m => m.EmpleadosModule)
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
