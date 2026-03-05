import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AlbumService } from '../../services/album.service';
import { FavoritesService } from '../../services/favorites.service';
import { TitleOverrideService } from '../../services/title-override.service';
import { Album } from '../../models/album.model';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './album-detail.component.html'
})
export class AlbumDetailComponent implements OnInit, OnDestroy {
  album: Album | null = null;
  editTitle = '';
  loading = true;
  saved = false;
  isFavorite = false;

  private favSub!: Subscription;

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private albumService: AlbumService,
      private favoritesService: FavoritesService,
      private titleOverrideService: TitleOverrideService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.albumService.getAlbum(id).subscribe(data => {
      const override = this.titleOverrideService.getTitle(data.id);
      if (override) {
        this.album = { ...data, title: override };
        this.editTitle = override;
      } else {
        this.album = data;
        this.editTitle = data.title;
      }
      this.loading = false;
    });

    this.favSub = this.favoritesService.favorites$.subscribe(favs => {
      this.isFavorite = favs.has(id);
    });
  }

  ngOnDestroy(): void {
    this.favSub.unsubscribe();
  }

  toggleFavorite(): void {
    if (!this.album) return;
    this.favoritesService.toggle(this.album.id);
  }

  save(): void {
    if (!this.album) return;
    const updated = { ...this.album, title: this.editTitle };
    this.albumService.updateAlbum(updated).subscribe(() => {
      this.album = updated;
      this.titleOverrideService.save(updated.id, updated.title);
      this.saved = true;
    });
  }

  goBack(): void {
    this.router.navigate(['/albums']);
  }
}