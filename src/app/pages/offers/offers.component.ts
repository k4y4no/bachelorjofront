import { AsyncPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { OfferService } from '../../_services/offer/offer.service';
import { Observable } from 'rxjs';
import { Offer } from '../../_interfaces/offer';
import { ShoppingCartComponent } from '../../parts/shopping-cart/shopping-cart.component';
import { AuthService } from '../../_services/auth/auth.service';
import { TokenService } from '../../_services/token/token.service';
import { UserService } from '../../_services/user/user.service';
import { User } from '../../_interfaces/user';
import { CartService } from '../../_services/cartService/cart.service';

@Component({
  selector: 'app-offers',
  imports: [
    AsyncPipe,
    ShoppingCartComponent
  ],
  templateUrl: './offers.component.html',
  styleUrl: './offers.component.css'
})
export class OffersComponent implements OnInit{
  private OfferService: OfferService = inject(OfferService)

    authService = inject(AuthService)
    cartService = inject(CartService)
    tokenService = inject(TokenService)
    userService = inject(UserService)
    isAuthenticated: boolean | null = null;
    user$!: Observable<User>;
    idUser!: number | null;


  offers$!: Observable<Offer[]>;

  constructor(){
      this.isAuthenticated = this.authService.isAuthenticated();
      this.idUser = this.tokenService.getIdSubToken(this.authService.getToken())
      console.log(this.idUser)
  }


  ngOnInit(): void {
        this.offers$ = this.OfferService.getAllOffers()
        if(this.idUser != null) {
            this.user$ = this.userService.getUserById(this.idUser)
        }
    }

  addToCart(offer: Offer) {
    this.cartService.addToCart(offer);
  }
}
