import { Component, OnInit,Input } from '@angular/core';
import { CartItem } from 'src/app/model/cart-item';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() cartitem: CartItem;


  constructor() {
    this.cartitem = {
      itemId:0,name:"",price:0,Qty:0,url:"",cartItemId:0
    }
   }

  ngOnInit(): void {
  }

}
