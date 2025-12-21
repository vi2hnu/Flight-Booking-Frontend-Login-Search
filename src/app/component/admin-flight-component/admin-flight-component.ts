import { Component, inject } from '@angular/core';
import { FlightService } from '../../service/flight/flight-service';
import { FlightModel } from '../../model/Flight/flight-model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-flight-component',
  imports: [CommonModule,FormsModule],
  templateUrl: './admin-flight-component.html',
  styleUrl: './admin-flight-component.css',
})
export class AdminFlightComponent {
  error:boolean = false;
  success:boolean = false;
  errorMessage:string = '';
  request: FlightModel = {
    flightId: 0,
    fromCityId: 0,
    toCityId: 0,
    departureDate: '',
    departureTime: '',
    price: 0,
    seatsAvailable: 0,
    duration: 0,
  }
  flightService: FlightService = inject(FlightService);

  handleError(message: string) {
    this.error = true;
    this.errorMessage = message;
  }

  addSchedule() {
    this.request.departureTime = this.request.departureDate+'T'+this.request.departureTime;
    this.flightService.addFlightSchedule(this.request).subscribe({
      next: (response) => {
        this.success = true;
        console.log('Flight schedule added successfully:', response);
      },
      error: (error) => {
        if(error.status === 409){
          this.handleError('Conflict: Flight schedule already exists.');
        }
        else{
          this.handleError('Internal Server Error. Please try again later.');
        }
        console.error('Error adding flight schedule:', error);
        return;
      },
    });
  }
}
