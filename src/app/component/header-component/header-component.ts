import { Component,inject } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Search as SearchService } from '../../service/search/search';
import { Router } from '@angular/router'

@Component({
  selector: 'app-header-component',
  imports: [],
  templateUrl: './header-component.html',
  styleUrl: './header-component.css',
})
export class HeaderComponent {
  private readonly searchService = inject(SearchService);
  private readonly router = inject(Router);

  constructor(private cookieService: CookieService) {
  }

  logout() {
    this.cookieService.deleteAll();
    this.searchService.logout();
    this.router.navigate(['/login']);
  }
}
