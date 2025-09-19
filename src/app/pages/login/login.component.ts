import { Component, inject } from '@angular/core';
import { AuthService } from '../../_services/auth/auth.service';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { UserLogin } from '../../_interfaces/user';
import { Router } from '@angular/router';
import { TokenService } from '../../_services/token/token.service';

@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private fb = inject(FormBuilder)
  private router = inject(Router)
  private authService = inject(AuthService)
  private tokenService = inject(TokenService)

  loginUserForm = this.fb.nonNullable.group({
    email: [''],
    password: ['']
  })

  onSubmit(){

            const user: UserLogin = {...this.loginUserForm.getRawValue()}
            this.authService.login(user).subscribe({
              next: (response) => {
                console.log('Token', response)
                const role: string | null= this.tokenService.getRoleToken(response.access_token)
                if(this.authService.isAdmin(role)){
                  this.router.navigate(['dash'])
                  return
                }
                this.router.navigate(['profile'])
                
              },
              error: (err) => {
                console.error('Error', err)
              }
            })

  }
}
