import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

const STORAGE_KEY = 'favoriteAlbums';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private favoritesSubject = new BehaviorSubject<Set<number>>(this.loadFromStorage());

  favorites$ = this.favoritesSubject.asObservable();

  private loadFromStorage(): Set<number> {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return new Set();
    return new Set(JSON.parse(stored) as number[]);
  }

  private save(favorites: Set<number>): void {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...favorites]));
    this.favoritesSubject.next(new Set(favorites));
  }

  isFavorite(id: number): boolean {
    return this.favoritesSubject.value.has(id);
  }

  toggle(id: number): void {
    const current = new Set(this.favoritesSubject.value);
    if (current.has(id)) {
      current.delete(id);
    } else {
      current.add(id);
    }
    this.save(current);
  }

  getCount(): number {
    return this.favoritesSubject.value.size;
  }
}
