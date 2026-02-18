import { Component, Input, OnInit } from '@angular/core';
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
  @Input() product!: Product;

  currentImage: string = '';

  ngOnInit() {
    // Initialize the gallery with the main image
    this.currentImage = this.product.image;
  }

  setGalleryImage(imageUrl: string) {
    this.currentImage = imageUrl;
  }

  shareProduct() {
    const productUrl = encodeURIComponent(this.product.link);
    const message = encodeURIComponent(`Check out this product: ${this.product.name}`);
    const telegramUrl = `https://t.me/share/url?url=${productUrl}&text=${message}`;

    window.open(telegramUrl, '_blank');
  }

  get stars() {
    return Array(Math.round(this.product.rating)).fill(0);
  }
}
