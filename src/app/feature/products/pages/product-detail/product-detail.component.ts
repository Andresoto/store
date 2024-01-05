import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '@core/models/product.model';
import { ProductService } from '@shared/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {

  private route = inject(ActivatedRoute);
  private productService = inject(ProductService);

  product: Product | null = null;
  mainImage: string = '';

  ngOnInit() {
    this.route.params.subscribe( params => {
      const productId = params['id'];
      this.getProduct(productId);
    })
  }

  getProduct(id: string) {
    this.productService.getOneProduct(id)
    .subscribe({
      next: (product) => {
        this.product = product;
        if (product.images.length > 0) {
          this.mainImage = product.images[0];
        }
      },
      error: () => {
        console.log('error');
      }
    })
  }

  changeImg(newImg: string) {
    this.mainImage = newImg;
  }
}
