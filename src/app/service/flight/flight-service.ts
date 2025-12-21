import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FlightModel } from '../../model/Flight/flight-model';

@Injectable({
  providedIn: 'root',
})
export class FlightService { 
  private readonly apiUrl = 'http://localhost:9000/flightservice/api/flight/airline/inventory';
  constructor(private readonly http: HttpClient) {}

  addFlightSchedule(flightData: FlightModel) {
    return this.http.post<FlightModel>(this.apiUrl, flightData,{withCredentials:true});
  }
  
}
