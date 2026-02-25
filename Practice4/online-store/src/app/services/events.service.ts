import { Injectable } from '@angular/core';
import { Event } from '../models/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  private events: Event[] = [
    {
      id: 1,
      name: 'Holiday show concert',
      description: 'On March 11, the Palace of the Republic invites residents and guests of the city to a grand festive concert. The evening promises to be action-packed: the brightest stars of Kazakhstans pop scene will perform their best hits and leave the audience in a great mood.',
      price: 25000,
      rating: 4.9,
      image: 'https://ticketon.kz/media/upload/62499u45664_1930nauryz-fest.jpeg',
      images: [
      ],
      link: 'https://ticketon.kz/event/nauryz-fest?item_list_name=%D0%9F%D0%BE%D0%BF%D1%83%D0%BB%D1%8F%D1%80%D0%BD%D0%BE%D0%B5&item_list_id=popular&index=1',
      category: 'Concert',
      date: '2025-03-11'
    },
    {
      id: 2,
      name: 'IL Canto «Grande Amore»',
      description: 'Anniversary Program "Grande Amore"\n' +
          'In honor of the most beautiful girls and women of our city, on March 8th, the quartet "Il Canto" presents a special celebratory concert – "Grande Amore"!',
      price: 5000,
      rating: 4.8,
      image: 'https://ticketon.kz/media/upload/63499u57997_il-canto-grande-amore.jpg',
      images: [
      ],
      link: 'https://ticketon.kz/event/il-canto-grande-amore?item_list_name=%D0%9F%D0%BE%D0%BF%D1%83%D0%BB%D1%8F%D1%80%D0%BD%D0%BE%D0%B5&item_list_id=popular&index=2',
      category: 'Concert',
      date: '2025-03-08'
    },
    {
      id: 3,
      name: 'Goat: Dream Big (2026)',
      description: 'Will, a teenage goat, gets the chance of a lifetime to join a professional league and play "zooball."',
      price: 1400,
      rating: 4.7,
      image: 'https://ticketon.kz/files/media/62956u57548_afisha-tiketon--2026-01-23t140016-739.jpg',
      images: [

      ],
      link: 'https://ticketon.kz/event/goat-mechtay-po-krupnomu-2026?item_list_name=%D0%9F%D0%BE%D0%BF%D1%83%D0%BB%D1%8F%D1%80%D0%BD%D0%BE%D0%B5&item_list_id=popular&index=3',
      category: 'Kino',
      date: '2025-02-12'
    },
    {
      id: 4,
      name: '\n' +
          'Exhibition performances by stars of the Milan–Cortina 2026 Olympic Games',
      description: 'Milan Cortina 2026 Olympic Games Stars\' Exhibition Performances',
      price: 8000,
      rating: 4.5,
      image: 'https://ticketon.kz/media/upload/63347u57997_milan-kortina-2026_0.jpg',
      images: [
      ],
      link: 'https://ticketon.kz',
      category: 'Show',
      date: '2025-04-05'
    },
    {
      id: 5,
      name: '\n' +
          'Jay Sean | Nana Darkman',
      description: 'In March, the Palace of the Republic will be transformed into a place where the hits that made us fall in love, dance, and experience the best moments of our lives come to life.',
      price: 10000,
      rating: 4.8,
      image: 'https://ticketon.kz/media/upload/62705u45664_jay-sean-nana-darkman-almaty1533.jpg',
      images: [

      ],
      link: 'https://ticketon.kz/event/jay-sean-nana-darkman-almaty?item_list_name=%D0%9F%D0%BE%D0%BF%D1%83%D0%BB%D1%8F%D1%80%D0%BD%D0%BE%D0%B5&item_list_id=popular&index=5',
      category: 'Concert',
      date: '2025-03-27'
    },
    {
      id: 6,
      name: 'Anton Belyaev and THERR MAITZ in Almaty',
      description: 'On March 17, 2026, a major solo concert by Anton Belyaev and the band THERR MAITZ will take place on the stage of the Palace of the Republic in Almaty.',
      price: 25000,
      rating: 4.7,
      image: 'https://ticketon.kz/media/upload/62017u45664_therr-maitz-almaty-tickets_2444.jpeg',
      images: [
      ],
      link: 'https://ticketon.kz',
      category: 'Theatr',
      date: '2025-03-27'
    },
    {
      id: 7,
      name: 'Deep Purple in Almaty',
      description: 'Deep Purple\'s legendary return to Kazakhstan is the most anticipated rock event of the year!',
      price: 37000,
      rating: 4.5,
      image: 'https://ticketon.kz/media/upload/61799u45664_deep-purple-v-almaty.jpg',
      images: [
          'https://ticketon.kz/media/upload/61799u45664_deep-purple-v-almaty2025511-5.jpeg',
          'https://ticketon.kz/media/upload/61799u45664_deep-purple-v-almaty2025511-6.jpeg',
          'https://ticketon.kz/media/upload/61799u45664_deep-purple-v-almaty2025511-7.jpeg',
          'https://ticketon.kz/media/upload/61799u45664_deep-purple-v-almaty2025511-8.jpeg',
          'https://ticketon.kz/media/upload/61799u45664_deep-purple-v-almaty2025511-10.jpeg'
      ],
      link: 'https://ticketon.kz',
      category: 'Rock',
      date: '2025-04-22'
    },
    {
      id: 8,
      name: 'The World of Bollywood - BN Team Orchestra in Almaty',
      description: 'BN Team Orchestra presents its most vibrant program yet – The World of Bollywood: music from the best Indian films!',
      price: 6000,
      rating: 4.6,
      image: 'https://ticketon.kz/media/upload/47179u57997_mir-bollivuda-almaty.jpg',
      images: [
          'https://ticketon.kz/media/upload/47179u56103_whatsapp-image-2024-08-20-at-11-57-28-4.jpeg',
          'https://ticketon.kz/media/upload/47179u56103_whatsapp-image-2024-08-20-at-11-57-28-3.jpeg',
          'https://ticketon.kz/media/upload/47179u56103_whatsapp-image-2024-08-20-at-11-57-28-2.jpeg'
      ],
      link: 'https://ticketon.kz/en/event/mir-bollivuda-almaty?item_list_name=%D0%9F%D0%BE%D0%BF%D1%83%D0%BB%D1%8F%D1%80%D0%BD%D0%BE%D0%B5&item_list_id=popular&index=8',
      category: 'Orchestra',
      date: '2025-02-22'
    },
    {
      id: 9,
      name: 'Marie Crymbreri in Almaty',
      description: 'On 16 May, the stage of the Astana Congress Centre will host the spectacular show «Who is Mary?»',
      price: 30000,
      rating: 4.9,
      image: 'https://ticketon.kz/media/upload/61854u45664_mari-kraymbreri-v-kz2.jpg',
      images: [
      ],
      link: 'https://ticketon.kz/en/event/mari-kraymbreri-v-almaty?item_list_name=Popular&item_list_id=popular&index=11',
      category: 'Musical',
      date: '2025-05-22'
    },
    {
      id: 10,
      name: 'Elena Vaenga in Almaty',
      description: 'On February 21, 2026, a grand solo concert by one of the brightest, most charismatic, and sincere artists of our time Elena Vaenga will take place on the main stage of the Palace of the Republic!',
      price: 15000,
      rating: 4.4,
      image: 'https://ticketon.kz/media/upload/57378u45664_57378u45664_elena-vaenga-v-almaty-1.jpg',
      images: [

      ],
      link: 'https://ticketon.kz/en/event/elena-vaenga-v-almaty?item_list_name=Popular&item_list_id=popular&index=13',
      category: 'Concert',
      date: '2025-02-21'
    }
  ];

  getEvents(): Event[] {
    return this.events;
  }
}
