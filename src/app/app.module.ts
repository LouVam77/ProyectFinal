import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { AppRoutingModule } from './app-routing.module';
import { EmpleadosRoutingModule } from './empleados/empleados-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { InicioComponent } from './inicio/inicio.component';
import { PaisesComponent } from './paises/paises.component';
import { SearchComponent } from './search/search.component';
import { SearchPipe } from './pipes/search.pipe';
import { EmpleadosModule } from './empleados/empleados.module';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    PaisesComponent,
    SearchComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatFormFieldModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    EmpleadosModule,
    ReactiveFormsModule,
    EmpleadosRoutingModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-left'
      }),
    AngularFireModule.initializeApp(environment.FIREBASE_CONFIG),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
