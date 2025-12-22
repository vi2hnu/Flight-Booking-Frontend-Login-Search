import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from '../header-component/header-component';
import { ProfileService } from '../../service/profile/profile-service';
import { ChangePassword } from '../../model/ChangePassword/change-password';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-component',
  standalone: true,
  imports: [HeaderComponent, FormsModule, CommonModule],
  templateUrl: './profile-component.html',
  styleUrl: './profile-component.css',
})
export class ProfileComponent implements OnInit {

  username:string = '';
  email:string = '';
  requestChangePassword:boolean = false;
  passwordChangeSuccess:boolean = false;
  error:boolean = false;
  errorMessage:string = '';
  newPasswordRepeat:string = '';
  request: ChangePassword = {
    username: '',
    oldPassword: '',
    newPassword: '',
  };
  profileService = inject(ProfileService);
  router = inject(Router);
  countdown = 5;
  private timerId: any;


  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('user')!);
    this.username = user.username;
    this.email = user.email;
    this.request.username = user.username;
  }

  changePassword() {
    if(this.request.oldPassword === this.request.newPassword) {
      this.error = true;
      this.errorMessage = "New password must be different from old password";
      return;
    }
    if(this.request.newPassword != this.newPasswordRepeat) {
      this.error = true;
      this.errorMessage = "New password and repeated password do not match";
      return;
    }
    this.profileService.changePassword(this.request).subscribe({
      next: () => {
        this.passwordChangeSuccess = true;
        this.error = false;
        this.startCountdown();
      },
      error: (err) => {
        if(err.status === 401) {
          this.error = true;
          this.errorMessage = "Incorrect old password";
        }
        else{
          this.error = true;
          this.errorMessage = "Internal server error. Please try again later.";
        }
        console.error(err);
      },
    });
  }

  startCountdown() {
    this.timerId = setInterval(() => {
      this.countdown--;
      if (this.countdown === 0) {
        clearInterval(this.timerId);
        this.redirectToLogin();
      }
    }, 1000);
  }

  redirectToLogin() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
