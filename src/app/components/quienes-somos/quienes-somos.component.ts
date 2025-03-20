import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-quienes-somos',
  standalone: false,
  templateUrl: './quienes-somos.component.html',
  styleUrl: './quienes-somos.component.scss'
})
export class QuienesSomosComponent {
  @ViewChild('logo') logo!: ElementRef<HTMLImageElement>;

  ngAfterViewInit() {
    // Wait for the logo to load
    this.logo.nativeElement.onload = () => {
      const logoWidth = this.logo.nativeElement.width;
      const logoHeight = this.logo.nativeElement.height;

      // Apply the logo's dimensions to the card
      const card = document.querySelector('.about-card') as HTMLElement;
      if (card) {
        card.style.width = `${logoWidth}px`;
        card.style.height = `${logoHeight}px`;
      }
    };
  }
}
