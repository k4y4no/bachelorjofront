import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Offer } from '../../_interfaces/offer';

@Injectable({
  providedIn: 'root'
})
export class OfferService {
  private http = inject(HttpClient)
  readonly url = 'http://127.0.0.1:8000/offer/'

  constructor() { }

  getAllOffers (): Observable<Offer[]> {
    return this.http.get<Offer[]>(this.url)
  }
}