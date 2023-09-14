import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgregarAsignaturaComponent } from './components/agregar-asignatura/agregar-asignatura.component';
import { NgIfComponent } from './ejemplosDirectivas/ng-if/ng-if.component';
import { NgForComponent } from './ejemplosDirectivas/ng-for/ng-for.component';
import { NgSwitchComponent } from './ejemplosDirectivas/ng-switch/ng-switch.component';

@NgModule({
  declarations: [AppComponent, AgregarAsignaturaComponent, NgIfComponent, NgForComponent, NgSwitchComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
