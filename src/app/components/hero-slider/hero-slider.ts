import { Component, ChangeDetectionStrategy, inject, signal, OnInit, OnDestroy } from '@angular/core';
import { RegionDataService } from '../../services/region-data.service';

@Component({
  selector: 'app-hero-slider',
  standalone: true,
  imports: [],
  templateUrl: './hero-slider.html',
  styleUrl: './hero-slider.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroSliderComponent implements OnInit, OnDestroy {
  regionDataService = inject(RegionDataService);

  bgImages = [
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80',
    'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1600&q=80',
    'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600&q=80'
  ];

  slidesText = [
    {
      tag: 'Audit · Tax · Advisory',
      title: 'Beyond Numbers.<br><strong>Building Trust.</strong>',
      desc: 'Partnering with businesses across the UAE to deliver audit, tax, and advisory services that drive real outcomes.'
    },
    {
      tag: 'Corporate Tax · VAT · Transfer Pricing',
      title: 'Navigate Tax with<br><strong>Confidence.</strong>',
      desc: 'Expert tax advisory tailored to UAE regulations, helping you stay compliant and optimise your position.'
    },
    {
      tag: 'Careers at Booklean',
      title: 'Join a Team That<br><strong>Shapes Futures.</strong>',
      desc: 'We\'re hiring exceptional professionals who bring expertise, integrity, and ambition to everything they do.'
    }
  ];

  currentSlide = signal(0);
  private intervalId: any;

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.currentSlide.update(i => (i + 1) % this.slidesText.length);
    }, 6000);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  goToSlide(index: number) {
    this.currentSlide.set(index);
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = setInterval(() => {
        this.currentSlide.update(i => (i + 1) % this.slidesText.length);
      }, 6000);
    }
  }
}
