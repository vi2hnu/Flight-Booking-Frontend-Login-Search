import { Component, inject } from '@angular/core';
import { LoginModel } from '../../model/login/login-model.model';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../service/login/login-service';       
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'

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
  private readonly router = inject(Router);


  login() {
  this.loginService.login(this.loginModel).subscribe({
    next: () => {
      this.loginService
        .getUserDeatils(this.loginModel.username)
        .subscribe({
          next: (user) => {
            localStorage.setItem('user', JSON.stringify(user));
            const isAdmin = user.roles.some((role: any) => role.name === 'ADMIN');
            if (isAdmin) {
              this.router.navigate(['/admin/add/flight']);
              return;
            }
            this.router.navigate(['/search'])
          },
          error: () => {
            this.errorMessage = 'Failed to load user details';
          }
        });
    },
    error: (error) => {
      this.loginError = true;
      if (error.status === 401) {
        this.errorMessage = 'Username or password is wrong';
      } else {
        this.errorMessage = 'Internal Server Error. Please try again later.';
      }
    }
  });
}

  hidePopUp() {
    this.loginError = false;
  }

  redirectToRegister() {
    this.router.navigate(['/register']);
  }
}
