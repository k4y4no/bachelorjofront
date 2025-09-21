import { AsyncPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { OfferService } from '../../_services/offer/offer.service';
import { Observable } from 'rxjs';
import { Offer } from '../../_interfaces/offer';

@Component({
  selector: 'app-offers',
  imports: [
    AsyncPipe
  ],
  templateUrl: './offers.component.html',
  styleUrl: './offers.component.css'
})
export class OffersComponent implements OnInit{
  private OfferService: OfferService = inject(OfferService)

  offers$!: Observable<Offer[]>;

  constructor () {

  }


  ngOnInit(): void {
        this.offers$ = this.OfferService.getAllOffers()
    }
}
