import { Component, inject } from '@angular/core';
import { LoginModel } from '../../model/login/login-model.model';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../service/login/login-service';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  loginModel: LoginModel = new LoginModel();
  loginService = inject(LoginService);
  
  login() {
    this.loginService.login(this.loginModel).subscribe(
      (response) => {
        console.log('Login successful', response);
        alert('Login successful');
      },
      (error) => {
        console.error('Login failed', error);
      }
    );
  }
}
