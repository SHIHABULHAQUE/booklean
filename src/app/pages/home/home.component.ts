import { Component, ChangeDetectionStrategy, AfterViewInit, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../../components/footer/footer.component';
import { BookingModalService } from '../../services/booking-modal.service';
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, FooterComponent, TranslateModule],

  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements AfterViewInit {
  currentSlide = 0;
  activeFaq: number | null = null;

  constructor(
    private cdr: ChangeDetectorRef,
    private bookingService: BookingModalService
  ) { }

  openBookingModal(event: Event) {
    event.preventDefault();
    this.bookingService.open();
  }

  ngAfterViewInit() {
    if (typeof window !== "undefined") {
      this.startAutoSlide();
      this.installFaqToggle();
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

  private installFaqToggle() {
    (window as any).toggleFAQ = (button: HTMLElement) => {
      const item = button.closest('.faq-item') as HTMLElement | null;
      const answer = item?.querySelector('.faq-a') as HTMLElement | null;
      const arrow = button.querySelector('.faq-arrow') as HTMLElement | null;
      if (!item || !answer) return;

      const shouldOpen = answer.style.display !== 'block';

      document.querySelectorAll<HTMLElement>('#faq-list .faq-a').forEach((panel) => {
        panel.style.display = 'none';
      });
      document.querySelectorAll<HTMLElement>('#faq-list .faq-item').forEach((faqItem) => {
        faqItem.classList.remove('faq-open');
      });
      document.querySelectorAll<HTMLElement>('#faq-list .faq-q').forEach((faqButton) => {
        faqButton.classList.remove('faq-open');
        faqButton.style.background = 'var(--white)';
        faqButton.style.color = 'var(--navy)';
      });
      document.querySelectorAll<HTMLElement>('#faq-list .faq-arrow').forEach((faqArrow) => {
        faqArrow.textContent = '+';
        faqArrow.style.transform = 'rotate(0deg)';
      });

      if (shouldOpen) {
        item.classList.add('faq-open');
        button.classList.add('faq-open');
        answer.style.display = 'block';
        button.style.background = 'linear-gradient(135deg, #051C2A 0%, #004FE1 100%)';
        button.style.color = '#FFFFFF';
        if (arrow) {
          arrow.textContent = '-';
          arrow.style.transform = 'rotate(180deg)';
        }
      }
    };
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


}
