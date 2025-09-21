import { computed, Injectable, signal } from '@angular/core';
import { CartItem } from '../../_interfaces/cart-item';
import { Offer } from '../../_interfaces/offer';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems = signal<CartItem[]>([])
  totalAmount = computed(() => this.cartItems().reduce((acc, item) => acc + this.price, 0))
  price: any = 10

  constructor() { }

  addToCart(offer: Offer) {
    this.cartItems.update(items => [...items, {offer, quantity: 1}])
  }


}
