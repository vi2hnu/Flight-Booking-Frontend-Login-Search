import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookingModel } from '../../model/booking/booking-model.model';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
    private readonly apiUrl = 'http://localhost:9000/bookingservice/api/flight/booking/3';

    constructor(private readonly http: HttpClient) {}

    bookTicket(bookingPayload: BookingModel) {
        return this.http.post<any>(this.apiUrl, bookingPayload, { withCredentials: true });
    }
}
