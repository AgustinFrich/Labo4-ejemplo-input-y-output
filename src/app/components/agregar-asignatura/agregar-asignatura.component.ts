import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-agregar-asignatura',
  templateUrl: './agregar-asignatura.component.html',
  styleUrls: ['./agregar-asignatura.component.css'],
})
export class AgregarAsignaturaComponent implements OnInit {
  @Input() nombre: string = '';
  @Output() agregarAsignaturaEvent = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  // Es solo una función que se encarga de emitir el evento. Mientras emitamos el evento lo podemos colocar en cualquier lado.
  agregarAsignaturaDesdeHijo(nombre: string) {
    this.agregarAsignaturaEvent.emit(this.nombre + ' - Todo bien!');
  }
}
