import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getCategories(): Category[] {
    return [
      { id: 1, name: 'Smartphones' },
      { id: 2, name: 'Headphones' },
      { id: 3, name: 'Memas' },
      { id: 4, name: 'Chancery' },
      { id: 5, name: 'Game Consoles' },
      { id: 6, name: 'Laptops' }
    ];
  }

  getProducts(): Product[] {
    return [

      {
        id: 1,
        categoryId: 1,
        likes: 10,
        name: 'Apple iPhone 17 Pro 256Gb orange',
        description: 'The Apple iPhone 17 Pro 256GB embodies innovation and style',
        price: 793269,
        rating: 5.0,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p29/p1e/64464409.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/pfc/p95/64168414.png?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-oranzhevyi-145467625/?c=750000000'
      },
      {
        id: 3,
        categoryId: 1,
        likes: 20,
        name: 'Samsung Galaxy S25 Ultra 5G 12 GB/256 GB',
        description: 'Introducing the Samsung Galaxy S25 Ultra 5G—a smartphone that combines high performance',
        price: 566873,
        rating: 4.8,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p84/p24/20120106.png?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/p84/p24/20120106.png?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/pbc/p24/20120108.png?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/pd8/p24/20120109.png?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/samsung-galaxy-s25-ultra-5g-12-gb-256-gb-chernyi-133435348/?c=750000000'
      },
      {
        id: 5,
        categoryId: 5,
        likes: 500000,
        name: 'PlayStation 5 Slim',
        description: 'Unleash new gaming possibilities with the slim PS5 console design.',
        price: 265000,
        rating: 4.9,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/hf1/h03/84526695677982.jpg?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/hf1/h03/84526695677982.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/pef/p29/78474502.png?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p0b/p2a/78474503.png?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/sony-playstation-5-slim-114696098/?srsltid=AfmBOorCRWVlUYEYdY6IjV71flV-TnleVn9djWEkOMzasGJBvCRdS-FZ'
      },
      {
        id: 6,
        categoryId: 6,
        likes: 0,
        name: 'MacBook Air 13 M1',
        description: 'Apple’s thinnest, lightest notebook, completely transformed by the Apple M1 chip.',
        price: 499990,
        rating: 5.0,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h6f/h69/64010685579294.jpg?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/h6f/h69/64010685579294.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h7a/h65/64010687283230.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h18/h24/64010689642526.jpg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2020-13-3-8-gb-ssd-256-gb-macos-mgn93ru-a-101192123/'
      },
      {
        id: 11,
        categoryId: 1,
        likes: -100,
        name: 'Vivo X200',
        description: 'The Vivo X200 is a powerful and stylish smartphone with advanced technologies and impressive specifications for those who value performance and convenience in every moment.',
        price: 493570,
        rating: 4.8,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/pd4/pcb/31864794.jpg?format=gallery-medium',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/pd4/pcb/31864794.jpg?format=gallery-medium'],
        link: 'https://kaspi.kz/shop/p/vivo-x200-16-gb-512-gb-chernyi-136801062/?c=750000000'
      },

      {
        id: 2,
        categoryId: 2,
        likes: 0,
        name: 'Sony WH-1000XM5',
        description: 'Industry-leading noise canceling headphones with Auto NC Optimizer.',
        price: 134999,
        rating: 4.9,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h9c/h23/65099684020254.jpg?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/h9c/h23/65099684020254.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/hd5/hd0/65099686150174.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/hc7/hde/65099687657502.jpg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/sony-wh-1000xm5-chernyi-105259822/'
      },

      {
        id: 12,
        categoryId: 2,
        likes: 0,
        name: 'Apple AirPods Pro 2',
        description: 'Active Noise Cancellation and adaptive audio.',
        price: 125000,
        rating: 5.0,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=gallery-medium',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/h03/h0e/84108189696030.jpg?format=gallery-medium',
                  'https://resources.cdn-kaspi.kz/img/m/p/h14/h8a/84108189761566.jpg?format=gallery-medium'],
        link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-pro-2nd-generation-with-wireless-magsafe-charging-case-belyi-113677582/?srsltid=AfmBOorH-cO-Gd74bNZF_A5jpRrOsZ42Y7stpZ_RbHuTH4_UqLye1TPV'
      },
      {
        id: 13,
        categoryId: 2,
        likes: 0,
        name: 'Marshall Major IV',
        description: '80+ hours of wireless playtime.',
        price: 65000,
        rating: 4.8,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/pf3/pc1/17680136.jpg?format=gallery-medium',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/pf3/pc1/17680136.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p0f/pc2/17680137.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p2b/pc2/17680138.jpg?format=gallery-medium'],
        link: 'https://kaspi.kz/shop/p/marshall-major-iv-chernyi-102138144/'
      },

      {
        id: 7,
        categoryId: 3,
        likes: 0,
        name: 'Nurlan Saburov',
        description: 'The National Security Committee of Kazakhstan has begun investigations into Nurlan Saburov.',
        price: 200,
        rating: 2.00,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmKZF2JLo8wYV6N4Q3nJfX-8JVbfyX-ItfzQ&s',
        images: [
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmKZF2JLo8wYV6N4Q3nJfX-8JVbfyX-ItfzQ&s',
          'https://i.pinimg.com/736x/7c/92/14/7c9214ab844477dc8e4072e79c95d1f1.jpg',
          'https://www.meme-arsenal.com/memes/0b445235a6ed716670c1d9da8e8918db.jpg'
        ],
        link: 'https://tengrinews.kz/kazakhstan_news/knb-nachal-proverku-po-nurlanu-saburovu-592758/'
      },
      {
        id: 8,
        categoryId: 3,
        likes: 0,
        name: 'Shneine pepe',
        description: 'shneine pepe watafaa',
        price: 777000,
        rating: 4.8,
        image: 'https://click-or-die.ru/app/uploads/2025/12/ganvest.jpg',
        images: [
          'https://click-or-die.ru/app/uploads/2025/12/ganvest.jpg',
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjtcXaxGPBMlWt3rRhs22OLXBmt1DOo2A2kg&s',
          'https://news.store.rambler.ru/img/4e0d99670b4449f1c40fbf19abda7d2f?img-format=auto&img-1-resize=height:400,fit:max&img-2-filter=sharpen'
        ],
        link: 'https://zvuk.com/track/173622954'
      },
      {
        id: 9,
        categoryId: 3,
        likes: 0,
        name: 'wehehe',
        description: '',
        price: 15,
        rating: 7.0,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE53c1y1ryjZw012r72UU4CrPcES5gV3x4CQ&s',
        images: [
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE53c1y1ryjZw012r72UU4CrPcES5gV3x4CQ&s',
        ],
        link: ''
      },
      {
        id: 15,
        categoryId: 3,
        likes: 20000000,
        name: 'Kaspi banka',
        description: 'bankbanakabkbaksnkncsk',
        price: 570,
        rating: 5.0,
        image: 'https://preview.redd.it/send-me-the-most-dank-kazakh-memes-you-seen-i-need-to-v0-4k3zjh4y7cfe1.jpeg?width=902&format=pjpg&auto=webp&s=e729a79f2e5375ba32fb14e51277daacccea1a12',
        images: ['https://preview.redd.it/send-me-the-most-dank-kazakh-memes-you-seen-i-need-to-v0-4k3zjh4y7cfe1.jpeg?width=902&format=pjpg&auto=webp&s=e729a79f2e5375ba32fb14e51277daacccea1a12'],
        link: 'https://kaspi.kz/shop/'
      },
      {
        id: 16,
        categoryId: 3,
        likes: 0,
        name: 'Sabak',
        description: '...',
        price: 1,
        rating: 0.0,
        image: 'https://preview.redd.it/send-me-the-most-dank-kazakh-memes-you-seen-i-need-to-v0-ndy05kijy9yf1.png?width=259&format=png&auto=webp&s=3121995fe1bd96f86b36bec2415e9b0c4f903312',
        images: ['https://preview.redd.it/send-me-the-most-dank-kazakh-memes-you-seen-i-need-to-v0-ndy05kijy9yf1.png?width=259&format=png&auto=webp&s=3121995fe1bd96f86b36bec2415e9b0c4f903312'],
        link: 'https://wsp.kbtu.kz/'
      },

      {
        id: 10,
        categoryId: 4,
        likes: 0,
        name: 'Karandash',
        description: 'HB graphite pencils are an indispensable tool for study, creativity, and office work, providing clear lines and ease of use.',
        price: 10,
        rating: 5,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/hd4/h2d/86490445611038.jpg?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/hd4/h2d/86490445611038.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/hf5/hb1/86490445676574.jpg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/karandash-6304-hb-1-sht-121212641/?c=750000000'
      },
      {
        id: 17,
        categoryId: 4,
        likes: 0,
        name: 'SvetoCopy A4 Paper',
        description: 'Standard white printer paper, 500 sheets.',
        price: 2500,
        rating: 4.9,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p22/p3e/48591647.jpg?format=gallery-medium',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/p22/p3e/48591647.jpg?format=gallery-medium'],
        link: 'https://kaspi.kz/shop/p/sv4-44-5-bumaga-a4-500-sht-matovoe-pokrytie-108810207/?c=750000000'
      },
      {
        id: 18,
        categoryId: 4,
        likes: 0,
        name: 'Obama',
        description: 'Reliable everyday ballpoint pen.',
        price: 10,
        rating: 4.8,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p14/p5b/25040430.png?format=gallery-medium',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/p14/p5b/25040430.png?format=gallery-medium'],
        link: 'https://kaspi.kz/shop/p/ruchka-sharikovaja-obama-ob-12345-1-sht-0-7-mm-tsvet-chernil-sinii-106183439/?c=750000000'
      },
      {
        id: 19,
        categoryId: 4,
        likes: 0,
        name: 'Maped',
        description: 'High-quality synthetic rubber eraser.',
        price: 10,
        rating: 5.0,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h56/h80/86018938044446.jpg?format=gallery-medium',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/h56/h80/86018938044446.jpg?format=gallery-medium'],
        link: 'https://kaspi.kz/shop/p/lastik-maped-technic-duo-511710-1-sht-103885134/?c=750000000'
      },
      {
        id: 20,
        categoryId: 4,
        likes: 0,
        name: 'Notebook',
        description: 'Standard squared notebook.',
        price: 32,
        rating: 4.7,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/pb3/pfb/57454181.jpg?format=gallery-medium',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/p96/pfb/57454182.jpg?format=gallery-medium'],
        link: 'https://kaspi.kz/shop/p/shkol-naja-tetrad-krasnokamsk-012tu13s5-12-l-a5-kletka-mjagkaja-oblozhka-1-sht-108613189/?c=750000000'
      }
    ];
  }
}
