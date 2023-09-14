import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css'],
})
export class NgForComponent implements OnInit {
  listado = [
    {
      nombre: 'Agustin',
      apellido: 'Friadenrich',
    },
    { nombre: 'Octavio', apellido: 'Villegas' },
    { nombre: 'Alumno', apellido: 'Anonimo' },
  ];

  constructor() {}

  ngOnInit(): void {}

  agregarPersona() {
    this.listado.push({ nombre: 'Franco', apellido: 'Lippi' });
  }
}
