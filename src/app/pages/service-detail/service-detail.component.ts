import { ChangeDetectionStrategy, Component, computed, effect, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { TranslateModule } from '@ngx-translate/core';
import { BookingModalService } from '../../services/booking-modal.service';
import { RegionDataService } from '../../services/region-data.service';
import { FooterComponent } from '../../components/footer/footer.component';
import { SeoService } from '../../services/seo.service';

interface ServiceOutcome {
  icon: string;
  title: string;
  description: string;
}

interface RichService {
  id: string;
  icon: string;
  title: string;
  shortTitle: string;
  tagline: string;
  pain: string;
  guide: string;
  outcomes: ServiceOutcome[];
  services: string[];
}

@Component({
  selector: 'app-service-detail', standalone: true, imports: [RouterLink, FooterComponent, TranslateModule], templateUrl: './service-detail.component.html', styleUrl: './service-detail.component.scss', changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServiceDetailComponent {
  regionDataService = inject(RegionDataService);
  bookingService = inject(BookingModalService);
  private seoService = inject(SeoService);
  private route = inject(ActivatedRoute);

  private params = toSignal(this.route.paramMap);

  readonly services: RichService[] = [
    {
      id: 'tax', icon: 'CT', shortTitle: 'Corporate Tax & VAT', title: 'UAE Corporate Tax & VAT Compliance', tagline: 'Every deadline met. Every dirham saved. Every year.', pain: 'Every quarter, the same dread: is this VAT return correct? Did I miss a Corporate Tax deadline? One wrong figure and the FTA sends a penalty notice that costs more than a full year of professional fees. You started this business to grow it, not to become a UAE tax expert.', guide: 'BookLean\'s FTA-registered tax team handles every deadline, every form, and every compliance requirement proactively. We file before the deadline. We flag issues before they become penalties. You never open an FTA letter alone again.', outcomes: [
        { icon: '✓', title: 'Zero FTA penalties, guaranteed', description: 'Every VAT and Corporate Tax filing done on time, every quarter. Our contractual track record spans 500+ UAE client accounts.' }, { icon: 'AED', title: 'Pay exactly what is right', description: 'Corporate Tax planning, transfer pricing documentation, and QFZP structuring help you avoid overpaying.' }, { icon: 'PEP', title: 'PEPPOL e-invoicing ready for 2026', description: 'We implement XML e-invoice workflows before the mandate, not after penalties begin.' }, { icon: 'FTA', title: 'FTA audit defence already prepared', description: 'Every invoice, record, and filing stays audit-ready. We represent you directly if the FTA comes knocking.' }, { icon: 'TP', title: 'Transfer pricing with no gaps', description: 'Related-party transactions are documented with arm\'s length pricing analysis and FTA-ready support.' }, { icon: '24/7', title: 'Proactive deadline management', description: 'We track every FTA bulletin and update your filings automatically. You hear from us when it is done, not when it is due.' }
      ], services: ['Corporate Tax (9%) Registration UAE', 'Corporate Tax Return Filing UAE', 'Qualifying Free Zone Person (QFZP) Assessment', 'Transfer Pricing Documentation UAE', 'VAT Registration & FTA TRN UAE', 'VAT Return Filing (Quarterly & Monthly)', 'VAT Reclaim & Refund Applications UAE', 'FTA Voluntary Disclosure UAE', 'FTA Audit Defence & Representation', 'Tax Penalty Dispute Resolution UAE', 'PEPPOL E-Invoicing Implementation 2026', 'UAE E-Invoice XML & Compliance Setup', 'Import VAT & Customs Duty UAE', 'Group Tax Relief & Loss Transfer UAE', 'Advance Pricing Agreement Advisory', 'Excise Tax Filing UAE', 'Tax Residency Certificate UAE', 'Double Tax Treaty Advisory UAE']
    }, {
      id: 'bso', icon: 'BK', shortTitle: 'AI Bookkeeping & Payroll', title: 'AI Cloud Bookkeeping & Payroll UAE', tagline: 'A complete finance department without the headcount cost.', pain: 'Chasing receipts at month-end. Waiting three weeks for financial reports that are already outdated by the time they arrive. Payroll that requires manual intervention every cycle. Spreadsheets nobody fully trusts. This is what your books look like, and it costs more time than most owners realise.', guide: 'BookLean\'s AI-powered bookkeeping handles invoices, reconciliation, payroll, and reporting every single day. You get clean, real-time books without touching a spreadsheet. One dedicated CA. Zero manual work for you.', outcomes: [
        { icon: 'MC', title: 'Monthly close in days, not three weeks', description: 'AI reconciliation means P&L, balance sheet, and cash flow are ready within days of month-end.' }, { icon: 'WPS', title: 'WPS-compliant payroll every cycle', description: 'Salary processing, SIF generation, WPS submission, and MOHRE compliance are fully managed.' }, { icon: 'MIS', title: 'Real-time financial dashboard', description: 'Cash in, cash out, profit, and tax exposure stay visible without waiting for month-end.' }, { icon: 'CA', title: 'One dedicated CA', description: 'Your CA knows your accounts, structure, and business model. One expert, not a helpdesk ticket.' }, { icon: 'OCR', title: '99%+ document accuracy', description: 'Upload English or Arabic invoices and receipts. OCR extracts, classifies, validates, and your CA approves.' }, { icon: 'APP', title: 'Cloud access from anywhere', description: 'Zoho Books, QuickBooks, or Xero set up and managed for real-time access from Dubai, London, or Riyadh.' }
      ], services: ['AI-Powered Cloud Bookkeeping UAE', 'Monthly Accounting & Bank Reconciliation', 'Accounts Payable & Receivable Management', 'Payroll Processing & WPS UAE', 'Salary Processing & SIF File UAE', 'HR & Payroll Compliance UAE', 'Expense Management & Control UAE', 'Fixed Asset Register Management', 'Month-End & Year-End Financial Close', 'IFRS Financial Statements UAE', 'Finance Department Outsourcing UAE', 'Zoho Books Setup & Implementation', 'QuickBooks & Xero UAE Setup', 'ERP & Accounting Software Migration', 'Treasury & Cash Management UAE', 'Bank Account Reconciliation UAE', 'Multi-Currency Bookkeeping UAE', 'Arabic Invoice Processing UAE']
    }, {
      id: 'digital', icon: 'AI', shortTitle: 'AI & Digital Finance', title: 'AI Accounting & Digital Finance UAE', tagline: 'Cut finance admin by 70-80%. Your books run themselves.', pain: 'Manual data entry is costing you 15+ hours a month. Invoice processing is a bottleneck. Bank reconciliation is a Friday nightmare. And PEPPOL e-invoicing is becoming mandatory in the UAE, with real risk for businesses that are not ready.', guide: 'BookLean\'s AI finance platform automates your financial operation from invoice capture to bank matching to compliance reporting. We set it up, manage it, and monitor it every day.', outcomes: [
        { icon: '80%', title: '70-80% less finance admin', description: 'AI invoice processing, automated bank reconciliation, and smart expense classification run every day.' }, { icon: 'PEP', title: 'PEPPOL e-invoicing ready', description: 'XML invoice generation, FTA-ready data mapping, system testing, and implementation included.' }, { icon: 'BI', title: 'Power BI financial dashboard', description: 'Live cash flow, revenue trends, cost analysis, and tax exposure in one daily-updated dashboard.' }, { icon: 'ERP', title: 'ERP setup and migration', description: 'Zoho Books, QuickBooks, Xero, and SAP configured with UAE-specific chart of accounts and integrations.' }, { icon: 'RISK', title: 'AI fraud and anomaly alerts', description: 'Automated monitoring flags duplicate invoices, unusual transactions, and reconciliation mismatches.' }, { icon: 'FLOW', title: 'End-to-end digital finance', description: 'From paper receipts to automated workflows, we design, implement, and run the transformation.' }
      ], services: ['AI Bookkeeping & Automation UAE', 'AI Invoice Processing & OCR UAE', 'AI-Powered Real-Time Financial Dashboard', 'PEPPOL E-Invoicing UAE Implementation 2026', 'UAE E-Invoice XML & Compliance Setup', 'ERP Implementation & Setup UAE', 'ERP Migration & System Integration UAE', 'Power BI Financial Dashboard UAE', 'Real-Time Cash Flow Dashboard UAE', 'AI Fraud Detection & Risk Alert System', 'VAT Validation Engine UAE', 'Cloud Finance System Setup UAE', 'Workflow Automation & Process Digitisation', 'Digital Finance Transformation UAE', 'AI Compliance Monitoring UAE', 'Xero & QuickBooks Automation UAE', 'Automated Bank Reconciliation UAE', 'Smart Expense Classification UAE']
    }, {
      id: 'advisory', icon: 'CFO', shortTitle: 'Virtual CFO', title: 'Virtual CFO & Business Advisory UAE', tagline: 'C-suite financial leadership without the C-suite salary.', pain: 'You are making major decisions based on last quarter\'s numbers. Your bank wants a financial model. Your investor wants projections. You need board-quality reports, cash flow forecasts, and margin clarity without hiring a full-time CFO.', guide: 'BookLean\'s Virtual CFO service gives you senior-level financial leadership every month: board reports, cash flow forecasting, budgeting, fundraising preparation, and strategic review from a Big 4-trained CA.', outcomes: [
        { icon: 'MIS', title: 'Board-ready MIS every month', description: 'P&L, balance sheet, cash flow, KPIs, and management commentary delivered on time.' }, { icon: 'CF', title: '3-month rolling cash forecast', description: 'Know your cash position in advance so hiring, investments, and distributions are planned calmly.' }, { icon: 'FUND', title: 'Fundraising-ready financials', description: 'IFRS-compliant, audit-ready financials that banks and investors can rely on.' }, { icon: 'STR', title: 'Strategic advisory', description: 'Monthly CA review calls covering performance, opportunities, and next-quarter planning.' }, { icon: 'BVA', title: 'Budget vs actuals', description: 'Monthly variance analysis with commentary so you know immediately where the plan changed.' }, { icon: 'M&A', title: 'M&A, valuation, and IPO readiness', description: 'Valuation, due diligence preparation, M&A structuring, and IPO readiness support.' }
      ], services: ['Virtual CFO Services UAE', 'Monthly Board-Ready MIS Reporting', 'Cash Flow Forecasting & Management UAE', '3-Year Financial Modelling UAE', 'Budget Planning & Variance Analysis', 'KPI Dashboard & Business Intelligence', 'Working Capital Management UAE', 'Fundraising Preparation UAE', 'Business Valuation UAE', 'Investor Relations Financial Support', 'Debt Structuring & Refinancing Advisory', 'M&A Financial Advisory UAE', 'IPO Readiness & Financial Preparation', 'Cost Reduction & Margin Improvement UAE', 'Strategic Business Advisory UAE', 'Management Accounts UAE', 'Interim CFO Services Dubai', 'Group Consolidation & Reporting UAE']
    }, {
      id: 'audit', icon: 'AUD', shortTitle: 'Audit & Assurance', title: 'Audit & Assurance UAE', tagline: 'Know your numbers are right before the FTA does.', pain: 'The FTA can audit any UAE business at any time. Without audit-ready books, that means scrambling for invoices, reconciling records that do not match, and paying penalties for mistakes proper accounting would have prevented.', guide: 'BookLean\'s audit team keeps your books audit-ready every day, runs pre-audit health checks, prepares statutory financials, and defends you directly if the FTA initiates a review.', outcomes: [
        { icon: 'FTA', title: 'FTA pre-audit health check', description: 'We review records, identify compliance gaps, and fix them before the FTA finds them.' }, { icon: 'IFRS', title: 'Statutory audit', description: 'Annual statutory financial statements by Big 4-trained CAs, compliant with UAE law and IFRS.' }, { icon: 'DEF', title: 'FTA audit defence', description: 'Documentation, queries, representations, and resolution handled directly by our team.' }, { icon: 'CTRL', title: 'Internal controls that protect you', description: 'Process reviews, risk assessments, and internal control design to reduce business risk.' }, { icon: 'FS', title: 'IFRS-compliant statements', description: 'Revenue recognition, leases, financial instruments, and disclosures handled correctly.' }, { icon: 'BANK', title: 'Bank and investor assurance', description: 'Audit reports prepared to the standard lenders and investors expect.' }
      ], services: ['Statutory External Audit UAE', 'Internal Audit Services UAE', 'IFRS Compliance & Financial Statements', 'FTA Pre-Audit Health Check UAE', 'FTA Audit Defence & Representation', 'Risk-Based Internal Audit UAE', 'Process & Controls Review UAE', 'Fraud Investigation & Forensic Audit UAE', 'Due Diligence Audit UAE', 'Management Audit & Efficiency Review', 'IT & Systems Audit UAE', 'Compliance Audit UAE', 'Inventory & Fixed Asset Audit UAE', 'Payroll Audit UAE', 'Related Party Transaction Review UAE', 'Financial Statement Assurance UAE', 'Limited Review Engagements UAE', 'Agreed-Upon Procedures UAE']
    }, {
      id: 'corporate', icon: 'SET', shortTitle: 'Business Setup', title: 'Business Setup & UAE Company Formation', tagline: 'From idea to operational, fully handled in weeks.', pain: 'Most owners spend months navigating DED, FTA, MOHRE, immigration, and free zone authorities separately. Wrong structure choices create years of tax inefficiency, and compliance starts from day one.', guide: 'BookLean handles UAE company setup end to end: trade licence, bank account, visas, FTA registration, and tax structure optimisation. You get the right structure from day one.', outcomes: [
        { icon: 'LLC', title: 'Right structure from day one', description: 'We recommend the optimal UAE structure for tax, activity, ownership, and growth plans.' }, { icon: 'BANK', title: 'Bank account operational', description: 'We prepare bank documentation and facilitate introductions to UAE banking relationships.' }, { icon: 'VISA', title: 'UAE Golden Visa', description: 'Eligibility assessment and full application support for investors, entrepreneurs, and professionals.' }, { icon: 'PRO', title: 'Licences, visas, and PRO', description: 'DED trade licence, free zone registration, employment visas, Emirates ID, and PRO services.' }, { icon: 'HOLD', title: 'Tax-efficient structures', description: 'Holding companies, offshore entities, and cross-border group structures for UAE, India, and UK businesses.' }, { icon: 'RE', title: 'Company restructuring', description: 'Shareholder changes, activity amendments, restructuring, and expansion across emirates.' }
      ], services: ['Dubai Mainland Company Setup (LLC)', 'Sole Establishment Formation UAE', 'DED Trade Licence Dubai', 'Freezone Company Setup UAE', 'IFZA Company Formation UAE', 'DMCC Company Formation Dubai', 'Meydan Freezone Company Setup', 'DIFC Company Formation UAE', 'ADGM Entity Setup UAE', 'Offshore Company Formation UAE', 'Bank Account Opening UAE', 'UAE Golden Visa Services', 'Investor Visa UAE', 'Employment Visa Processing UAE', 'Emirates ID Assistance UAE', 'PRO Services Dubai', 'Company Restructuring UAE', 'Family Business Advisory UAE', 'Franchise Advisory UAE', 'Joint Venture Structuring UAE']
    }, {
      id: 'regulatory', icon: 'REG', shortTitle: 'ESR, UBO & AML', title: 'ESR, UBO, AML & Regulatory Compliance UAE', tagline: 'Stay fully compliant before regulators come knocking.', pain: 'ESR filing deadlines are missed because nobody tracks them. UBO requirements are misunderstood. AML compliance is ignored until a bank freezes the account. UAE regulatory requirements are growing, and many SMEs do not know what they are missing.', guide: 'BookLean proactively manages ESR, UBO, AML, GoAML, PDPL, and related UAE compliance obligations before every deadline. You avoid surprise notices, frozen accounts, and compliance fines.', outcomes: [
        { icon: 'ESR', title: 'ESR filing before deadline', description: 'Economic Substance assessments, notifications, and filings handled proactively every year.' }, { icon: 'UBO', title: 'UBO registry always current', description: 'Beneficial owner registrations and updates filed with the MOE as required.' }, { icon: 'AML', title: 'AML policies and GoAML reporting', description: 'Policy development, staff training, risk assessments, GoAML registration, and STR reporting.' }, { icon: 'GAP', title: 'Compliance health check', description: 'Full compliance gap assessment and remediation plan delivered within 5 business days.' }, { icon: 'KYC', title: 'Bank compliance ready', description: 'AML and KYC documentation prepared to satisfy UAE bank compliance requirements.' }, { icon: 'PDPL', title: 'UAE PDPL privacy compliance', description: 'Privacy reviews, policy implementation, and staff training for personal-data handling.' }
      ], services: ['ESR (Economic Substance Regulation) Filing UAE', 'UBO (Ultimate Beneficial Owner) Registry UAE', 'AML (Anti-Money Laundering) Compliance UAE', 'GoAML Registration & STR Reporting UAE', 'UAE PDPL Data Privacy Compliance', 'AML Policy Development & Staff Training', 'ICV (In-Country Value) Certification UAE', 'Regulatory Advisory & Ongoing Monitoring', 'Compliance Health Check & Gap Assessment', 'Corporate Governance Advisory UAE', 'Risk Management Framework UAE', 'DIFC & ADGM Regulatory Compliance', 'Internal Controls Design & Implementation', 'Whistleblower & Ethics Policy UAE', 'KYC Documentation & Bank Compliance', 'Beneficial Ownership Reporting UAE', 'Sanctions Screening Programme UAE', 'FATF Compliance Advisory UAE']
    }, {
      id: 'industry', icon: 'IND', shortTitle: 'Industry Solutions', title: 'Industry-Specific Accounting UAE', tagline: 'Your accountant already understands your world.', pain: 'Generic accountants apply the same approach to restaurants, tech startups, and construction companies. Restaurant VAT, ecommerce imports, and construction project accounting all require sector-specific judgment.', guide: 'BookLean\'s specialist team includes accountants who have worked in your industry for years. They know sector VAT rules, cost structures, benchmarks, and compliance requirements before you explain a single thing.', outcomes: [
        { icon: 'F&B', title: 'Restaurant & F&B', description: 'VAT, POS integrations, Deliveroo and Talabat reconciliation, and food cost accounting.' }, { icon: 'ECOM', title: 'Ecommerce & Amazon', description: 'Marketplace seller accounting, import VAT reclaim, and platform reconciliation.' }, { icon: 'REAL', title: 'Construction & real estate', description: 'Project cost tracking, retentions, interim valuations, and real estate VAT rules.' }, { icon: 'SAAS', title: 'Technology & SaaS', description: 'Startup accounting, cap table support, SaaS revenue recognition, and funding-ready reporting.' }, { icon: 'HC', title: 'Healthcare & clinics', description: 'Medical practice accounting, insurance receivables, and healthcare VAT treatment.' }, { icon: 'LOG', title: 'Logistics & trading', description: 'Multi-currency reconciliation, import/export VAT, customs duty, and supply chain cost accounting.' }
      ], services: ['Restaurant & Cafe Accounting UAE', 'F&B VAT Filing & POS Integration UAE', 'Ecommerce Accounting Dubai', 'Amazon Seller Accounting UAE', 'Shopify & WooCommerce Accounting UAE', 'Construction & Project Cost Accounting UAE', 'Real Estate Accounting & VAT UAE', 'Healthcare & Clinic Accounting UAE', 'Logistics & Trading Company Accounting UAE', 'Technology & SaaS Startup Accounting UAE', 'Freelancer Tax & Sole Establishment UAE', 'Retail & Consumer Goods Accounting UAE', 'Hospitality & Hotel Accounting UAE', 'Manufacturing Cost Accounting UAE', 'SME Accounting & Advisory UAE', 'Family Business Accounting UAE', 'Holding Company Accounting UAE', 'Oil & Gas Sector Accounting UAE']
    }
  ];

  private aliases: Record<string, string> = {
    'tax-compliance': 'tax', 'audit-assurance': 'audit', 'digital-ai': 'digital', 'advisory-strategy': 'advisory', 'business-setup': 'corporate', compliance: 'regulatory', industries: 'industry'
  };

  currentServiceId = computed(() => {
    const id = this.params()?.get('id') || 'tax';
    return this.aliases[id] || id;
  });

  currentService = computed(() => this.services.find((service) => service.id === this.currentServiceId()));

  constructor() {
    effect(() => {
      const service = this.currentService();
      if (!service) return;

      this.seoService.setPage({
        title: `${service.title} | BookLean Global UAE`,
        description: service.guide,
        path: `/${this.regionDataService.currentRegion()}/service/${service.id}`,
        structuredData: this.serviceStructuredData(service),
      });
    });
  }

  private serviceStructuredData(service: RichService): unknown[] {
    const siteUrl = 'https://www.bookleanglobal.com';
    const url = `${siteUrl}/${this.regionDataService.currentRegion()}/service/${service.id}`;

    return [
      {
        '@context': 'https://schema.org',
        '@type': 'Service',
        '@id': `${url}#service`,
        name: service.title,
        description: service.guide,
        serviceType: service.shortTitle,
        areaServed: {
          '@type': 'Country',
          name: 'United Arab Emirates',
        },
        provider: {
          '@type': 'AccountingService',
          '@id': `${siteUrl}/#organization`,
          name: 'BookLean Global',
          url: siteUrl,
          telephone: '+971526203995',
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: `${service.shortTitle} services`,
          itemListElement: service.services.map((item, index) => ({
            '@type': 'Offer',
            position: index + 1,
            itemOffered: {
              '@type': 'Service',
              name: item,
            },
          })),
        },
      },
      this.breadcrumbStructuredData([
        { name: 'Home', url: `${siteUrl}/uae/home` },
        { name: 'Services', url: `${siteUrl}/uae/home#services` },
        { name: service.shortTitle, url },
      ]),
    ];
  }

  private breadcrumbStructuredData(items: { name: string; url: string }[]): unknown {
    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: item.url,
      })),
    };
  }

  openBookingModal(event: Event) {
    event.preventDefault();
    this.bookingService.open(event);
  }
}
