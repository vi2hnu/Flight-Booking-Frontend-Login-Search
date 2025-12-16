import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [CookieService]
})
export class AppModule {}