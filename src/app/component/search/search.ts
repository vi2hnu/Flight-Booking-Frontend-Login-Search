import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Search as SearchModel } from '../../model/search/search.model';
import { Search as SearchService } from '../../service/search/search';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './search.html',
  styleUrl: './search.css',
})
export class Search {

  searchModel: SearchModel = new SearchModel();
  flights: any[] = [];
  errorMessage: string = '';
  fetchError: boolean = false;
  hasClickedeSearch: boolean = false;
  today:string = new Date().toISOString().split('T')[0];
  private router = inject(Router);

  private searchService = inject(SearchService);

  search() {
    this.flights = [];

    this.searchService.searchFlight(this.searchModel).subscribe(
      (response) => {
        this.flights = response;
        if(this.flights.length === 0){
          this.fetchError = true;
          this.errorMessage = 'No flights found for the given criteria.';
        }
      },
      (error) => {
        this.fetchError = true;
        if(error.status === 401){
          this.errorMessage = "Unauthorized access. Please login.";
        }
        else{
          this.hasClickedeSearch = false;
          this.errorMessage = 'Internal Server Error. Please try again later.';
        }
        console.error('Search failed', error);
      }
    );
  }

  hideError() {
    this.fetchError = false;
    this.errorMessage = '';
  }

  logout() {
    this.searchService.logout();
    this.router.navigate(['/login']);
  }
}
