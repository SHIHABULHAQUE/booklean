import { Injectable, PLATFORM_ID, effect, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  readonly isLight = signal(true);
  private readonly platformId = inject(PLATFORM_ID);

  constructor() {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    // Permanently lock Light Mode
    this.isLight.set(true);
    document.body.classList.add('theme-light');
    localStorage.setItem('booklean-theme', 'light');
  }

  toggleTheme() {
    // Disabled. Always light.
    this.isLight.set(true);
  }
}
