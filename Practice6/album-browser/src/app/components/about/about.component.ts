import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  template: `
    <div class="container">
      <h1>About</h1>
      <p><strong>App:</strong> Album Browser</p>
      <p><strong>Student:</strong> Abylaikhan</p>
      <p><strong>Course:</strong> Webka</p>
      <p><strong>Lab:</strong> Lab 6 - Angular SPA</p>
      <br>
      <p>This application uses Angular 17 with routing, HttpClient, and RxJS to 
         interact with the JSONPlaceholder REST API.</p>
    </div>
  `
})
export class AboutComponent {}
