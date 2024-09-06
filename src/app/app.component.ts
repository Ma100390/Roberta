import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CNavbarComponent } from './c-navbar/c-navbar.component';
import { PHomePageComponent } from './p-home-page/p-home-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CNavbarComponent,PHomePageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
