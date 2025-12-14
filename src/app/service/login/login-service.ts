import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from '../../model/login/login-model.model';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private apiUrl = 'http://localhost:9000/authservice/api/auth/signIn';

  constructor(private http: HttpClient) {}

  login(loginModel: LoginModel){
    return this.http.post<any>(this.apiUrl, loginModel,{ withCredentials: true });
  }
}
