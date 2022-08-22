import { Component, OnInit } from '@angular/core';
import { ReadDataService } from 'src/app/services/read-data.service';
import { Product } from '../../model/product.types';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products : Product[]=[];

  constructor(private readDataService: ReadDataService) { }

  ngOnInit(): void {

    this.readDataService.getProducts().subscribe(data => {
      this.products = data;
    });

  }

}
