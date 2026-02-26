import { Product } from '../models/product.model';

export const products: Product[] = [
  // ==========================================
  // КАТЕГОРИЯ 1: Гаджеты (categoryId: 1)
  // Твои товары: iPhone, Samsung S25, PS5, MacBook
  // ==========================================
  {
    id: 1,
    categoryId: 1,
    likes: 0,
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
    link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-oranzhevyi-145467625/?c=750000000',
    isFavorite: false
  },
  {
    id: 3,
    categoryId: 1,
    likes: 0,
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
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-s25-ultra-5g-12-gb-256-gb-chernyi-133435348/?c=750000000',
    isFavorite: false
  },
  {
    id: 5,
    categoryId: 1,
    likes: 0,
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
    link: 'https://kaspi.kz/shop/p/sony-playstation-5-slim-114696098/?srsltid=AfmBOorCRWVlUYEYdY6IjV71flV-TnleVn9djWEkOMzasGJBvCRdS-FZ',
    isFavorite: false
  },
  {
    id: 6,
    categoryId: 1,
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
    link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2020-13-3-8-gb-ssd-256-gb-macos-mgn93ru-a-101192123/',
    isFavorite: false
  },
  {
    id: 11,
    categoryId: 1,
    likes: 0,
    name: 'Apple iPad 10.9 2022',
    description: 'Colorful and capable iPad for everyday tasks.',
    price: 230000,
    rating: 4.8,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h3c/h9f/64893706174494.jpg?format=gallery-medium',
    images: ['https://resources.cdn-kaspi.kz/img/m/p/h3c/h9f/64893706174494.jpg?format=gallery-medium'],
    link: 'https://kaspi.kz/shop/p/apple-ipad-2022-wi-fi-10-9-djuim-4-gb-64-gb-serebristyi-107276534/',
    isFavorite: false
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
    link: 'https://kaspi.kz/shop/p/sony-wh-1000xm5-chernyi-105259822/',
    isFavorite: false
  },
  {
    id: 4,
    categoryId: 2,
    likes: 0,
    name: 'Dyson Airwrap Complete Long',
    description: 'Curl. Shape. Smooth and hide flyaways. With no extreme heat.',
    price: 329000,
    rating: 5.0,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h99/h1a/82486900391966.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h99/h1a/82486900391966.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h86/hcd/82486900588574.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h64/h8b/82486900785182.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/dyson-airwrap-complete-long-hs05-stailer-oranzhevyi-112309948/?srsltid=AfmBOoqOyjAxonjgGQW0wQUQ51Y5Z-jeyGnL8J7xf8vy6BRSJ_fkBn0X',
    isFavorite: false
  },
  {
    id: 12,
    categoryId: 2,
    likes: 0,
    name: 'Apple AirPods Pro 2',
    description: 'Active Noise Cancellation and adaptive audio.',
    price: 125000,
    rating: 5.0,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h03/h0e/64440570511390.jpg?format=gallery-medium',
    images: ['https://resources.cdn-kaspi.kz/img/m/p/h03/h0e/64440570511390.jpg?format=gallery-medium'],
    link: 'https://kaspi.kz/shop/p/apple-airpods-pro-2-with-magsafe-type-c-belyi-113677582/',
    isFavorite: false
  },
  {
    id: 13,
    categoryId: 2,
    likes: 0,
    name: 'Marshall Major IV',
    description: '80+ hours of wireless playtime.',
    price: 65000,
    rating: 4.8,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h22/h97/63944073314334.jpg?format=gallery-medium',
    images: ['https://resources.cdn-kaspi.kz/img/m/p/h22/h97/63944073314334.jpg?format=gallery-medium'],
    link: 'https://kaspi.kz/shop/p/marshall-major-iv-chernyi-102138144/',
    isFavorite: false
  },
  {
    id: 14,
    categoryId: 2,
    likes: 0,
    name: 'Yandex Station Lite',
    description: 'Smart speaker with voice assistant Alice.',
    price: 25000,
    rating: 4.7,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/ha6/h56/64219665629214.jpg?format=gallery-medium',
    images: ['https://resources.cdn-kaspi.kz/img/m/p/ha6/h56/64219665629214.jpg?format=gallery-medium'],
    link: 'https://kaspi.kz/shop/p/jandeks-stantsija-lait-fioletovyi-101892182/',
    isFavorite: false
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
    link: 'https://tengrinews.kz/kazakhstan_news/knb-nachal-proverku-po-nurlanu-saburovu-592758/',
    isFavorite: false
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
    link: 'https://zvuk.com/track/173622954',
    isFavorite: false
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
    link: '',
    isFavorite: false
  },
  {
    id: 15,
    categoryId: 3,
    likes: 0,
    name: 'UNO Card Game',
    description: 'Classic family card game.',
    price: 2500,
    rating: 5.0,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h9f/ha4/63816578039838.jpg?format=gallery-medium',
    images: ['https://resources.cdn-kaspi.kz/img/m/p/h9f/ha4/63816578039838.jpg?format=gallery-medium'],
    link: 'https://kaspi.kz/shop/p/uno-kartochnaja-mattel-w2087-100223018/',
    isFavorite: false
  },
  {
    id: 16,
    categoryId: 3,
    likes: 0,
    name: 'Jenga Classic',
    description: 'Block stacking game.',
    price: 5000,
    rating: 4.9,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h35/he5/63777770864670.jpg?format=gallery-medium',
    images: ['https://resources.cdn-kaspi.kz/img/m/p/h35/he5/63777770864670.jpg?format=gallery-medium'],
    link: 'https://kaspi.kz/shop/p/dzhenga-klassicheskaja-hasbro-a2120-100223023/',
    isFavorite: false
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
    link: 'https://kaspi.kz/shop/p/karandash-6304-hb-1-sht-121212641/?c=750000000',
    isFavorite: false
  },
  {
    id: 17,
    categoryId: 4,
    likes: 0,
    name: 'SvetoCopy A4 Paper',
    description: 'Standard white printer paper, 500 sheets.',
    price: 2500,
    rating: 4.9,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hb1/h3f/63765181759518.jpg?format=gallery-medium',
    images: ['https://resources.cdn-kaspi.kz/img/m/p/hb1/h3f/63765181759518.jpg?format=gallery-medium'],
    link: 'https://kaspi.kz/shop/p/bumaga-svetocopy-classic-a4-500-l-100008518/',
    isFavorite: false
  },
  {
    id: 18,
    categoryId: 4,
    likes: 0,
    name: 'BIC Round Stic Blue Pen',
    description: 'Reliable everyday ballpoint pen.',
    price: 150,
    rating: 4.8,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h90/hb3/63868725821470.jpg?format=gallery-medium',
    images: ['https://resources.cdn-kaspi.kz/img/m/p/h90/hb3/63868725821470.jpg?format=gallery-medium'],
    link: 'https://kaspi.kz/shop/p/ruchka-sharikovaja-bic-round-stic-classic-sinjaja-100224673/',
    isFavorite: false
  },
  {
    id: 19,
    categoryId: 4,
    likes: 0,
    name: 'Milan Eraser',
    description: 'High-quality synthetic rubber eraser.',
    price: 200,
    rating: 5.0,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hbd/h6f/63851574591518.jpg?format=gallery-medium',
    images: ['https://resources.cdn-kaspi.kz/img/m/p/hbd/h6f/63851574591518.jpg?format=gallery-medium'],
    link: 'https://kaspi.kz/shop/p/lastik-milan-430-100980552/',
    isFavorite: false
  },
  {
    id: 20,
    categoryId: 4,
    likes: 0,
    name: 'Notebook 48 pages',
    description: 'Standard squared notebook.',
    price: 300,
    rating: 4.7,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hd3/h5b/64380963323934.jpg?format=gallery-medium',
    images: ['https://resources.cdn-kaspi.kz/img/m/p/hd3/h5b/64380963323934.jpg?format=gallery-medium'],
    link: 'https://kaspi.kz/shop/p/tetrad-kletka-48-l-100225679/',
    isFavorite: false
  }
];
