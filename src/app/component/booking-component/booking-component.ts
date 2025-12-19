import { Component, inject, OnInit } from '@angular/core';
import { BookingModel } from '../../model/booking/booking-model.model';
import { BookingService } from '../../service/booking/booking-service';
import { PassengerModel } from '../../model/booking/passenger-model.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-booking-component',
  imports: [CommonModule,FormsModule],
  templateUrl: './booking-component.html',
  styleUrls: ['./booking-component.css'],
})
export class BookingComponent implements OnInit {
  userId!: number;
  flightId!: number;
  bookingPayload!: BookingModel;
  bookingService  = inject(BookingService);
  success: boolean = false;
  message: string = '';
  passengerCount: number = 0;
  showForm: boolean = false;
  passengers: PassengerModel[] = [];


  ngOnInit() {
    this.flightId = history.state.id;
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
    this.bookingPayload = new BookingModel(
      { id: this.userId },
      this.flightId,
      null,
      this.passengers
    );
    console.log(this.bookingPayload);
    this.bookingService.bookTicket(this.bookingPayload).subscribe({
      next: (response) => {
        console.log('Booking successful:', response);
        this.success = true;
        this.message = 'Booking successfull' + response.pnr;
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
