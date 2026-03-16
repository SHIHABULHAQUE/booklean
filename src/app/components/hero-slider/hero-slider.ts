import { Component, ChangeDetectionStrategy, inject, signal, OnInit, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RegionDataService } from '../../services/region-data.service';

@Component({
  selector: 'app-hero-slider',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './hero-slider.html',
  styleUrl: './hero-slider.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroSliderComponent implements OnInit, OnDestroy {
  regionDataService = inject(RegionDataService);

  bgImages = [
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80', // Financial Dashboard
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80', // Analysis
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80'  // Reliable Fallback Chart
  ];

  featureCards = [
    {
      label: 'AI RECONCILIATION',
      title: 'Automated Ledger',
      items: [
        { icon: '📄', title: 'AWS Web Services', date: 'Oct 12 · Invoice #402', amt: '-$1,240.00', status: 'Matched', statusClass: 'matches', positive: false },
        { icon: '💳', title: 'Stripe Payout', date: 'Oct 11 · Deposit', amt: '+$12,450.00', status: 'Reconciled', statusClass: 'matches', positive: true },
        { icon: '🧾', title: 'DHA Vendor Fee', date: 'Oct 10 · Receipt scan', amt: '-$340.00', status: 'Processing', statusClass: 'processing', positive: false }
      ],
      chat: "I've automatically categorized and matched 142 transactions this morning. All accounts are audit-ready.",
      badgeVal: 'Books Closed',
      badgeLabel: '100% Accuracy'
    },
    {
      label: 'TAX OPTIMIZATION',
      title: 'Real-time Tax Hub',
      items: [
        { icon: '📊', title: 'VAT Return Q3', date: 'Due in 14 days', amt: 'AED 12,480.00', status: 'Calculated', statusClass: 'matches', positive: false },
        { icon: '🏛️', title: 'Corporate Tax', date: '9% Bracket Estimator', amt: 'AED 4,200.00', status: 'Projected', statusClass: 'processing', positive: false },
        { icon: '📑', title: 'Input Tax Credit', date: 'Claimed this month', amt: '+AED 2,840.00', status: 'Verified', statusClass: 'matches', positive: true }
      ],
      chat: "Your input tax credits are being maximized. We've identified AED 2.8k in additional VAT savings this month.",
      badgeVal: 'Tax Optimized',
      badgeLabel: 'FTA Compliant'
    },
    {
      label: 'STRATEGIC INSIGHTS',
      title: 'Direct CFO Dashboard',
      items: [
        { icon: '📈', title: 'Gross Margin', date: 'Vs Previous Month', amt: '+12.5%', status: 'Trending Up', statusClass: 'matches', positive: true },
        { icon: '💰', title: 'Cash Runway', date: 'Current Liquidity', amt: '18 Months', status: 'Stable', statusClass: 'matches', positive: true },
        { icon: '📉', title: 'Burn Rate', date: 'Monthly Fixed Costs', amt: '-$22.0k', status: 'Optimized', statusClass: 'processing', positive: true }
      ],
      chat: "Your seasonal burn rate has decreased by 5% through algorithmic cost-shaving. Your runway is extremely healthy.",
      badgeVal: 'Strategy Set',
      badgeLabel: 'Growth Ready'
    }
  ];

  currentSlide = signal(0);
  private intervalId: any;

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.currentSlide.update(i => (i + 1) % this.featureCards.length);
    }, 6000);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
