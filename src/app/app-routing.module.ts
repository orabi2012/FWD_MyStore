import { Interpolation } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from '../app/components/product-list/product-list.component'
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ProductItemDetailComponent } from './components/product-item-detail/product-item-detail.component';
import { CartComponent } from './components/cart/cart.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';

const routes: Routes = [{ path: '', component: ProductListComponent },
{ path: 'confirm', component: ConfirmationComponent },
{ path: 'cart', component: CartComponent },
{ path: 'product/:id', component: ProductItemDetailComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
