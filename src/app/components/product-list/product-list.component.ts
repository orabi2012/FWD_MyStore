import { Component, OnInit } from '@angular/core';
import { ReadDataService } from 'src/app/services/read-data.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private readDataService: ReadDataService) { }

  ngOnInit(): void {
    console.log(this.readDataService.product_list)
  }

}
