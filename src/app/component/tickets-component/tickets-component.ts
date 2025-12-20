import { Component, inject, OnInit } from '@angular/core';
import { TicketsService } from '../../service/tickets/tickets-service';
@Component({
  selector: 'app-tickets-component',
  imports: [],
  templateUrl: './tickets-component.html',
  styleUrl: './tickets-component.css',
})
export class TicketsComponent implements OnInit{
    tickets: any;
    ticketService = inject(TicketsService);
    email!: string;
    cancelledPnr: string = '';

    ngOnInit() {
      const user = JSON.parse(localStorage.getItem('user')!);
      this.email = user.email;
      this.fetchTickets();
    }

    fetchTickets(){
      this.ticketService.getHistory(this.email).subscribe({
        next: (data) => {
          this.tickets = data;
        },
        error: (err) => {
          console.error('Failed to load tickets', err);
        }
      });
    }

    cancelTicket(pnr: string) {
      this.ticketService.cancelTicket(pnr).subscribe({
        next: (data) => {
          console.log('Ticket cancelled successfully', data);
          this.cancelledPnr = '';
          this.fetchTickets();
        },
        error: (err) => {
          console.error('Failed to cancel ticket', err);
        }
      });
    }
}
