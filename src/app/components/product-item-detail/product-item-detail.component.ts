import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ReadDataService } from 'src/app/services/read-data.service';
import { Product } from '../../model/product.types';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {
   products : Product[]=[];
   product : Product[]=[];
   _id:string ="";

  //public protected:Product;
  // product: Product = {id:0,name:"",price:0,description:"",url:""};
  constructor(private readDataService: ReadDataService , private route: ActivatedRoute,
    ) {

  }

  ngOnInit(): void {

    this._id = this.route.snapshot.paramMap.get('id') || "";


    // this.route.queryParams.subscribe(params => {
    //   this._id = params['id'];
    // });

  //  var r_id :number = parseInt(this._id)

console.log(this._id)
  this.getProductById(parseInt(this._id) )

  }

 public getProductById (id:number){

    this.readDataService.getProducts().subscribe(data => {
      this.products = data;

      this.product = this.products.filter(p=>p.id == id)


    });
  }

}
