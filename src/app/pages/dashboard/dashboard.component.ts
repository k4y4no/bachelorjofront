import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  pannel: string = "stat";

  changePannel(pannelName: string) {
    this.pannel = pannelName
  }
}
