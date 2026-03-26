import { Injectable, PLATFORM_ID, effect, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  readonly isLight = signal(false);
  private readonly platformId = inject(PLATFORM_ID);

  constructor() {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const savedTheme = localStorage.getItem('booklean-theme');
    this.isLight.set(savedTheme === 'light');

    effect(() => {
      const isLight = this.isLight();
      document.body.classList.toggle('theme-light', isLight);
      localStorage.setItem('booklean-theme', isLight ? 'light' : 'dark');
    });
  }

  toggleTheme() {
    this.isLight.update((value) => !value);
  }
}
