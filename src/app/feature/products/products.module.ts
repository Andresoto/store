import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductComponent } from './components/product/product.component';
import { ListProductsComponent } from './pages/list-products/list-products.component';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    ProductComponent,
    ListProductsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MatButtonModule
  ]
})
export class ProductsModule { }
