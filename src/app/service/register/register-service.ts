import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterModel } from '../../model/register/register-model.model';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
    private apiUrl = 'http://localhost:9000/authservice/api/auth/signup';
    constructor(private http: HttpClient) {}

    register(registerModel: RegisterModel){
      return this.http.post<any>(this.apiUrl, registerModel,{ withCredentials: true });
    }
}
