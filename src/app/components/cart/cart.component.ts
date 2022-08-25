import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/model/cart-item';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

_name:string='';
email:string='';
phone:string='';
card:string='';



  cartTotals : number = 0 ;
  cartItem :CartItem = {
    cartItemId :0,
  itemId :0,
  name :"",
  price :0,
  Qty  :0 ,
  url :"",
  };

  cartItems : CartItem[] = [] ;
  constructor(
    private cartService : CartService
  ) { }

  ngOnInit(): void {

    this.cartItems = this.cartService.ReadLocalStorage()

   // this.cartTotals = this.cartService.getCartTotal()

    console.log('cart Component'+ this.cartItems)
    this.cartTotals = this.cartService.getCartTotal()
   // this.sum()
  }

  removeItem(cartItem:CartItem):void{

    console.log('Remove' + cartItem.name)

    this.cartItems = this.cartItems.filter(p => p.itemId !== cartItem.itemId )

    this.cartService.removeFromCart(cartItem)

    this.sum()
  }


sum(){
this.cartTotals = this.cartService.getCartTotal();

}

QtyUpdated(Qty : number){
  this.sum()
}


onSubmit(){
  alert(`${this._name}  ${this.cartTotals}`);
}
}
