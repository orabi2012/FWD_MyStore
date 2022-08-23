import { Injectable } from '@angular/core';
import { CartItem } from '../model/cart-item';
import { Cart } from '../model/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {


cart: CartItem[] = [];

  constructor() { }

addToCart(cartItem : CartItem) : void {

  if(this.cart.length == 0){
    this.cart.push(cartItem)
    console.log('Added 1')
    console.log(this.cart)

    return

  }
let x = this.cart.findIndex(item => item.itemId === cartItem.itemId)
console.log(x)
  // let ItemExist   = this.cart.find(item => item.itemId === cartItem.itemId);
  if (x >=0 ){

    // exist
    this.cart[x].Qty = cartItem.Qty
    console.log('Updated')
    console.log(this.cart)


  }else{
    this.cart.push(cartItem)
    console.log('Added')
    console.log(this.cart)

  }
    // for(let i in this.cart){

    //   if (this.cart[i].itemId === cartItem.itemId)
    //   {
    //     this.cart[i].Qty = cartItem.Qty
    //     console.log('Updated')



    // } else if (this.cart[i].itemId === cartItem.itemId) {




    // }


    //   console.log(this.cart)

    // }
  }





}


