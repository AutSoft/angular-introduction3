import { Component, OnInit } from '@angular/core';
import {FlightService} from '../flight.service';
import {Flight} from '../models/flight.model';

@Component({
  selector: 'app-flights-list',
  templateUrl: './flights-list.component.html',
  styleUrls: ['./flights-list.component.scss']
})
export class FlightsListComponent implements OnInit {
  flights: Flight[];
  displayedColumns: string[] = ['flightNumber', 'departureCity', 'arrivalCity'];

  constructor(private flightService: FlightService) { }

  ngOnInit() {
    this.flightService.listFlights().subscribe(flights => this.flights = flights);
  }

}
