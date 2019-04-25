import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  constructor() { }

  listFlights() {
    return '["Flights"]';
  }
}
