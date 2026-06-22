import { Component, ChangeDetectionStrategy, AfterViewInit, OnDestroy, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../../components/footer/footer.component';
import { BookingModalService } from '../../services/booking-modal.service';
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-home', standalone: true, imports: [CommonModule, RouterLink, FooterComponent, TranslateModule], templateUrl: './home.component.html', styleUrl: './home.component.scss', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  private readonly heroSlideCount = 3;
  currentSlide = 0;
  private heroSlideIntervalId: ReturnType<typeof setInterval> | null = null;
  activeInsightTab = 'all';

  readonly insightTabs = [
    { id: 'all', label: 'All Guides' }, { id: 'tax', label: 'Corporate Tax & VAT' }, { id: 'business', label: 'Business Setup' }, { id: 'compliance', label: 'Compliance' }, { id: 'industry', label: 'Industry Guides' }, { id: 'growth', label: 'Cash Flow & Growth' }
  ];

  readonly insightCards = [
    {
      id: 'corporate-tax', tabs: ['all', 'tax'], badge: 'Must Read 2026', readTime: '10 min read', accent: '#ff4b4b', title: 'UAE Corporate Tax 2026, Complete SME Guide: Deadlines, Rates & Filing Steps', body: 'Everything about the 9% Corporate Tax, who pays, who is exempt, QFZP status, EmaraTax registration, and the exact filing deadlines for your financial year.'
    }, {
      id: 'vat', tabs: ['all', 'tax', 'compliance'], badge: 'FTA Alert', readTime: '8 min read', accent: '#f59e0b', title: '14 VAT Filing Mistakes UAE Businesses Make, And How to Avoid Every One', body: 'Wrong VAT rates, missing input claims, incorrect invoice formats, the exact mistakes that trigger FTA penalties from AED 1,000 per period. With the fix for each one.'
    }, {
      id: 'peppol', tabs: ['all', 'compliance'], badge: 'PEPPOL 2026', readTime: '7 min read', accent: '#8b5cf6', title: 'UAE PEPPOL E-Invoicing 2026, What Every Business Must Do Before the Deadline', body: 'PEPPOL is no longer optional. This guide explains what it means, which businesses are affected first, how to implement it, and what happens if you miss the mandate.'
    }, {
      id: 'mainland-freezone', tabs: ['all', 'business', 'growth'], badge: 'Business Setup', readTime: '12 min read', accent: '#06b6d4', title: 'Mainland vs Freezone UAE, The Honest Comparison Every Business Owner Needs', body: 'Mainland gives unrestricted UAE market access. Free zones can offer potential 0% CT, but only for QFZP earning qualifying income. A free zone company whose mainland revenue exceeds the allowed threshold can lose the exemption.'
    }, {
      id: 'restaurant-vat', tabs: ['all', 'tax', 'industry'], badge: 'F&B VAT UAE', readTime: '7 min read', accent: '#10b981', title: 'Restaurant & F&B VAT in UAE, Every Rule Every Owner Must Know', body: 'Dine-in and takeaway sales are generally subject to 5% VAT. Staff meals, delivery platforms, discounts, service charges, and tourist rules need careful handling before every FTA filing.'
    }, {
      id: 'payroll-wps', tabs: ['tax', 'compliance', 'industry'], badge: 'WPS Guide', readTime: '8 min read', accent: '#004FE1', title: 'UAE Payroll & WPS Compliance 2026, What Every Employer Must Know', body: 'WPS is mandatory for UAE private sector employers. Salaries, SIF files, gratuity, leave, deductions, and accounting journals must line up or payroll becomes a compliance risk.'
    }, {
      id: 'transfer-pricing', tabs: ['tax', 'compliance', 'growth'], badge: 'Transfer Pricing', readTime: '8 min read', accent: '#0ea5e9', title: "Transfer Pricing in UAE, Arm's Length Rules & Documentation Requirements", body: "Related party transactions under UAE Corporate Tax must be at arm's length. Management fees, loans, royalties, shared costs, and group pricing need documentation before filing."
    }, {
      id: 'startup-uae', tabs: ['business', 'growth'], badge: 'Startup UAE', readTime: '9 min read', accent: '#22c55e', title: 'Starting a Business in UAE, The Complete Financial Setup Checklist', body: 'Wrong entity, no bookkeeping, missed CT registration, and late VAT registration are common first-year mistakes. This guide puts setup, banking, tax, and finance in the right order.'
    }, {
      id: 'golden-visa', tabs: ['business', 'growth'], badge: 'Golden Visa', readTime: '6 min read', accent: '#eab308', title: 'UAE Golden Visa 2026, Who Qualifies, What It Costs & How to Apply', body: 'The UAE Golden Visa can provide renewable 5 or 10-year residency without a local sponsor. Eligibility depends on route, evidence, ownership, salary, property, or professional status.'
    }, {
      id: 'freelancer-tax', tabs: ['business', 'industry', 'tax'], badge: 'Freelancer', readTime: '6 min read', accent: '#14b8a6', title: 'Freelancer Tax & Accounting UAE 2026, Complete Compliance Guide', body: 'UAE freelancers need clean invoices, separate records, VAT threshold tracking, Corporate Tax registration review, and annual filing discipline even when Small Business Relief applies.'
    }, {
      id: 'ecommerce-tax', tabs: ['industry'], badge: 'Ecommerce', readTime: '8 min read', accent: '#f97316', title: 'Ecommerce & Amazon Sellers UAE, Complete VAT & Tax Guide 2026', body: 'Marketplace payouts, payment gateways, import VAT, customs duty, refunds, returns, and FBA obligations all need correct reconciliation before VAT and profit reporting are reliable.'
    }, {
      id: 'realestate-vat', tabs: ['industry'], badge: 'Real Estate', readTime: '8 min read', accent: '#6366f1', title: 'Real Estate & Construction VAT in UAE, Developer & Contractor Guide', body: 'First supply, subsequent supply, commercial rental, residential property, DLD records, retentions, and project costs all affect VAT treatment and input VAT recovery.'
    }, {
      id: 'healthcare-vat', tabs: ['industry', 'tax'], badge: 'Healthcare VAT', readTime: '7 min read', accent: '#ec4899', title: 'Healthcare VAT Exemptions UAE, Zero-Rated Services, Cosmetic VAT & Clinic Guide', body: 'Licensed healthcare, cosmetic procedures, insurance billing, mixed supplies, and employee health insurance each carry different VAT treatment and documentation requirements.'
    }, {
      id: 'esr-aml', tabs: ['compliance'], badge: 'Compliance', readTime: '7 min read', accent: '#475569', title: 'ESR, UBO & AML in UAE, What Every Company Must Do to Stay Compliant', body: 'ESR, UBO, AML, GoAML, KYC, and bank compliance records are no longer background admin. Missing evidence can create fines, frozen banking, or licensing problems.'
    }, {
      id: 'cashflow', tabs: ['growth'], badge: 'Cash Flow', readTime: '7 min read', accent: '#0891b2', title: 'Cash Flow Management for UAE SMEs, Why Profitable Businesses Run Out of Cash', body: 'Profit on paper does not equal cash in the bank. VAT, payroll, supplier terms, slow receivables, and inventory timing can drain a profitable business without a rolling forecast.'
    }
  ];

  readonly insightTopics = [
    { id: 'payroll-wps', icon: 'WPS', title: 'UAE Payroll & WPS Compliance 2026', sub: 'SIF files, gratuity, MOHRE-facing records' }, { id: 'ecommerce-tax', icon: 'ECOM', title: 'Ecommerce & Amazon FBA, UAE VAT Guide', sub: 'Import VAT, marketplace reconciliation' }, { id: 'realestate-vat', icon: 'RE', title: 'Real Estate VAT UAE, Developer Guide', sub: 'First supply, exempt supply, DLD records' }, { id: 'healthcare-vat', icon: 'VAT', title: 'Healthcare VAT Exemptions UAE', sub: 'Zero-rated care, cosmetic VAT, insurance' }, { id: 'esr-aml', icon: 'AML', title: 'ESR, UBO & AML, UAE Compliance Guide', sub: 'Registers, policies, filings, bank reviews' }, { id: 'golden-visa', icon: 'VISA', title: 'UAE Golden Visa 2026, Who Qualifies', sub: 'Investor, founder, professional routes' }, { id: 'cashflow', icon: 'CFO', title: 'Cash Flow Management for UAE SMEs', sub: 'VAT trap, 13-week forecast, debtor days' }, { id: 'transfer-pricing', icon: 'TP', title: 'Transfer Pricing UAE, Rules & Documentation', sub: "Arm's length principle and related parties" }
  ];

  constructor(
    private cdr: ChangeDetectorRef, private bookingService: BookingModalService
  ) { }

  openBookingModal(event: Event) {
    event.preventDefault();
    this.bookingService.open(event);
  }

  ngAfterViewInit() {
    if (typeof window !== "undefined") {
      this.applyHeroSlide();
      this.startAutoSlide();
    }
  }

  // Slide Logic
  goSlide(n: number) {
    this.currentSlide = n;
    this.applyHeroSlide();
    this.cdr.markForCheck();
  }

  private startAutoSlide() {
    this.heroSlideIntervalId = setInterval(() => {
      this.goSlide((this.currentSlide + 1) % this.heroSlideCount);
    }, 5500);
  }

  private applyHeroSlide() {
    document.querySelectorAll<HTMLElement>('.hero .slide').forEach((slide, index) => {
      slide.classList.toggle('active', index === this.currentSlide);
    });
    document.querySelectorAll<HTMLElement>('.hero-dots .dot').forEach((dot, index) => {
      dot.classList.toggle('active', index === this.currentSlide);
    });
  }

  ngOnDestroy() {
    if (this.heroSlideIntervalId) {
      clearInterval(this.heroSlideIntervalId);
    }
  }

  setInsightTab(tabId: string) {
    this.activeInsightTab = tabId;
    this.cdr.markForCheck();
  }

  filteredInsightCards() {
    return this.insightCards.filter((card) => card.tabs.includes(this.activeInsightTab));
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
