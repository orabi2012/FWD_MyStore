import { Component, OnInit,Input,Output,EventEmitter  } from '@angular/core';
import { CartItem } from 'src/app/model/cart-item';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() cartitem: CartItem;
  @Output() Qty : number=1 ;
  @Output() removeItem :EventEmitter<CartItem> = new EventEmitter;
  @Output() cartTotals :EventEmitter<number> = new EventEmitter;






  constructor( private cartService : CartService) {
    this.cartitem = {
      itemId:0,name:"",price:0,Qty:0,url:"",cartItemId:0
    }
   }

  ngOnInit(): void {
    this.Qty = this.cartitem.Qty;
  }

  updateQty(Qty : number){


    this.cartitem.Qty = this.Qty;

    this.cartService.addToCart(this.cartitem)



    }
  remove(cartItem:CartItem):void{

      this.removeItem.emit(cartItem)

    }

  sum():number{
    return this.cartService.cartTotals
  }
  // removeFromCart(cartItem :CartItem){

  //     this.cartService.removeFromCart(cartItem)
  //   }
}
