import { Component, inject, OnInit } from '@angular/core';
import { BookingModel } from '../../model/booking/booking-model';
import { BookingService } from '../../service/booking/booking-service';
import { PassengerModel } from '../../model/booking/passenger-model.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../header-component/header-component';

@Component({
  selector: 'app-booking-component',
  imports: [CommonModule,FormsModule,HeaderComponent],
  templateUrl: './booking-component.html',
  styleUrls: ['./booking-component.css'],
})
export class BookingComponent implements OnInit {
  userId!: number;
  flightId!: number;
  toCity!: string;
  fromCity!: string;
  departureDate!: string;
  departureTime!: string;
  bookingPayload: BookingModel ={
    user: { id: 0 },
    scheduleId: 0,
    returnTripId: null,
    passengers: []
  };
  bookingService  = inject(BookingService);
  success: boolean = false;
  message: string = '';
  passengerCount: number = 0;
  showForm: boolean = false;
  buttonClicked: boolean = false;
  passengers: PassengerModel[] = [];


  ngOnInit() {
    this.flightId = history.state.id;
    this.departureDate = history.state.date;
    this.departureTime = history.state.time.split('T')[1];
    this.fromCity = history.state.fromCityCode;
    this.toCity = history.state.toCityCode;
    const user = JSON.parse(localStorage.getItem('user')!);
    this.userId = user.id
  }

  generatePassengers() {
    this.passengers = [];
    for (let i = 0; i < this.passengerCount; i++) {
      this.passengers.push(new PassengerModel());
    }
    this.showForm = true;
  }

  bookTicket() {
    this.bookingPayload.user.id = this.userId;
    this.bookingPayload.scheduleId = this.flightId;
    this.bookingPayload.returnTripId = null;
    this.bookingPayload.passengers = this.passengers;
    console.log(this.bookingPayload);
    this.bookingService.bookTicket(this.bookingPayload).subscribe({
      next: (response) => {
        this.success = true;
        this.message = 'Booking successfull. PNR = ' + response.pnr+'. Please check the tickets page or your email for more details.';
      },
      error: (error) => {
        console.error('Booking failed:', error);
        this.success = false;
        if(error.status === 401){
          this.message = 'Unauthorized user. Please login to continue.';

        }
        else if(error.status === 409){
          this.message = 'Seat already booked. Please choose different seat(s).';
        }
        else{
          this.message = 'Internal server error. Please try again later.';
        }
      }
    });
  }
}
