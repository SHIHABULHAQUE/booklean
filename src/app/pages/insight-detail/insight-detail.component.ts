import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  effect,
  inject,
} from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { BookingModalService } from '../../services/booking-modal.service';
import { RegionDataService } from '../../services/region-data.service';
import { FooterComponent } from '../../components/footer/footer.component';
import { type ReferenceInsightContent, referenceInsightContent } from './reference-insight-content';
import { type ReferenceInsightPanel, referenceInsightPanels } from './reference-insight-panels';
import { SeoService } from '../../services/seo.service';

interface InsightDetail {
  id: string;
  tag: string;
  readTime: string;
  title: string;
  summary: string;
  whyItMatters: string;
  keyPoints: string[];
  actionPlan: string[];
}

interface GuideSection {
  title: string;
  body: string;
  points: string[];
}

@Component({
  selector: 'app-insight-detail',
  standalone: true,
  imports: [RouterLink, FooterComponent],
  templateUrl: './insight-detail.component.html',
  styleUrl: '../industry-detail/industry-detail.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InsightDetailComponent {
  regionDataService = inject(RegionDataService);
  bookingService = inject(BookingModalService);
  private seoService = inject(SeoService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private params = toSignal(this.route.paramMap);
  private queryParams = toSignal(this.route.queryParamMap);

  readonly insights: InsightDetail[] = [
    {
      id: 'corporate-tax',
      tag: 'Tax & Compliance Guide',
      readTime: '10 min read',
      title: 'UAE Corporate Tax 9%, The Complete Guide Every SME Needs Right Now',
      summary:
        'Before BookLean, most clients had no idea they were already late on Corporate Tax registration. This guide covers who must register, what income is taxable, free zone exemption rules, Small Business Relief, and every critical deadline in plain language.',
      whyItMatters:
        'Corporate Tax is no longer a once-a-year accounting task. It affects bookkeeping, owner payments, related-party transactions, free zone status, and every management decision that changes taxable profit.',
      keyPoints: [
        '9% Corporate Tax applies to taxable profits above AED 375,000.',
        'All UAE businesses must assess registration and filing obligations.',
        'Qualifying Free Zone status requires substance, qualifying income, and proper records.',
        'Transfer pricing and related-party documentation matter for SMEs too.',
      ],
      actionPlan: [
        'Confirm your registration and first filing deadline.',
        'Reconcile books monthly, not at year-end.',
        'Review related-party transactions and owner withdrawals.',
        'Prepare tax schedules before the financial year closes.',
      ],
    },
    {
      id: 'vat',
      tag: 'Tax & Compliance Guide',
      readTime: '8 min read',
      title: 'UAE VAT Filing, Deadlines, Common Mistakes & What the FTA Actually Checks',
      summary:
        'One wrong VAT return can trigger an FTA audit. After handling hundreds of UAE VAT filings, BookLean knows where businesses go wrong, from registration to audits, in plain language.',
      whyItMatters:
        'VAT penalties usually begin with small bookkeeping gaps: missing invoices, wrong tax codes, late reconciliations, or incorrect treatment of imports and credit notes.',
      keyPoints: [
        'VAT returns must match books, invoices, bank records, and import documents.',
        'Credit notes, discounts, and exempt supplies require careful coding.',
        'Voluntary disclosure can reduce risk when errors are found early.',
        'FTA audits often focus on source documents and reconciliation trails.',
      ],
      actionPlan: [
        'Close VAT reconciliations before the filing week.',
        'Review top suppliers and customer invoices for TRN accuracy.',
        'Check imports, reverse charge, and zero-rated sales separately.',
        'Keep a VAT evidence folder for every period.',
      ],
    },
    {
      id: 'peppol',
      tag: 'Tax & Compliance Guide',
      readTime: '9 min read',
      title: 'PEPPOL E-Invoicing UAE 2026, Is Your Business Ready for Mandatory Digital Tax?',
      summary:
        'The UAE is rolling out mandatory PEPPOL e-invoicing. This guide breaks down exactly what PEPPOL means, who is affected first, and the 5-step checklist to get ready.',
      whyItMatters:
        'E-invoicing changes the invoice lifecycle. Businesses need clean master data, compliant invoice fields, ERP readiness, and tested XML workflows before go-live.',
      keyPoints: [
        'Invoice data quality becomes a compliance requirement.',
        'ERP and accounting systems need mapping and validation.',
        'Supplier and customer master data must be cleaned.',
        'Testing should happen before the mandate affects live operations.',
      ],
      actionPlan: [
        'Audit your current invoice fields and tax codes.',
        'Identify ERP or accounting software gaps.',
        'Clean customer and supplier master data.',
        'Run a PEPPOL readiness implementation plan.',
      ],
    },
    {
      id: 'esr-aml',
      tag: 'Tax & Compliance Guide',
      readTime: '7 min read',
      title: 'ESR, UBO & AML in UAE, What Every Company Must Do to Stay Compliant',
      summary:
        'Three compliance obligations catch most UAE businesses unprepared. This guide explains ESR, UBO registration, and AML requirements with deadlines, penalties, and exactly what BookLean does for you.',
      whyItMatters:
        'Regulatory compliance is often invisible until a bank, authority, or auditor asks for proof. Missing documentation can freeze banking or trigger fines.',
      keyPoints: [
        'ESR applies to relevant activities and needs annual assessment.',
        'UBO records must remain accurate after ownership changes.',
        'AML obligations can apply beyond financial institutions.',
        'Banks increasingly request KYC and compliance evidence.',
      ],
      actionPlan: [
        'Run an annual ESR and AML applicability review.',
        'Update UBO records after any ownership change.',
        'Create AML policies and staff training evidence.',
        'Keep compliance documents ready for bank reviews.',
      ],
    },
    {
      id: 'transfer-pricing',
      tag: 'Tax & Compliance Guide',
      readTime: '8 min read',
      title: 'Transfer Pricing in UAE, Rules, Documentation & What the FTA Expects',
      summary:
        'Related party transactions are one of the FTA top audit priorities. This guide explains the arm length principle, who must prepare documentation, and how to avoid expensive mistakes under UAE CT law.',
      whyItMatters:
        'Transfer pricing is where tax, accounting, and ownership decisions meet. Poor documentation can turn normal group transactions into FTA risk.',
      keyPoints: [
        "Related-party transactions should follow arm's length principles.",
        'Management fees, loans, royalties, and shared costs need support.',
        'Free zone businesses must be especially careful.',
        'Documentation should be prepared before filing.',
      ],
      actionPlan: [
        'List all related parties and connected persons.',
        'Review pricing policies and agreements.',
        'Benchmark material transactions where needed.',
        'Maintain documentation alongside Corporate Tax workpapers.',
      ],
    },
    {
      id: 'mainland-freezone',
      tag: 'Business & Growth Guide',
      readTime: '12 min read',
      title: "Mainland vs Freezone UAE, The Honest Comparison Most Consultants Won't Give You",
      summary:
        'Freezone sounds cheaper. Mainland sounds complicated. The truth is more nuanced, and the wrong choice costs more than money. BookLean has set up 300+ UAE companies and explains the real comparison.',
      whyItMatters:
        'The wrong structure can create banking friction, licence restrictions, tax inefficiency, and expensive restructuring later.',
      keyPoints: [
        'Mainland can be better for UAE market access.',
        'Free zones can offer operational and tax advantages when conditions are met.',
        'Banking, visas, and activity codes matter as much as licence cost.',
        'Corporate Tax should be considered before incorporation.',
      ],
      actionPlan: [
        'Map customers, suppliers, activities, and visa needs.',
        'Compare banking and office requirements.',
        'Assess QFZP eligibility where relevant.',
        'Choose structure before signing leases or contracts.',
      ],
    },
    {
      id: 'payroll-wps',
      tag: 'Business & Growth Guide',
      readTime: '8 min read',
      title: 'UAE Payroll & WPS Compliance Guide 2026, What Every UAE Employer Must Know',
      summary:
        'WPS non-compliance can freeze hiring and suspend your licence. This guide explains Wage Protection System rules, SIF files, gratuity, and how to stay fully compliant.',
      whyItMatters:
        'Payroll errors quickly become employee disputes, WPS blocks, licence risk, and messy end-of-service calculations.',
      keyPoints: [
        'WPS requires accurate SIF files and timely salary payment.',
        'Allowances, deductions, and unpaid leave must be tracked properly.',
        'End-of-service gratuity should be accrued and reviewed.',
        'Payroll records must connect with accounting and HR records.',
      ],
      actionPlan: [
        'Standardize payroll inputs monthly.',
        'Review employee master data and bank details.',
        'Reconcile payroll with accounting entries.',
        'Track gratuity and leave liabilities.',
      ],
    },
    {
      id: 'cashflow',
      tag: 'Business & Growth Guide',
      readTime: '7 min read',
      title:
        'Cash Flow Management for UAE SMEs, Why Profitable Businesses Run Out of Cash and How to Fix It',
      summary:
        'Profit on paper does not equal cash in the bank. In the UAE, quarterly VAT, long payment terms, and mandatory payroll can create a dangerous gap between revenue and cash.',
      whyItMatters:
        'Profitable businesses still fail when cash timing is unmanaged. VAT, payroll, supplier cycles, and slow receivables can quietly create pressure.',
      keyPoints: [
        'Cash flow is different from profit.',
        'VAT collected is not working capital.',
        'Receivable ageing needs weekly attention.',
        'Rolling forecasts beat annual budgets for SMEs.',
      ],
      actionPlan: [
        'Create a 13-week cash forecast.',
        'Review receivables ageing every week.',
        'Separate VAT reserves from operating cash.',
        'Plan payroll and supplier payment cycles.',
      ],
    },
    {
      id: 'startup-uae',
      tag: 'Business & Growth Guide',
      readTime: '9 min read',
      title: 'Startup in UAE, The Complete Financial Setup Checklist Every Founder Needs',
      summary:
        'Most UAE startup financial mistakes happen in the first 6 months: wrong structure, no bookkeeping, and missed registrations. This guide gives founders the complete checklist and order of action.',
      whyItMatters:
        'Startups move fast, but messy finance slows fundraising and creates avoidable compliance risk.',
      keyPoints: [
        'Set chart of accounts before transactions begin.',
        'Separate founder and company money immediately.',
        'Track burn, runway, and monthly recurring revenue.',
        'Prepare investor-ready reporting before fundraising starts.',
      ],
      actionPlan: [
        'Open a dedicated business bank account.',
        'Set up cloud accounting and document capture.',
        'Review VAT and Corporate Tax obligations.',
        'Create a monthly founder dashboard.',
      ],
    },
    {
      id: 'golden-visa',
      tag: 'Business & Growth Guide',
      readTime: '6 min read',
      title: 'UAE Golden Visa, Who Qualifies, What It Costs & How to Apply',
      summary:
        'The UAE Golden Visa is one of the most valuable residency programmes in the world: renewable 5 or 10-year residency, no local sponsor required, and strong business mobility.',
      whyItMatters:
        'Golden Visa applications depend on clean evidence. Financial records, ownership documents, and business proof must be organized before submission.',
      keyPoints: [
        'Eligibility varies by investor, entrepreneur, professional, and property routes.',
        'Company ownership and financial evidence often matter.',
        'Documentation gaps delay approvals.',
        'Family sponsorship planning should be considered early.',
      ],
      actionPlan: [
        'Confirm the right eligibility route.',
        'Prepare ownership, licence, and financial documents.',
        'Review bank and accounting records.',
        'Submit a complete application pack.',
      ],
    },
    {
      id: 'restaurant-vat',
      tag: 'Industry Insight',
      readTime: '7 min read',
      title: 'Restaurant & F&B VAT in UAE, What Every Owner Must Know Before Their Next FTA Filing',
      summary:
        'UAE restaurant VAT has more complexity than most owners realise: dine-in, takeaway, delivery platforms, staff meals, tourist refunds, and excise tax all have different rules.',
      whyItMatters:
        'F&B VAT mistakes often hide in POS exports, discounts, refunds, service charges, and delivery platform settlements.',
      keyPoints: [
        'POS and bank deposits should reconcile daily.',
        'Delivery platform fees and settlements need separate coding.',
        'Discounts and refunds affect VAT reporting.',
        'Food cost reporting helps protect margin.',
      ],
      actionPlan: [
        'Connect POS, bank, and accounting records.',
        'Review delivery platform settlement reports.',
        'Reconcile VAT output with sales reports.',
        'Monitor food cost and gross margin monthly.',
      ],
    },
    {
      id: 'ecommerce-tax',
      tag: 'Industry Insight',
      readTime: '8 min read',
      title: 'Ecommerce & Amazon Sellers in UAE, Your Complete Tax & VAT Guide',
      summary:
        'UAE ecommerce VAT is more complex than most sellers realise. Platform commissions, import VAT, FBA obligations, and digital service rules all need correct handling.',
      whyItMatters:
        'Marketplace reports rarely match bank deposits directly. Without reconciliation, VAT, revenue, and margin become unreliable.',
      keyPoints: [
        'Amazon and Noon fees must be separated from revenue.',
        'Import VAT and customs duty affect landed cost.',
        'Refunds and returns need tax adjustments.',
        'Payment gateways should be reconciled to bank deposits.',
      ],
      actionPlan: [
        'Reconcile every marketplace payout.',
        'Track landed cost by SKU.',
        'Review import VAT support monthly.',
        'Separate domestic and cross-border sales.',
      ],
    },
    {
      id: 'realestate-vat',
      tag: 'Industry Insight',
      readTime: '8 min read',
      title: 'Real Estate VAT in UAE, What Developers, Investors & Agents Must Know',
      summary:
        'UAE property VAT has some of the most complex rules in the region. First supply, subsequent supply, residential versus commercial property, and evidence all matter.',
      whyItMatters:
        'Real estate VAT depends on property type, transaction structure, timing, and evidence. Wrong classification can be expensive.',
      keyPoints: [
        'Commercial and residential property can have different VAT treatment.',
        'Development input VAT requires supporting records.',
        'Retentions and advances affect timing.',
        'DLD and contract documents should tie to accounting.',
      ],
      actionPlan: [
        'Classify property and transaction types.',
        'Review input VAT on development costs.',
        'Reconcile contracts, DLD records, and invoices.',
        'Prepare property VAT workpapers.',
      ],
    },
    {
      id: 'freelancer-tax',
      tag: 'Industry Insight',
      readTime: '6 min read',
      title: 'Freelancer Tax & Accounting in UAE 2026',
      summary:
        'What freelancers and sole establishments need to know about invoicing, deductible expenses, VAT, Corporate Tax, and clean records.',
      whyItMatters:
        'Freelancers often discover tax obligations late because personal and business transactions are mixed together.',
      keyPoints: [
        'Business income and expenses should be separated.',
        'VAT registration thresholds must be monitored.',
        'Corporate Tax may apply to business profits.',
        'Clean invoices and bank records support visa and bank reviews.',
      ],
      actionPlan: [
        'Use a separate business bank account.',
        'Track invoices and expenses monthly.',
        'Monitor VAT and Corporate Tax thresholds.',
        'Prepare annual accounts before filing deadlines.',
      ],
    },
    {
      id: 'healthcare-vat',
      tag: 'Industry Insight',
      readTime: '7 min read',
      title:
        'Healthcare VAT Exemptions in UAE, Zero-Rated Services, Cosmetic Procedures & What Your Clinic Must Know',
      summary:
        'UAE healthcare VAT has three categories: zero-rated, standard-rated, and exempt. Applying the wrong one creates liability or refund obligations for clinics.',
      whyItMatters:
        'Healthcare VAT treatment can be nuanced. Mixed supplies, insurance billing, and documentation gaps can distort both tax and cash flow.',
      keyPoints: [
        'Not every healthcare-related sale has the same VAT treatment.',
        'Insurance receivables need careful reconciliation.',
        'Exempt and taxable supplies should be tracked separately.',
        'Clinic revenue should reconcile with operational systems.',
      ],
      actionPlan: [
        'Review VAT classification by service type.',
        'Reconcile insurance claims and collections.',
        'Separate exempt and taxable revenue streams.',
        'Keep source documents ready for FTA review.',
      ],
    },
  ];

  currentInsight = computed(() => {
    const id = this.params()?.get('id') || 'corporate-tax';
    return this.insights.find((insight) => insight.id === id);
  });

  backFragment = computed(() =>
    this.queryParams()?.get('from') === 'guides' ? 'tax-accounting-guides' : undefined,
  );

  constructor() {
    effect(() => {
      const insight = this.currentInsight();
      if (!insight) return;

      this.seoService.setPage({
        title: `${this.displayTitle(insight)} | BookLean Global UAE`,
        description: this.displaySummary(insight),
        path: `/${this.regionDataService.currentRegion()}/insight/${insight.id}`,
        structuredData: this.insightStructuredData(insight),
      });
    });
  }

  private insightStructuredData(insight: InsightDetail): unknown[] {
    const siteUrl = 'https://www.bookleanglobal.com';
    const url = `${siteUrl}/${this.regionDataService.currentRegion()}/insight/${insight.id}`;
    const title = this.displayTitle(insight);
    const summary = this.displaySummary(insight);

    return [
      {
        '@context': 'https://schema.org',
        '@type': 'Article',
        '@id': `${url}#article`,
        headline: title,
        description: summary,
        url,
        inLanguage: 'en-AE',
        author: {
          '@type': 'Person',
          '@id': `${siteUrl}/#sunil-radhakrishnan`,
          name: 'Sunil P Radhakrishnan',
        },
        publisher: {
          '@type': 'Organization',
          '@id': `${siteUrl}/#organization`,
          name: 'BookLean Global',
          logo: {
            '@type': 'ImageObject',
            url: `${siteUrl}/logo.jpg`,
          },
        },
        about: insight.keyPoints.map((point) => ({ '@type': 'Thing', name: point })),
      },
      this.breadcrumbStructuredData([
        { name: 'Home', url: `${siteUrl}/uae/home` },
        { name: 'Insights', url: `${siteUrl}/uae/home#tax-accounting-guides` },
        { name: title, url },
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

  referenceContent(insight: InsightDetail): ReferenceInsightContent | undefined {
    return referenceInsightContent[insight.id];
  }

  referencePanel(insight: InsightDetail): ReferenceInsightPanel | undefined {
    const panel = referenceInsightPanels[insight.id];
    if (!panel) {
      return undefined;
    }

    return {
      heroHtml: panel.heroHtml,
      bodyHtml: this.hydrateGuideLinks(panel.bodyHtml),
    };
  }

  displayTag(insight: InsightDetail): string {
    return this.referenceContent(insight)?.tag || insight.tag;
  }

  displayTitle(insight: InsightDetail): string {
    return this.referenceContent(insight)?.title || insight.title;
  }

  displaySummary(insight: InsightDetail): string {
    return this.referenceContent(insight)?.summary || insight.summary;
  }

  guideSections(insight: InsightDetail): GuideSection[] {
    const reference = this.referenceContent(insight);
    if (reference?.sections.length) {
      return reference.sections.map((section) => ({
        title: section.title,
        body: section.body || this.displaySummary(insight),
        points: section.points.length ? section.points : insight.keyPoints,
      }));
    }

    return [
      {
        title: 'Complete guide overview',
        body: insight.summary,
        points: insight.keyPoints,
      },
      {
        title: 'Why this matters for UAE businesses',
        body: insight.whyItMatters,
        points: this.riskPoints(insight),
      },
      {
        title: 'Practical action plan',
        body: 'Use these steps to move from general guidance to a clean, deadline-ready workflow for your exact UAE business.',
        points: insight.actionPlan,
      },
      {
        title: 'Documents and records to prepare',
        body: 'These records make the advice practical and help your accountant test the position instead of guessing.',
        points: this.evidencePoints(insight.id),
      },
      {
        title: 'How BookLean applies this',
        body: 'BookLean turns the guide into an operating workflow: clean books, correct tax treatment, documented positions, and management visibility before deadlines arrive.',
        points: this.bookleanPoints(insight.id),
      },
    ];
  }

  private riskPoints(insight: InsightDetail): string[] {
    return [
      `Primary risk: ${insight.keyPoints[0]}`,
      `Common weak spot: ${insight.keyPoints[1]}`,
      `Audit-ready control: ${insight.keyPoints[2]}`,
      `Management decision impact: ${insight.keyPoints[3]}`,
    ];
  }

  private evidencePoints(id: string): string[] {
    const shared = [
      'Trade licence and entity structure',
      'Accounting ledger and trial balance',
      'Bank statements and reconciliation reports',
      'Invoices, contracts, and supporting schedules',
    ];
    const byId: Record<string, string[]> = {
      'corporate-tax': [
        'Corporate Tax registration details',
        'Financial statements and tax schedules',
        'Related-party and connected-person records',
        'Free zone qualifying income analysis',
      ],
      vat: [
        'VAT returns and FTA filings',
        'Tax invoices and credit notes',
        'Import/export and reverse-charge documents',
        'VAT reconciliation by filing period',
      ],
      peppol: [
        'Invoice field mapping',
        'ERP or accounting software configuration',
        'Customer and supplier master data',
        'Sample XML or e-invoice test outputs',
      ],
      'esr-aml': [
        'UBO register',
        'ESR applicability assessment',
        'AML policy and KYC files',
        'GoAML or regulatory filing evidence',
      ],
      'transfer-pricing': [
        'Related-party register',
        'Intercompany agreements',
        'Pricing policy and benchmarking support',
        'Management fee, loan, and royalty schedules',
      ],
      'mainland-freezone': [
        'Activity list and customer map',
        'Licence options and visa needs',
        'Banking and office requirements',
        'QFZP eligibility notes',
      ],
      'payroll-wps': [
        'Employee master data',
        'Salary information file records',
        'Leave and gratuity calculations',
        'Payroll accounting journals',
      ],
      cashflow: [
        'Receivable ageing',
        'Payable ageing',
        '13-week cash forecast',
        'VAT, payroll, and supplier payment calendar',
      ],
      'startup-uae': [
        'Founder and company bank separation',
        'Cloud accounting setup',
        'VAT and Corporate Tax obligation review',
        'Investor reporting pack',
      ],
      'golden-visa': [
        'Eligibility route documents',
        'Ownership and licence records',
        'Financial statements or bank proof',
        'Family sponsorship documents where relevant',
      ],
      'restaurant-vat': [
        'POS exports and sales summaries',
        'Delivery platform settlement reports',
        'Food cost and inventory records',
        'Staff meal and discount records',
      ],
      'ecommerce-tax': [
        'Marketplace payout reports',
        'Payment gateway settlements',
        'Customs and import VAT records',
        'SKU cost and refund reports',
      ],
      'realestate-vat': [
        'Sales or lease contracts',
        'DLD and escrow documents',
        'Project cost schedules',
        'Retention and advance payment records',
      ],
      'freelancer-tax': [
        'Business invoices',
        'Expense receipts',
        'Separate bank records',
        'VAT and Corporate Tax threshold tracking',
      ],
      'healthcare-vat': [
        'Clinic revenue reports',
        'Insurance claim records',
        'Service VAT classification',
        'Medical necessity documentation',
      ],
    };

    return byId[id] || shared;
  }

  private bookleanPoints(id: string): string[] {
    const common = [
      'Review the current setup and identify compliance gaps',
      'Clean up the bookkeeping and source records',
      'Prepare deadline-ready schedules and filings',
      'Give you a clear monthly dashboard for decisions',
    ];
    const byId: Record<string, string[]> = {
      'corporate-tax': [
        'Register and file Corporate Tax correctly',
        'Assess QFZP and Small Business Relief positions',
        'Prepare CT schedules and supporting workpapers',
        'Review related-party documentation before filing',
      ],
      vat: [
        'Reconcile VAT returns to books and bank records',
        'Correct tax-code and invoice treatment',
        'Prepare voluntary disclosure support where needed',
        'Keep every VAT period audit-ready',
      ],
      peppol: [
        'Map invoice data and ERP gaps',
        'Clean customer and supplier master data',
        'Coordinate PEPPOL readiness implementation',
        'Test the workflow before enforcement',
      ],
      'payroll-wps': [
        'Prepare WPS and SIF workflows',
        'Reconcile payroll journals to accounting',
        'Track gratuity and leave liabilities',
        'Keep MOHRE-facing records clean',
      ],
      cashflow: [
        'Build a rolling cash forecast',
        'Separate VAT reserves from operating cash',
        'Track receivables and payables weekly',
        'Use CFO review calls to act early',
      ],
      'restaurant-vat': [
        'Connect POS, delivery, bank, and accounting records',
        'Review VAT treatment for dine-in, takeaway, discounts, and staff meals',
        'Track food cost and outlet margins',
        'Prepare FTA-ready restaurant records',
      ],
      'ecommerce-tax': [
        'Reconcile Amazon, Noon, Shopify, gateways, and banks',
        'Track import VAT and landed cost',
        'Separate fees, refunds, and revenue',
        'Report SKU-level profitability',
      ],
      'realestate-vat': [
        'Review property VAT classification',
        'Track project cost, retention, and advance payment treatment',
        'Reconcile DLD and contract records',
        'Prepare developer or contractor MIS',
      ],
      'healthcare-vat': [
        'Classify healthcare revenue by VAT treatment',
        'Reconcile insurance claims and collections',
        'Review blocked input VAT areas',
        'Prepare clinic performance reporting',
      ],
    };

    return byId[id] || common;
  }

  openBookingModal(event: Event) {
    event.preventDefault();
    this.bookingService.open(event);
  }

  handleGuideClick(event: Event) {
    const target = event.target as HTMLElement | null;
    const guideLink = target?.closest<HTMLElement>('[data-guide-id]');
    const bookingLink = target?.closest<HTMLElement>(
      '[data-booking-cta], .btn-cta-primary, a.btn-primary[href="#contact"]',
    );

    if (guideLink?.dataset['guideId']) {
      event.preventDefault();
      this.router.navigate(
        ['/', this.regionDataService.currentRegion(), 'insight', guideLink.dataset['guideId']],
        {
          queryParams:
            this.queryParams()?.get('from') === 'guides' ? { from: 'guides' } : undefined,
        },
      );
      return;
    }

    if (bookingLink) {
      event.preventDefault();
      this.bookingService.open(event);
    }
  }

  private hydrateGuideLinks(bodyHtml: string): string {
    return bodyHtml.replace(/href="#"\s+data-guide-id="([^"]+)"/g, (_match, guideId: string) => {
      return `href="${this.insightHref(guideId)}" data-guide-id="${guideId}"`;
    });
  }

  private insightHref(guideId: string): string {
    const basePath = `/${this.regionDataService.currentRegion()}/insight/${guideId}`;
    return this.queryParams()?.get('from') === 'guides' ? `${basePath}?from=guides` : basePath;
  }
}
