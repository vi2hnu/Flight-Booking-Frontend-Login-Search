import { Component, inject, OnInit } from '@angular/core';
import { BookingModel } from '../../model/booking/booking-model.model';
import { BookingService } from '../../service/booking/booking-service';

@Component({
  selector: 'app-booking-component',
  templateUrl: './booking-component.html',
  styleUrls: ['./booking-component.css'],
})
export class BookingComponent implements OnInit {
  userId!: number;
  flightId!: number;
  bookingPayload!: BookingModel;
  bookingService  = inject(BookingService);

  ngOnInit() {
    this.flightId = history.state.id;
    const user = JSON.parse(localStorage.getItem('user')!);
    this.userId = user.id;

    this.bookingPayload = new BookingModel(
      { id: this.userId },
      this.flightId,
      null,
      [{
       "name": "Ramesh Kumar",
       "gender": "MALE",
       "meal": "VEG",
       "seatPos": "30C"
    }]
    );
  }

  bookTicket() {
    console.log(this.bookingPayload);
    this.bookingService.bookTicket(this.bookingPayload).subscribe({
      next: (response) => {
        console.log('Booking successful:', response);
        alert('Booking successful!');
      },
      error: (error) => {
        console.error('Booking failed:', error);
        alert('Booking failed. Please try again.');
      }
    });
  }
}
