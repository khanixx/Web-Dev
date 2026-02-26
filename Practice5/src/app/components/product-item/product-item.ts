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
  product = input.required<Product>();
  toggleFavEvent = output<number>();

  currentImage: string = '';
  stars = [1, 2, 3, 4, 5];

  ngOnInit() {
    this.currentImage = this.product().image;
  }

  setGalleryImage(img: string) {
    this.currentImage = img;
  }

  likeProduct() {
    this.product().likes++;
  }

  shareProduct() {
    const url = encodeURIComponent(this.product().link);
    window.open(`https://t.me/share/url?url=${url}&text=Check out this product!`, '_blank');
  }

  deleteProduct() {
    alert('Delete product functionality can be added here.');
  }

  onToggleFavorite() {
    this.toggleFavEvent.emit(this.product().id);
  }
}
