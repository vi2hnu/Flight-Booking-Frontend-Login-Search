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

  private searchService = inject(SearchService);

  search() {
    this.searchService.searchFlight(this.searchModel).subscribe(
      (response) => {
        this.flights = response;
      },
      (error) => {
        console.error('Search failed', error);
      }
    );
  }
}
