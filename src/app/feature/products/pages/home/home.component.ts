import { Component } from '@angular/core';
import { Category } from '@core/models/category.model';
import { CategoryService } from '@shared/services/category.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  categories: Category[] = []
  constructor(
    private categoryService: CategoryService
  ) {}
  
  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.categoryService.getAll()
    .subscribe({
      next: (resp) => {
        this.categories = resp;
        console.log(this.categories);
      }
    })
  }
}
