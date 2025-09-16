import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'jofront';
  isMenuOpen:boolean = false;
  innerWidth: number = 0;

  ngOnInit(): void {
    this.innerWidth = window.innerWidth
    console.log(this.innerWidth)
  }

  toggleMenu(): void{
    if(this.innerWidth > 400){
      return
    }
    this.isMenuOpen = !this.isMenuOpen
    console.log(window.innerWidth)
  }

  @HostListener('window:resize', ['$event'])
  onResize(event:Event) {
    this.innerWidth = window.innerWidth;
        if(this.innerWidth > 400){
          this.isMenuOpen = false
    }
  }
}
