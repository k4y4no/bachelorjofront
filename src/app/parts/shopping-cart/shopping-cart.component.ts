import { Component, inject } from '@angular/core';
import { CartService } from '../../_services/cartService/cart.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-shopping-cart',
  imports: [
    CurrencyPipe
  ],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css'
})
export class ShoppingCartComponent {

  cartService = inject(CartService)

}
