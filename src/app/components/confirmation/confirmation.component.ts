import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';


@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  _name:string='';
  cartTotals : number = 0 ;


  constructor(private router :ActivatedRoute) {

   }

  ngOnInit(): void {

    this.router.queryParams.subscribe(params => {
      this._name = params['_name'];
      this.cartTotals = params['cartTotals'];
    });
  }

}
