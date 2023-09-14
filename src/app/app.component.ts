import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  nuevoNombre: string = '';
  resultado = '';

  // Es la función que recibe el evento del output
  agregarAsignaturaDesdePadre(nombre: string) {
    this.resultado = nombre;
  }
}
