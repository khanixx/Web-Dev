import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list';
import { ProductService } from './services/product.service';
import { Category } from './models/category.model';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']

})
export class App implements OnInit {

  categories = [
    { id: 1, name: 'Electronics' },
    { id: 2, name: 'Lifestyle & Audio' },
    { id: 3, name: 'Memes & Fun' },
    { id: 4, name: 'Stationery' }
  ];
  products: Product[] = [];
  selectedCategory: Category | null = null;
  filteredProducts: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.categories = this.productService.getCategories();
    this.products = this.productService.getProducts();
  }

  selectCategory(category: Category) {
    this.selectedCategory = category;
    this.filteredProducts = this.products.filter(p => p.categoryId === category.id);
  }
}
