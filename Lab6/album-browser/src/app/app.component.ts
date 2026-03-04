import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <nav>
      <a routerLink="/home" routerLinkActive="active-link">Home</a>
      <a routerLink="/albums" routerLinkActive="active-link">Albums</a>
      <a routerLink="/about" routerLinkActive="active-link">About</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {}
