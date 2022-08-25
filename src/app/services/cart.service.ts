import { Injectable } from '@angular/core';
import { CartItem } from '../model/cart-item';
import { Cart } from '../model/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

public cartTotals : number = 0 ;

public cart: CartItem[] = [];

  constructor() {
    this.addToLocalStorage()
   }

addToCart(cartItem : CartItem) : void {

  if(this.cart.length == 0){
    this.cart.push(cartItem)
    console.log('Added 1')
    console.log(this.cart)
   this.addToLocalStorage()
   alert(`${cartItem.name} added to the cart`)
   

    return

  }
let x = this.cart.findIndex(item => item.itemId === cartItem.itemId)
console.log(x)
  // let ItemExist   = this.cart.find(item => item.itemId === cartItem.itemId);
  if (x >=0 ){

    // exist
    this.cart[x].Qty = cartItem.Qty
    alert(`${cartItem.name} : Qty Updated to ${cartItem.Qty}`)

    console.log('Updated')
    console.log(this.cart)


  }else{
    this.cart.push(cartItem)
    console.log('Added')
    console.log(this.cart)
    alert(`${cartItem.name} added to the cart`)


  }
  this.getCartTotal ()
  this.addToLocalStorage()


  }

removeFromCart(cartItem :CartItem):void{
  let index = this.cart.findIndex(item => item.itemId === cartItem.itemId)

    this.cart.splice(index , 1)
    alert(`${cartItem.name} Remove from the cart`)

    localStorage.removeItem('cart')

this.addToLocalStorage()

}

addToLocalStorage(){

  localStorage.setItem('cart', JSON.stringify(this.cart));

  this.ReadLocalStorage()
}

ReadLocalStorage():CartItem[]{

let rData = localStorage.getItem('cart');

this.cart = JSON.parse(rData!)

console.log('cart: ', this.cart );

return this.cart;

}

getCartTotal () : number {

    this.cartTotals = 0
    this.cart.forEach(item => {
      this.cartTotals += (item.Qty * item.price)
    })


  return  this.cartTotals

}
}


