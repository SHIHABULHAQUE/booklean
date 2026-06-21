import { Component, ChangeDetectionStrategy, signal, OnInit, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { filter, take } from 'rxjs';
import { ThemeService } from './services/theme.service';
import { TranslationService } from './services/translation.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class App implements OnInit {
  protected readonly title = signal('booklean');
  protected readonly showLaunchLoader = signal(true);
  protected readonly launchExiting = signal(false);
  private router = inject(Router);
  private platformId = inject(PLATFORM_ID);
  private themeService = inject(ThemeService);
  private translationService = inject(TranslationService);
  private launchCloseScheduled = false;

  ngOnInit() {
    this.translationService.init();
    if (isPlatformBrowser(this.platformId)) {
      this.router.events.pipe(
        filter(event => event instanceof NavigationEnd),
        take(1)
      ).subscribe(() => this.scheduleLaunchClose());

      setTimeout(() => this.scheduleLaunchClose(), 2800);

      import('aos').then((AOS: any) => {
        // Handle Vite chunking dynamic import differences between module types
        const aosPlugin = AOS && AOS.default ? AOS.default : AOS;

        // Initialize AOS
        aosPlugin.init({
          duration: 1000,
          easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
          once: true,
          offset: 100,
          disableMutationObserver: false,
          debounceDelay: 50,
          throttleDelay: 99
        });

        // Refresh AOS on route changes for dynamically loaded components
        this.router.events.pipe(
          filter(event => event instanceof NavigationEnd)
        ).subscribe(() => {
          setTimeout(() => {
            aosPlugin.refresh();
          }, 100);
        });
      });
    }
  }

  private scheduleLaunchClose() {
    if (this.launchCloseScheduled) return;
    this.launchCloseScheduled = true;

    setTimeout(() => {
      this.launchExiting.set(true);
    }, 1500);

    setTimeout(() => {
      this.showLaunchLoader.set(false);
    }, 2200);
  }
}

