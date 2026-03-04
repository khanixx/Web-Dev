import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="container">
      <h1>Welcome to Album Browser</h1>
      <p>This app lets you browse albums and their photos from JSONPlaceholder API.</p>
      <br>
      <a routerLink="/albums">
        <button style="background-color: #007bff; color: white; padding: 10px 20px;">
          Browse Albums
        </button>
      </a>
    </div>
  `
})
export class HomeComponent {}
