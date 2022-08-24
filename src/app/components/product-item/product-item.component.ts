import { Component, OnInit, Input,Output } from '@angular/core';
import { Product } from '../../model/product.types';
import { CartService } from 'src/app/services/cart.service';
import { CartItem } from 'src/app/model/cart-item';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() product: Product;

  @Output() Qty : number=1 ;

  cartitem : CartItem = {itemId:0,name:"",price:0,Qty:0,url:""};

  constructor(
    private cartService : CartService
  ) {
    this.product={  id: 0,
      name: "",
      price: 0,
      url: "",
      description:""};


   }

  ngOnInit(): void {
  }
public show_detail(p:Product){

  console.log(p.name)
}

addToCart(product : Product , Qty :number){


this.cartitem = {itemId:product.id! ,name:product.name,price:product.price,Qty:Qty,url:product.url }

this.cartService.addToCart(this.cartitem)



}
}
