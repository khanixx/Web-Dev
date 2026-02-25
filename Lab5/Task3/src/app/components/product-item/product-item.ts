import { Component, input, output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.html',
  styleUrls: ['./product-item.css']
})
export class ProductItemComponent implements OnInit {
  // НОВЫЙ СИНТАКСИС Angular 17+
  product = input.required<Product>();
  delete = output<number>();

  currentImage: string = '';

  ngOnInit() {
    this.currentImage = this.product().image;
  }

  setGalleryImage(imageUrl: string) {
    this.currentImage = imageUrl;
  }

  shareProduct() {
    const productUrl = encodeURIComponent(this.product().link);
    const message = encodeURIComponent(`Check out this product: ${this.product().name}`);
    const telegramUrl = `https://t.me/share/url?url=${productUrl}&text=${message}`;
    window.open(telegramUrl, '_blank');
  }

  likeProduct() {
    this.product().likes++;
  }

  deleteProduct() {
    this.delete.emit(this.product().id);
  }

  get stars() {
    return Array(Math.round(this.product().rating)).fill(0);
  }
}
