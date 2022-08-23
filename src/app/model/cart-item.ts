export class CartItem {
 public cartItemId?:number=0;
 public  itemId: number =0;
 public name: string ="";
 public price: number =0;
 public Qty:number =0;
 public url: string="";

 constructor( cartItemId?:number,
    itemId: number =0,
   name: string ="",
   price: number =0,
   Qty:number =0,
   url: string=""){
    this.cartItemId = cartItemId;
    this.name = name;
    this.price = price;
    this.Qty = Qty;
    this.url = url
 }
}
