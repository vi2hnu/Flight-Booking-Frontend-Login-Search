import { Component,inject, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Search as SearchService } from '../../service/search/search';
import { Router } from '@angular/router'

@Component({
  selector: 'app-header-component',
  imports: [],
  templateUrl: './header-component.html',
  styleUrl: './header-component.css',
})
export class HeaderComponent implements OnInit {
  private readonly searchService = inject(SearchService);
  private readonly router = inject(Router);

  changePasswordRequired: boolean = false;

  constructor(private cookieService: CookieService) {
  }

  ngOnInit() {
    if(history.state.changePassword) {
      this.changePasswordRequired = true;
    }
  }

  logout() {
    this.cookieService.deleteAll();
    this.searchService.logout();
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  routeToProfile(){
    this.router.navigate(['/profile']);
  }

  routeToTickets(){
    this.router.navigate(['/tickets']);
  }

  routeToSearch(){
    this.router.navigate(['/search']);
  }
}
