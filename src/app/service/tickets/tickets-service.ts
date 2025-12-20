import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TicketsService {
    private readonly apiUrl = 'http://localhost:9000/bookingservice/api/flight/booking';
    constructor(private readonly http: HttpClient) {}

    getHistory(email: string){
      return this.http.get<any>(this.apiUrl+'/history/'+email, { withCredentials: true });
    }

    cancelTicket(pnr: string){
      return this.http.delete<any>(this.apiUrl+'/cancel/'+pnr, { withCredentials: true });
    }
}
