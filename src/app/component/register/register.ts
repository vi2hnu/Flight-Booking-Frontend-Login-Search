import { Component, inject } from '@angular/core';
import { RegisterModel } from '../../model/register/register-model.model';
import { FormsModule } from '@angular/forms';
import { RegisterService } from '../../service/register/register-service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  registerModel: RegisterModel = new RegisterModel();
  registerService = inject(RegisterService);
  registerError: boolean = false;
  registerSuccess: boolean = false;
  errorMessage: string = '';
  private router = inject(Router);

  register() {
      this.registerService.register(this.registerModel).subscribe(
        (response) => {
          this.registerSuccess = true;
        },
        (error) => {
          this.registerError = true;
          if(error.status === 400) {
            this.errorMessage = 'User already exists. Please try a different username or email.';
          }
          else{
            this.errorMessage = 'Internal Server Error. Please try again later.';
          }
  
        }
      );
  }       


  hidePopUp() {
    this.registerError = false;
  }

  redirectToLogin() {
    this.router.navigate(['/login']);
  }
  
}
