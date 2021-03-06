import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})

export class CartService {
  items = [] //to include the items added to cart

  constructor(
  private http: HttpClient
) { }

  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }


  getShippingPrices() {
  return this.http.get('/assets/shipping.json');
}

  onClickOpenForm(){
    this.openform=true;
    console.log("openform......", this.openform)
    return this.openform;
  }

}