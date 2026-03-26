import { Component, ChangeDetectionStrategy, AfterViewInit, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../components/footer/footer.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FooterComponent],

  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements AfterViewInit {
  currentSlide = 0;
  activeFaq: number | null = null;

  constructor(private cdr: ChangeDetectorRef) { }

  ngAfterViewInit() {
    if (typeof window !== "undefined") {
      this.startAutoSlide();
      this.initIntersectionObserver();
    }
  }

  // Slide Logic
  goSlide(n: number) {
    this.currentSlide = n;
    this.cdr.markForCheck();
  }

  private startAutoSlide() {
    setInterval(() => {
      this.currentSlide = (this.currentSlide + 1) % 2;
      this.cdr.markForCheck();
    }, 5500);
  }

  // FAQ Logic
  toggleFaq(index: number) {
    this.activeFaq = this.activeFaq === index ? null : index;
    this.cdr.markForCheck();
  }

  // Service Detail Logic (simplified for brevity, can be expanded)
  toggleDetail(key: string) {
    const el = document.getElementById('svc-detail');
    if (el) {
      el.style.display = 'block';
      // You could update content here if needed
    }
  }

  closeDetail() {
    const el = document.getElementById('svc-detail');
    if (el) el.style.display = 'none';
  }

  // Chat logic
  sendMessage(text: string) {
    // Simplified chat logic for demonstration
    console.log('Sending message:', text);
  }

  private initIntersectionObserver() {
    const revObs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-active');
          revObs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.glass-rect, .benefit-card, .pkg-card, .svc-card, .global-card, .wb-val-card, .faq-item').forEach((el: any) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
      revObs.observe(el);
    });

    const style = document.createElement('style');
    style.innerHTML = '.reveal-active { opacity: 1 !important; transform: translateY(0) !important; }';
    document.head.appendChild(style);
  }
}
