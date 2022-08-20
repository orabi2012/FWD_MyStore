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
    this.getJSON().subscribe(data => {
      this.product_list=data;
      console.log(data);
  });
  }

  public getJSON(): Observable<any> {
    return this.http.get('../../assets/data.json');
}
}
