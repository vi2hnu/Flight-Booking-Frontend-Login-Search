import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Search as searchModel} from '../../model/search/search.model';

@Injectable({
  providedIn: 'root',
})
export class Search {
    private apiUrl = 'http://localhost:9000/flightservice/api/flight/search';

    constructor(private http: HttpClient) {}

    searchFlight(searchModel: searchModel) {
        return this.http.post<any>(this.apiUrl, searchModel);
    }
}
