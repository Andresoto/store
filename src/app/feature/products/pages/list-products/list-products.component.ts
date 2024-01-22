import { Component, inject } from '@angular/core';
import { Category } from '@core/models/category.model';
import { CategoryService } from '@shared/services/category.service';
import { Product } from 'src/app/core/models/product.model';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent {

  products: Product[] = [];
  categories: Category[] = [];

  private productService = inject(ProductService);
  private categoryService = inject(CategoryService);

  ngOnInit() {
    this.getProducts();
    this.getCategories()
  }

  getProducts() {
    this.productService.getAllProducts()
    .subscribe({
      next: (products) => {
        this.products = products;
      },
      error: () => {
        console.log('error');
      }
    })
  }

  getCategories() {
    this.categoryService.getAll()
    .subscribe({
      next: (categories) => {
        this.categories = categories;
      }
    })
  }
}
