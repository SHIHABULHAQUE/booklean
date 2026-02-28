import { Component, ChangeDetectionStrategy, signal, OnInit, OnDestroy, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-hero-slider',
  standalone: true,
  imports: [],
  templateUrl: './hero-slider.html',
  styleUrl: './hero-slider.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroSliderComponent implements OnInit, OnDestroy {
  private platformId = inject(PLATFORM_ID);

  slides = [
    {
      id: 1,
      title: 'Efficient. Accurate. Strategic.',
      subtitle: 'Financial Engineering For Your Business',
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=2000'
    },
    {
      id: 2,
      title: 'Data-Driven Precision',
      subtitle: 'Unlocking Value Through Advanced Analytics',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000'
    },
    {
      id: 3,
      title: 'Global Compliance',
      subtitle: 'World-Class Expertise in UAE, UK, and India',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000'
    }
  ];

  currentSlide = signal(0);
  private intervalId: any;

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.startSlider();
    }
  }

  ngOnDestroy() {
    this.stopSlider();
  }

  startSlider() {
    if (isPlatformBrowser(this.platformId)) {
      this.intervalId = setInterval(() => {
        this.nextSlide();
      }, 5000);
    }
  }

  stopSlider() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  nextSlide() {
    this.currentSlide.update(curr => (curr + 1) % this.slides.length);
  }

  goToSlide(index: number) {
    this.currentSlide.set(index);
    this.stopSlider();
    this.startSlider();
  }
}
