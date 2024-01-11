import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductComponent } from './components/product/product.component';
import { ListProductsComponent } from './pages/list-products/list-products.component';
import {MatButtonModule} from '@angular/material/button';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { HomeComponent } from './pages/home/home.component';


@NgModule({
  declarations: [
    ProductComponent,
    ListProductsComponent,
    ProductDetailComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MatButtonModule,
    SharedModule
  ]
})
export class ProductsModule { }
