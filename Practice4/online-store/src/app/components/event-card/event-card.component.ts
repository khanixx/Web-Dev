import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Event } from '../../models/event.model';

@Component({
  selector: 'app-event-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './event-card.component.html',
  styleUrl: './event-card.component.css'
})
export class EventCardComponent implements OnInit {
  @Input() event!: Event;

  selectedImage: string = '';
  showGallery: boolean = false;
  currentIndex: number = 0;

  ngOnInit() {
    this.selectedImage = this.event.image;
  }

  selectImage(img: string, index: number) {
    this.selectedImage = img;
    this.currentIndex = index;
  }

  openGallery() {
    this.showGallery = true;
  }

  closeGallery() {
    this.showGallery = false;
  }

  prevImage() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.event.images.length - 1;
    }
    this.selectedImage = this.event.images[this.currentIndex];
  }

  nextImage() {
    if (this.currentIndex < this.event.images.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
    this.selectedImage = this.event.images[this.currentIndex];
  }

  shareWhatsApp() {
    const text = encodeURIComponent('Check out this event: ' + this.event.name + ' ' + this.event.link);
    window.open('https://wa.me/?text=' + text, '_blank');
  }

  shareTelegram() {
    const url = encodeURIComponent(this.event.link);
    const text = encodeURIComponent(this.event.name);
    window.open('https://t.me/share/url?url=' + url + '&text=' + text, '_blank');
  }

  getStars(rating: number): string {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars += '★';
      } else {
        stars += '☆';
      }
    }
    return stars;
  }
}
