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


}
