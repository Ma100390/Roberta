import { RouterLink, RouterModule } from '@angular/router';
import { Component, ElementRef, AfterViewInit } from '@angular/core';
import { CFooterComponent } from "../c-footer/c-footer.component";

@Component({
  selector: 'app-p-home-page',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './p-home-page.component.html',
  styleUrl: './p-home-page.component.css'
})
export class PHomePageComponent implements AfterViewInit {


  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    this.setupHeroContentObservers();
    this.setupH1Observer();
  }

  private setupHeroContentObservers(): void {
    const heroContents = this.el.nativeElement.querySelectorAll('.hero-content2');
    const heroContent2 = this.el.nativeElement.querySelector('.hero-content'); // Seleziona il secondo contenitore

    heroContents.forEach((heroContent: HTMLElement) => {
      const blockquoteElement = heroContent.querySelector('blockquote') as HTMLQuoteElement | null;

      if (blockquoteElement) {
        const heroObserver = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                heroContent.classList.add('visible'); // Aggiungi classe per l'animazione
                blockquoteElement.classList.add('visible'); // Aggiungi classe per il blockquote
                heroObserver.unobserve(heroContent); // Rimuovi l'osservazione

                // Aggiungi la classe visible al secondo contenitore
                if (heroContent2) {
                  heroContent2.classList.add('visible');
                }
              }
            });
          },
          { threshold: 0.1 }
        );

        heroObserver.observe(heroContent);
      }
    });
  }

  private setupH1Observer(): void {
    const h1Element = this.el.nativeElement.querySelector('h1');

    const h1Observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            h1Element.classList.add('visible'); // Aggiungi classe per l'animazione
            h1Observer.unobserve(h1Element);
          }
        });
      },
      { threshold: 0.1 }
    );

    h1Observer.observe(h1Element);
  }
}