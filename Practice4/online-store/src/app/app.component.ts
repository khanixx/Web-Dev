import { Component } from '@angular/core';
import { EventListComponent } from './components/event-list/event-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EventListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'online-store';
}
