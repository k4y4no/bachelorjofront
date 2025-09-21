import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataGames, Game } from '../../_interfaces/game';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private http = inject(HttpClient)
  readonly url = 'http://127.0.0.1:8000/game/'

  constructor() { }

  getAllGames (): Observable<Game[]> {
    return this.http.get<Game[]>(this.url)
  }
}
