import { Injectable } from "@angular/core";
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/compat/firestore";

@Injectable({
    providedIn: 'root'
})
export class DatabaseService {

    private path: string = '/empleados';
    private filmRef: AngularFirestoreCollection<any>;
    constructor(
        private afs: AngularFirestore
    ) {
        this.filmRef = this.afs.collection(this.path);
    }

    add(nombre: string, apellido: string, genero2: string, cargo: string, profesion: string) {
      this.filmRef.add({
        Nombre: nombre,
        Apellido: apellido,
        Genero: genero2,
        Cargo: cargo,
        Profesion: profesion
      })
    }

    list(): AngularFirestoreCollection<any> {
      return this.filmRef
    }

    get(id: string) {
      return this.filmRef.doc(id).ref.get();
    }

    update(id: string, nombre: string, apellido: string, genero2: string, cargo: string, profesion: string) {
      this.filmRef.doc(id).update({
        Nombre: nombre,
        Apellido: apellido,
        Genero: genero2,
        Cargo: cargo,
        Profesion: profesion
      });
    }

    delete(id: string) {
      this.filmRef.doc(id).delete();
    }
 }