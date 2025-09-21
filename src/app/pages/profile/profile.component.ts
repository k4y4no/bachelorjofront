import { Component, inject, OnInit } from '@angular/core';
import { TokenService } from '../../_services/token/token.service';
import { AuthService } from '../../_services/auth/auth.service';
import { Observable } from 'rxjs';
import { User } from '../../_interfaces/user';
import { UserService } from '../../_services/user/user.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-profile',
  imports: [
    AsyncPipe
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit{

  authService = inject(AuthService)
  tokenService = inject(TokenService)
  userService = inject(UserService)
  idUser!: number | null;
  isAuthenticated: boolean | null = null;
  user$!: Observable<User>;

  constructor(){
      this.isAuthenticated = this.authService.isAuthenticated();
      this.idUser = this.tokenService.getIdSubToken(this.authService.getToken())
  }

  ngOnInit(): void {
    if(this.idUser != null) {
      this.user$ = this.userService.getUserById(this.idUser)
    }
  }

}
