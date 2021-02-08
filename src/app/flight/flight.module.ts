import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightComponent } from './flight.component';
import { FlightsListComponent } from './flights-list/flights-list.component';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [FlightComponent, FlightsListComponent],
  exports: [
    FlightComponent,
    FlightsListComponent
  ],
  imports: [
    CommonModule,
    MatTableModule
  ]
})
export class FlightModule { }
