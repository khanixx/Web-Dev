import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from '../product-item/product-item';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css']
})
export class ProductListComponent {
  @Input() products: Product[] = []; // Используем @Input(), чтобы массив можно было мутировать при удалении

  onProductDeleted(productId: number) {
    this.products = this.products.filter(p => p.id !== productId);
  }
}
