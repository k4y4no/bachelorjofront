import { Component, inject, OnInit } from '@angular/core';
import { DataGames, Game } from '../../_interfaces/game';
import { Observable } from 'rxjs';
import { GameService } from '../../_services/game/game.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [
    AsyncPipe
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  private gameService: GameService = inject(GameService)

  games$!: Observable<Game[]>;

  constructor () {

  }


  ngOnInit(): void {
        this.games$ = this.gameService.getAllGames()
    }
}
