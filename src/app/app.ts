import { Component, ChangeDetectionStrategy, signal, OnInit, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, DOCUMENT } from '@angular/common';
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
  private document = inject(DOCUMENT);

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.initCustomCursor();
      import('aos').then((AOS: any) => {
        // Handle Vite chunking dynamic import differences between module types
        const aosPlugin = AOS && AOS.default ? AOS.default : AOS;

        // Initialize AOS
        aosPlugin.init({
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
            aosPlugin.refresh();
          }, 100);
        });
      });
    }
  }

  private initCustomCursor() {
    const dot = this.document.getElementById('dot');
    const ring = this.document.getElementById('ring');
    let mx = 0, my = 0, rx = 0, ry = 0;

    this.document.addEventListener('mousemove', (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
    });

    const move = () => {
      rx += (mx - rx) * 0.14;
      ry += (my - ry) * 0.14;
      if (dot) {
        dot.style.left = mx + 'px';
        dot.style.top = my + 'px';
      }
      if (ring) {
        ring.style.left = rx + 'px';
        ring.style.top = ry + 'px';
      }
      requestAnimationFrame(move);
    };
    requestAnimationFrame(move);

    const isInteractive = (target: HTMLElement) => {
      return target.closest('a, button, .btn, [role="button"], input, textarea, select');
    };

    this.document.addEventListener('mouseover', (e: MouseEvent) => {
      if (e.target instanceof HTMLElement && isInteractive(e.target)) {
        if (ring) {
          ring.style.transform = 'translate(-50%, -50%) scale(1.7)';
          ring.style.borderColor = 'rgba(9, 224, 254, .5)';
        }
      }
    });

    this.document.addEventListener('mouseout', (e: MouseEvent) => {
      if (e.target instanceof HTMLElement && isInteractive(e.target)) {
        if (ring) {
          ring.style.transform = 'translate(-50%, -50%) scale(1)';
          ring.style.borderColor = 'rgba(0, 79, 225, .35)';
        }
      }
    });
  }
}
