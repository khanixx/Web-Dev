import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { AlbumService } from '../../services/album.service';
import { FavoritesService } from '../../services/favorites.service';
import { TitleOverrideService } from '../../services/title-override.service';
import { Album } from '../../models/album.model';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit, OnDestroy {
  albums: Album[] = [];
  loading = true;
  showOnlyFavorites = false;
  favorites = new Set<number>();

  private favSub!: Subscription;

  constructor(
      private albumService: AlbumService,
      private favoritesService: FavoritesService,
      private titleOverrideService: TitleOverrideService,
      private router: Router
  ) {}

  ngOnInit(): void {
    this.albumService.getAlbums().subscribe(data => {
      const overrides = this.titleOverrideService.getAll();
      this.albums = data.map((a: Album) =>
          overrides[a.id] ? { ...a, title: overrides[a.id] } : a
      );
      this.loading = false;
    });

    this.favSub = this.favoritesService.favorites$.subscribe(favs => {
      this.favorites = favs;
    });
  }

  ngOnDestroy(): void {
    this.favSub.unsubscribe();
  }

  get filteredAlbums(): Album[] {
    if (!this.showOnlyFavorites) return this.albums;
    return this.albums.filter(a => this.favorites.has(a.id));
  }

  get favCount(): number {
    return this.favorites.size;
  }

  isFavorite(id: number): boolean {
    return this.favorites.has(id);
  }

  toggleFavorite(event: Event, id: number): void {
    event.stopPropagation();
    this.favoritesService.toggle(id);
  }

  toggleFilter(): void {
    this.showOnlyFavorites = !this.showOnlyFavorites;
  }

  goToAlbum(id: number): void {
    this.router.navigate(['/albums', id]);
  }

  deleteAlbum(event: Event, id: number): void {
    event.stopPropagation();
    this.albumService.deleteAlbum(id).subscribe(() => {
      this.albums = this.albums.filter(a => a.id !== id);
    });
  }
}