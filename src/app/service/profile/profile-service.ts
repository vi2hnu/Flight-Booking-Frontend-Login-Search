import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ChangePassword } from '../../model/ChangePassword/change-password';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private readonly apiUrl = 'http://localhost:9000/authservice/api/auth';
  constructor(private readonly http: HttpClient) {}

  changePassword(changePassword: ChangePassword) {
    return this.http.post(`${this.apiUrl}/change/password`, changePassword,{ withCredentials: true });
  }
}
