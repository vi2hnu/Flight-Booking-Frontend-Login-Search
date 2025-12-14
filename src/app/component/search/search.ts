import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Search as SearchModel } from '../../model/search/search.model';
import { Search as SearchService } from '../../service/search/search';
import { CommonModule } from '@angular/common';

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

  private searchService = inject(SearchService);

  search() {
    this.searchService.searchFlight(this.searchModel).subscribe(
      (response) => {
        this.flights = response;
      },
      (error) => {
        this.fetchError = true;
        if(error.status === 401){
          this.errorMessage = "Unauthorized access. Please login.";
        }
        else{
          this.errorMessage = 'Internal Server Error. Please try again later.';
        }
        console.error('Search failed', error);
      }
    );
  }
}
