import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-c-navbar',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './c-navbar.component.html',
  styleUrl: './c-navbar.component.css'
})
export class CNavbarComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}

