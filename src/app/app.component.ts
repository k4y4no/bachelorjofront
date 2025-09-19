import { CommonModule } from '@angular/common';
import { Component, HostListener, inject, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterModule, Event } from '@angular/router';
import { AuthService } from './_services/auth/auth.service';
import { TokenService } from './_services/token/token.service';

@Component({
  selector: 'app-root',
  imports: [RouterModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  router = inject(Router)
  authService = inject(AuthService)
  tokenService = inject(TokenService)
  title = 'jofront';
  isMenuOpen:boolean = false;
  innerWidth: number = 0;
  isAuthenticated: boolean | null = null;
  isAdmin: boolean | null = null;
  logMenu: string = "login"
  profileOn: string = "register"

  constructor(){
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.toggleMenu()
        this.isAuthenticated = this.authService.isAuthenticated();
        this.isAdmin = this.authService.isAdmin(this.tokenService.getRoleToken(this.authService.getToken()))
        this.logMenu = this.isAuthenticated ? "logout":"login"
        if(this.isAuthenticated) {
          this.profileOn = this.isAdmin ? "dash":"profile"
        } else {
          this.profileOn = "register"
        }
        console.log(this.isAuthenticated)
        console.log(this.isAdmin)

      }
    })
  }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth
    console.log(this.innerWidth)
  }

  toggleMenu(): void{
    if(this.innerWidth > 400){
      return
    }
    this.isMenuOpen = !this.isMenuOpen

  }

  loggingOut(){
    this.authService.logout();
    this.router.navigate(['login'])
  }

  @HostListener('window:resize', ['$event'])
  onResize(event:Event) {
    this.innerWidth = window.innerWidth;
        if(this.innerWidth > 400){
          this.isMenuOpen = false
    }
  }
}
