import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/model/cart-item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItem :CartItem = {
    cartItemId :0,
  itemId :0,
  name :"",
  price :0,
  Qty  :0 ,
  url :"",
  };

  constructor() { }

  ngOnInit(): void {
  }

}
