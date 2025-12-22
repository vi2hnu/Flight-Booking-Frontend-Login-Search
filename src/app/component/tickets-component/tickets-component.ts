import { Component, inject, OnInit } from '@angular/core';
import { TicketsService } from '../../service/tickets/tickets-service';
import { DatePipe } from '@angular/common';
import { HeaderComponent } from '../header-component/header-component';

@Component({
  selector: 'app-tickets-component',
  imports: [DatePipe, HeaderComponent],
  templateUrl: './tickets-component.html',
  styleUrl: './tickets-component.css',
})
export class TicketsComponent implements OnInit {
  tickets: any;
  ticketService = inject(TicketsService);
  email!: string;
  cancelledPnr: string = '';
  errorMessage: string = '';
  lessThan24HoursError: string = '';
  errorTicketPnr: string = '';
  today:string = new Date().toISOString().split('T')[0];

  ngOnInit() {
    const user = JSON.parse(localStorage.getItem('user')!);
    this.email = user.email;
    this.fetchTickets();
  }

  fetchTickets() {
    this.ticketService.getHistory(this.email).subscribe({
      next: (data) => {
        this.tickets = data
          .filter((ticket: any) => ticket.departureDate >= this.today)
          .sort((a: any, b: any) => {
            const dateA = new Date(a.departureTime);
            const dateB = new Date(b.departureTime);
            return dateA.getTime() - dateB.getTime();
          });
      },
      error: (err) => {
        if (err.status === 404) {
          this.errorMessage = 'No tickets found.';
        } else if (err.status === 401) {
          this.errorMessage = 'Unauthorized access. Please log in.';
        } else {
          this.errorMessage = 'Internal server error. Please try again later.';
        }
      }
      
    });
  }


  cancelTicket(pnr: string) {
    this.ticketService.cancelTicket(pnr).subscribe({
      next: (data) => {
        console.log('Ticket cancelled successfully', data);
        this.cancelledPnr = '';
        this.fetchTickets();
        this.hidePopUp();
      },
      error: (err) => {
        if (err.status == 400) {
          this.lessThan24HoursError = 'Tickets cannot be cancelled less than 24 hours before departure.';
          this.errorTicketPnr = pnr;
          this.hidePopUp();
          setTimeout(() => {
            this.lessThan24HoursError = '';
            this.errorTicketPnr = '';
          }, 5000);
          return;
        }
        console.error('Failed to cancel ticket', err);
        
      }
      
    });
  }

  hidePopUp() {
    this.cancelledPnr = '';
  }
}