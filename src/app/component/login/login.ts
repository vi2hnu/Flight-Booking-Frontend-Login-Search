import { Component, inject } from '@angular/core';
import { LoginModel } from '../../model/login/login-model.model';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../service/login/login-service';       
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [FormsModule,CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  loginModel: LoginModel = new LoginModel();
  loginService = inject(LoginService);
  loginError: boolean = false;
  errorMessage: string = '';


  login() {
    this.loginService.login(this.loginModel).subscribe(
      (response) => {
        console.log('Login successful', response);
        alert('Login successful');
      },
      (error) => {
        this.loginError = true;
        if(error.status === 401){
          this.errorMessage = 'Username or password is wrong';
        }
        else  {
          this.errorMessage = 'Internal Server Error. Please try again later.';
        }
        console.error('Login failed', error);
      }
    );
  }

  hidePopUp() {
    this.loginError = false;
  }
}
