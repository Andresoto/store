import { Component, inject } from '@angular/core';
import { Product } from 'src/app/shared/models/product.model';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent {

  products: Product[] = [];

  private productService = inject(ProductService);

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.getAllProducts()
    .subscribe({
      next: (products) => {
        this.products = products;
        console.log(this.products);
      },
      error: () => {
        console.log('error');
      }
    })
  }
}
