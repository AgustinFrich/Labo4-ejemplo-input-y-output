import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.css'],
})
export class NgSwitchComponent implements OnInit {
  // Valor a evaluar
  switch_expression = 'caso2';

  // casos posibles
  match_expression_1 = 'caso1';
  match_expression_2 = 'caso2';
  match_expression_3 = 'caso3';

  constructor() {}

  ngOnInit(): void {}
}
