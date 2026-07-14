import {
  Component,
  ChangeDetectionStrategy,
  OnInit,
  AfterViewInit,
  OnDestroy,
  ViewEncapsulation,
  ChangeDetectorRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../../components/footer/footer.component';
import { BookingModalService } from '../../services/booking-modal.service';
import { TranslateModule } from '@ngx-translate/core';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, FooterComponent, TranslateModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  private readonly heroSlideCount = 3;
  currentSlide = 0;
  private heroSlideIntervalId: ReturnType<typeof setInterval> | null = null;
  activeInsightTab = 'all';

  readonly insightTabs = [
    { id: 'all', label: 'All Guides' },
    { id: 'tax', label: 'Corporate Tax & VAT' },
    { id: 'business', label: 'Business Setup' },
    { id: 'compliance', label: 'Compliance' },
    { id: 'industry', label: 'Industry Guides' },
    { id: 'growth', label: 'Cash Flow & Growth' },
  ];

  readonly insightCards = [
    {
      id: 'corporate-tax',
      tabs: ['all', 'tax'],
      badge: '🔥 MOST READ - UAE CORPORATE TAX 2026',
      readTime: '10 min read',
      accent: '#ff4b4b',
      title: 'UAE Corporate Tax 9% — What Every UAE Business Must Do Right Now',
      body: 'UAE CT at 9% applies to taxable income above AED 375,000. Registration is mandatory for all — penalty AED 10,000 for late filing. Free zone 0% only for QFZP with genuine substance. Small Business Relief available below AED 3M revenue.',
    },
    {
      id: 'vat',
      tabs: ['all', 'tax', 'compliance'],
      badge: 'VAT · FTA COMPLIANCE · UAE 2026',
      readTime: '8 min read',
      accent: '#f59e0b',
      title: 'UAE VAT Filing — Deadlines, the 10 Most Costly Mistakes & What the FTA Audits',
      body: 'UAE VAT at 5% since January 2018. Mandatory registration above AED 375,000 turnover — AED 20,000 penalty for late registration. The FTA cross-references supplier and buyer records — one mistake in your return flags errors in another.',
    },
    {
      id: 'peppol',
      tabs: ['all', 'compliance'],
      badge: '⚡ UAE E-INVOICING · PEPPOL · 2026',
      readTime: '7 min read',
      accent: '#8b5cf6',
      title: 'UAE Mandatory E-Invoicing 2026 — PEPPOL Compliance Guide for UAE Businesses',
      body: 'The UAE FTA is mandating structured XML e-invoicing for B2B and B2G transactions — PDF invoices sent by email will no longer be sufficient. Large businesses are in the first mandatory phase. Implementation requires system changes, access point selection, and ERP integration.',
    },
    {
      id: 'mainland-freezone',
      tabs: ['all', 'business', 'growth'],
      badge: 'BUSINESS SETUP · MAINLAND VS FREE ZONE UAE',
      readTime: '12 min read',
      accent: '#06b6d4',
      title: 'Mainland vs Freezone UAE — The Honest Comparison Every Business Owner Needs',
      body: 'Mainland gives unrestricted UAE market access — free zone gives potential 0% CT but only for QFZP earning qualifying income. A free zone company whose mainland revenue exceeds 5% of total loses the exemption for the entire year. We have set up 300+ UAE companies across both structures.',
    },
    {
      id: 'restaurant-vat',
      tabs: ['all', 'tax', 'industry'],
      badge: 'F&B - RESTAURANT & CAFÉ VAT UAE',
      readTime: '7 min read',
      accent: '#10b981',
      title: 'Restaurant & F&B VAT in UAE — Every Rule Every Owner Must Know',
      body: 'Dine-in and takeaway: 5% VAT. Staff meals free of charge: deemed supply — output VAT required. Alcoholic beverages: 5% VAT (no federal excise on alcohol — excise covers tobacco 100%, energy drinks 100%, carbonated drinks 50%). Tourism Dirham: NOT VATable. Tourist Tax Refund: NOT available for food & beverage — retail goods only.',
    },
    {
      id: 'payroll-wps',
      tabs: ['tax', 'compliance', 'industry'],
      badge: 'WPS Guide',
      readTime: '8 min read',
      accent: '#004FE1',
      title: 'UAE Payroll & WPS Compliance 2026, What Every Employer Must Know',
      body: 'WPS is mandatory for UAE private sector employers. Salaries, SIF files, gratuity, leave, deductions, and accounting journals must line up or payroll becomes a compliance risk.',
    },
    {
      id: 'transfer-pricing',
      tabs: ['tax', 'compliance', 'growth'],
      badge: 'Transfer Pricing',
      readTime: '8 min read',
      accent: '#0ea5e9',
      title: "Transfer Pricing in UAE, Arm's Length Rules & Documentation Requirements",
      body: "Related party transactions under UAE Corporate Tax must be at arm's length. Management fees, loans, royalties, shared costs, and group pricing need documentation before filing.",
    },
    {
      id: 'startup-uae',
      tabs: ['business', 'growth'],
      badge: 'Startup UAE',
      readTime: '9 min read',
      accent: '#22c55e',
      title: 'Starting a Business in UAE, The Complete Financial Setup Checklist',
      body: 'Wrong entity, no bookkeeping, missed CT registration, and late VAT registration are common first-year mistakes. This guide puts setup, banking, tax, and finance in the right order.',
    },
    {
      id: 'golden-visa',
      tabs: ['business', 'growth'],
      badge: 'Golden Visa',
      readTime: '6 min read',
      accent: '#eab308',
      title: 'UAE Golden Visa 2026, Who Qualifies, What It Costs & How to Apply',
      body: 'The UAE Golden Visa can provide renewable 5 or 10-year residency without a local sponsor. Eligibility depends on route, evidence, ownership, salary, property, or professional status.',
    },
    {
      id: 'freelancer-tax',
      tabs: ['business', 'industry', 'tax'],
      badge: 'Freelancer',
      readTime: '6 min read',
      accent: '#14b8a6',
      title: 'Freelancer Tax & Accounting UAE 2026, Complete Compliance Guide',
      body: 'UAE freelancers need clean invoices, separate records, VAT threshold tracking, Corporate Tax registration review, and annual filing discipline even when Small Business Relief applies.',
    },
    {
      id: 'ecommerce-tax',
      tabs: ['industry'],
      badge: 'Ecommerce',
      readTime: '8 min read',
      accent: '#f97316',
      title: 'Ecommerce & Amazon Sellers UAE, Complete VAT & Tax Guide 2026',
      body: 'Marketplace payouts, payment gateways, import VAT, customs duty, refunds, returns, and FBA obligations all need correct reconciliation before VAT and profit reporting are reliable.',
    },
    {
      id: 'realestate-vat',
      tabs: ['industry'],
      badge: 'Real Estate',
      readTime: '8 min read',
      accent: '#6366f1',
      title: 'Real Estate & Construction VAT in UAE, Developer & Contractor Guide',
      body: 'First supply, subsequent supply, commercial rental, residential property, DLD records, retentions, and project costs all affect VAT treatment and input VAT recovery.',
    },
    {
      id: 'healthcare-vat',
      tabs: ['industry', 'tax'],
      badge: 'Healthcare VAT',
      readTime: '7 min read',
      accent: '#ec4899',
      title: 'Healthcare VAT Exemptions UAE, Zero-Rated Services, Cosmetic VAT & Clinic Guide',
      body: 'Licensed healthcare, cosmetic procedures, insurance billing, mixed supplies, and employee health insurance each carry different VAT treatment and documentation requirements.',
    },
    {
      id: 'esr-aml',
      tabs: ['compliance'],
      badge: 'Compliance',
      readTime: '7 min read',
      accent: '#475569',
      title: 'ESR, UBO & AML in UAE, What Every Company Must Do to Stay Compliant',
      body: 'ESR, UBO, AML, GoAML, KYC, and bank compliance records are no longer background admin. Missing evidence can create fines, frozen banking, or licensing problems.',
    },
    {
      id: 'cashflow',
      tabs: ['growth'],
      badge: 'Cash Flow',
      readTime: '7 min read',
      accent: '#0891b2',
      title: 'Cash Flow Management for UAE SMEs, Why Profitable Businesses Run Out of Cash',
      body: 'Profit on paper does not equal cash in the bank. VAT, payroll, supplier terms, slow receivables, and inventory timing can drain a profitable business without a rolling forecast.',
    },
  ];

  readonly insightTopics = [
    {
      id: 'payroll-wps',
      icon: '💼',
      title: 'UAE Payroll & WPS Compliance 2026',
      sub: 'SIF files, gratuity 21 days/year, MOHRE penalties',
    },
    {
      id: 'ecommerce-tax',
      icon: '🛒',
      title: 'Ecommerce & Amazon FBA — UAE VAT Guide',
      sub: 'Import VAT reclaim, FBA obligations, marketplace reconciliation',
    },
    {
      id: 'realestate-vat',
      icon: '🏗️',
      title: 'Real Estate VAT UAE — Developer Guide',
      sub: 'First supply zero-rated, subsequent exempt, DLD fees not VATable',
    },
    {
      id: 'healthcare-vat',
      icon: '🩺',
      title: 'Healthcare VAT Exemptions UAE',
      sub: 'Zero-rated curative care, cosmetic 5%, employee insurance blocked',
    },
    {
      id: 'esr-aml',
      icon: '🛡️',
      title: 'ESR, UBO & AML — UAE Compliance Guide',
      sub: 'ESR 9 activities, UBO penalty AED 100,000 first offence',
    },
    {
      id: 'golden-visa',
      icon: '🌍',
      title: 'UAE Golden Visa 2026 — Who Qualifies',
      sub: 'Property AED 2M+, skilled salary AED 30K+, 5 or 10-year residency',
    },
    {
      id: 'cashflow',
      icon: '📊',
      title: 'Cash Flow Management for UAE SMEs',
      sub: 'VAT working capital trap, 13-week forecast, debtor days UAE',
    },
    {
      id: 'transfer-pricing',
      icon: '🎯',
      title: 'Transfer Pricing UAE — Rules & Documentation',
      sub: "Arm's length principle, AED 40M threshold, Local File required",
    },
    {
      id: 'startup-uae',
      icon: '🚀',
      title: 'Startup in UAE — Financial Setup Checklist',
      sub: 'Entity choice, CT registration, VAT setup, banking checklist',
    },
    {
      id: 'freelancer-tax',
      icon: '👨‍💻',
      title: 'Freelancer Tax & Accounting UAE 2026',
      sub: 'CT registration, VAT threshold, freelance permit vs sole establishment',
    },
  ];

  readonly industryCards = [
    {
      id: 'restaurant',
      image: 'assets/images/ind-hospitality.jpg',
      name: 'Restaurants & F&B · VAT & POS',
      sub: 'Restaurant Accounting UAE',
      alt: 'Restaurant and F&B accounting UAE',
    },
    {
      id: 'ecommerce',
      image: 'assets/images/ind-retail.jpg',
      name: 'Ecommerce & Amazon Sellers',
      sub: 'Ecommerce Accounting Dubai',
      alt: 'Ecommerce and Amazon sellers accounting Dubai',
    },
    {
      id: 'realestate',
      image: 'assets/images/ind-realestate.jpg',
      name: 'Real Estate & Construction',
      sub: 'Construction Accounting UAE',
      alt: 'Real estate and construction accounting UAE',
    },
    {
      id: 'healthcare',
      image: 'assets/images/ind-healthcare.jpg',
      name: 'Healthcare & Clinics',
      sub: 'Medical Practice Accounting UAE',
      alt: 'Healthcare and clinic accounting UAE',
    },
    {
      id: 'tech',
      image: 'assets/images/ind-technology.jpg',
      name: 'Technology & SaaS Startups',
      sub: 'Startup Accounting UAE',
      alt: 'Technology and SaaS startup accounting UAE',
    },
    {
      id: 'retail',
      image: 'assets/images/ind-retail.jpg',
      name: 'Retail & Consumer Brands',
      sub: 'Retail Accounting UAE',
      alt: 'Retail and consumer brand accounting UAE',
    },
    {
      id: 'hospitality',
      image: 'assets/images/ind-hospitality.jpg',
      name: 'Hospitality & Tourism',
      sub: 'Hotel Accounting Dubai',
      alt: 'Hospitality and tourism accounting Dubai',
    },
    {
      id: 'freelancer',
      image: 'assets/images/hero-slide2-business.jpg',
      name: 'Freelancers & Sole Establishments',
      sub: 'Freelancer Tax UAE',
      alt: 'Freelancer and sole establishment tax UAE',
    },
    {
      id: 'logistics',
      image: 'assets/images/ind-manufacturing.jpg',
      name: 'Logistics & Transportation',
      sub: 'Multi-Emirate Accounting UAE',
      alt: 'Logistics and transportation accounting UAE',
    },
    {
      id: 'banking',
      image: 'assets/images/ind-banking.jpg',
      name: 'Banking & Financial Services',
      sub: 'AML & DFSA Compliance UAE',
      alt: 'Banking and financial services accounting UAE',
    },
    {
      id: 'manufacturing',
      image: 'assets/images/ind-manufacturing.jpg',
      name: 'Manufacturing & Trading',
      sub: 'Import VAT Accounting UAE',
      alt: 'Manufacturing and trading accounting UAE',
    },
    {
      id: 'oilgas',
      image: 'assets/images/ind-energy.jpg',
      name: 'Oil, Gas & Energy',
      sub: 'Complex VAT Structures UAE',
      alt: 'Oil gas and energy accounting UAE',
    },
  ];

  constructor(
    private cdr: ChangeDetectorRef,
    private bookingService: BookingModalService,
    private seoService: SeoService,
  ) {}

  ngOnInit() {
    this.seoService.setPage({
      title: 'BookLean Global UAE | Corporate Tax, VAT and AI Accounting Dubai',
      description:
        'BookLean Global helps UAE businesses with Corporate Tax, VAT filing, AI bookkeeping, payroll WPS, Virtual CFO, audit support, and business setup in Dubai and across the UAE.',
      path: '/uae/home',
      canonicalUrl: 'https://www.bookleanglobal.com/',
      structuredData: this.homeStructuredData(),
    });
  }

  openBookingModal(event: Event) {
    event.preventDefault();
    this.bookingService.open(event);
  }

  ngAfterViewInit() {
    if (typeof window !== 'undefined') {
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
      const slideIndex = Number(slide.dataset['slideIndex'] ?? index);
      slide.classList.toggle('active', slideIndex === this.currentSlide);
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

  openLiveChat(text = '') {
    if (typeof window === 'undefined') return;

    window.dispatchEvent(
      new CustomEvent('booklean-open-chat', {
        detail: { message: text.trim() },
      }),
    );
  }

  private homeStructuredData(): unknown[] {
    const siteUrl = 'https://www.bookleanglobal.com';
    const logoUrl = `${siteUrl}/logo.jpg`;
    const organizationId = `${siteUrl}/#organization`;
    const websiteId = `${siteUrl}/#website`;
    const homepageId = `${siteUrl}/#webpage`;

    const accountingService = {
      '@context': 'https://schema.org',
      '@type': 'AccountingService',
      '@id': organizationId,
      name: 'BookLean Global',
      url: siteUrl,
      logo: logoUrl,
      image: logoUrl,
      description:
        'UAE accounting firm for Corporate Tax 9%, VAT, Payroll WPS, PEPPOL e-invoicing, bookkeeping, and Virtual CFO services in Dubai.',
      telephone: '+971526203995',
      email: 'hello@booklean.ae',
      priceRange: 'AED',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Business Bay',
        addressLocality: 'Dubai',
        addressRegion: 'Dubai',
        addressCountry: 'AE',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 25.1972,
        longitude: 55.2744,
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
          opens: '09:00',
          closes: '18:00',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: 'Friday',
          opens: '09:00',
          closes: '13:00',
        },
      ],
      areaServed: ['AE', 'IN', 'GB'],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '500',
        bestRating: '5',
        worstRating: '1',
      },
      sameAs: [
        'https://www.linkedin.com/company/bookleanglobal/',
        'https://www.instagram.com/bookleanglobal',
        'https://x.com/Bookleanglobal',
      ],
    };

    return [
      {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        '@id': websiteId,
        url: `${siteUrl}/`,
        name: 'BookLean Global',
        publisher: { '@id': organizationId },
      },
      {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        '@id': homepageId,
        url: `${siteUrl}/`,
        name: 'BookLean Global UAE | Corporate Tax, VAT and AI Accounting Dubai',
        isPartOf: { '@id': websiteId },
        about: { '@id': organizationId },
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['.s-desc', '.h-stat-lbl'],
        },
      },
      accountingService,
      {
        ...accountingService,
        '@type': 'Organization',
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+971526203995',
          contactType: 'customer service',
          areaServed: ['AE', 'IN', 'GB'],
          availableLanguage: ['English', 'Arabic'],
        },
        foundingDate: '2026',
      },
      {
        '@context': 'https://schema.org',
        '@type': 'Person',
        '@id': `${siteUrl}/#sunil-radhakrishnan`,
        name: 'Sunil P Radhakrishnan',
        jobTitle: 'Co-Founder and Chartered Accountant',
        worksFor: { '@id': organizationId },
        sameAs: ['https://www.linkedin.com/in/sunil-radhakrishnan'],
      },
    ];
  }
}
