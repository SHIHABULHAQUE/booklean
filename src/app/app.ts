import { Component, ChangeDetectionStrategy, signal, OnInit, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

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
  private router = inject(Router);
  private platformId = inject(PLATFORM_ID);

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      import('aos').then(AOS => {
        // Initialize AOS
        AOS.init({
          duration: 800,
          easing: 'ease-out-cubic',
          once: true,
          offset: 50
        });

        // Refresh AOS on route changes for dynamically loaded components
        this.router.events.pipe(
          filter(event => event instanceof NavigationEnd)
        ).subscribe(() => {
          setTimeout(() => {
            AOS.refresh();
          }, 100);
        });
      });
    }
  }
}
