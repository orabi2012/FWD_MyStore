import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../model/product.types';

@Injectable({
  providedIn: 'root'
})
export class ReadDataService {
  product_list : Product[]=[];

  constructor(private http: HttpClient) {
    this.getProducts().subscribe(data => {
      this.product_list = data;

      //console.log(data);
  });
  }

//   public getJSON(): Observable<Product[]> {

//      return this.http.get<Product[]>('../../assets/data.json');

// }

public getProducts(): Observable<Product[]> {
  return this.http.get<Product[]>('../../assets/data.json');
}







}
