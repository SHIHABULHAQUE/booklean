import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  effect,
  inject,
} from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { BookingModalService } from '../../services/booking-modal.service';
import { RegionDataService } from '../../services/region-data.service';
import { FooterComponent } from '../../components/footer/footer.component';
import {
  type ReferenceIndustryContent,
  referenceIndustryContent,
} from './reference-industry-content';
import { type ReferenceIndustryPanel, referenceIndustryPanels } from './reference-industry-panels';
import { SeoService } from '../../services/seo.service';

interface DetailCard {
  icon: string;
  title: string;
  description: string;
}

interface IndustryDetail {
  id: string;
  icon: string;
  title: string;
  category: string;
  tagline: string;
  pain: string;
  guide: string;
  outcomes: DetailCard[];
  services: string[];
}

interface DetailSection {
  title: string;
  body: string;
  points: string[];
}

@Component({
  selector: 'app-industry-detail',
  standalone: true,
  imports: [RouterLink, FooterComponent],
  templateUrl: './industry-detail.component.html',
  styleUrl: './industry-detail.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IndustryDetailComponent {
  regionDataService = inject(RegionDataService);
  bookingService = inject(BookingModalService);
  private seoService = inject(SeoService);
  private route = inject(ActivatedRoute);
  private params = toSignal(this.route.paramMap);
  private queryParams = toSignal(this.route.queryParamMap);
  private readonly restaurantLawPanelHtml = `<div class="ind-law-box">
            <h5>📋 UAE Laws &amp; FTA Rules — Restaurants &amp; F&amp;B (Verified)</h5>
            <ul>
              <li><strong>1. Standard VAT rate – 5%:</strong>UAE VAT Law (Federal Decree Law No. 8 of 2017) sets a standard VAT rate of 5% on most supplies of goods and services, including restaurant food and beverage.</li>
              <li><strong>2. Mandatory VAT registration – AED 375,000:</strong>Restaurants must register for VAT when taxable supplies in the last 12 months exceed AED 375,000, as per FTA guidance and Cabinet Decision No. 52 of 2017 (Executive Regulations).</li>
              <li><strong>3. VAT filing – VAT201 returns (usually quarterly):</strong>Most F&amp;B businesses file VAT201 returns every quarter via the FTA portal; wrong or late returns can trigger administrative penalties under the Tax Procedures Law and updated FTA fine schedule.</li>
              <li><strong>4. Staff meals and hospitality – deemed supplies rules</strong><br>Free or discounted staff meals and hospitality can be treated as “deemed supplies” if they go beyond normal business needs, and may require output VAT at 5% under VAT Law Articles on deemed supply and the Executive Regulations.</li>
              <li><strong>5. Promotional free meals &amp; discounts</strong><br>Promotional meals given free or at deep discount to customers must follow specific VAT rules; some are taxable deemed supplies, others can be treated as normal taxable supplies with discounted value.</li>
              <li><strong>6. Input VAT recovery on costs</strong><br>Restaurants can usually recover input VAT on ingredients, rent, utilities, and equipment that are used for taxable supplies, following the input tax recovery conditions in the VAT Executive Regulations.</li>
              <li><strong>7. Excise tax – energy &amp; carbonated drinks</strong><br>Excise tax is 100% on energy drinks and 50% on carbonated drinks, with an additional sugar based excise from 1 January 2026 that charges up to AED 1.09 per litre on high sugar beverages.</li>
              <li><strong>8. Sugar based excise – 2026 bands</strong><br>New 2026 model:<br>o 8g or more sugar per 100 ml → AED 1.09 per litre.<br>o 5g to less than 8g per 100 ml → AED 0.79 per litre.<br>o Less than 5g sugar or only artificial sweeteners → 0 AED per litre.</li>
              <li><strong>9. Tourist VAT Refund Scheme – Planet Tax Free</strong><br>Overseas tourists (18+) can reclaim VAT on eligible retail purchases through the Planet Tax Free system; restaurant meals and most F&amp;B services are generally excluded from refunds.</li>
              <li><strong>10. Tourism Dirham &amp; hotel fees</strong><br>Tourism Dirham and hotel tourism fees apply to accommodation under DET resolutions, but food and beverage sold by the restaurant is still subject to 5% VAT unless specifically exempt or zero rated.</li>
              <li><strong>11. FTA penalties – updated schedule</strong><br>The FTA penalty framework (including Cabinet Decisions and 2026 updates) sets fines for late registration, late filing, late payment and incorrect VAT returns; staying compliant avoids cumulative % penalties on unpaid tax.</li>
              <li><strong>12. E invoicing mandate – Peppol 2026–2027</strong><br>UAE has announced Peppol based e invoicing legislation (Ministerial Decisions 243 &amp; 244 of 2025); phases start from July 2026 with full mandatory B2B/B2G e invoicing for larger businesses from January 2027.</li>
            </ul>
          </div>`;

  readonly industries: IndustryDetail[] = [
    {
      id: 'restaurant',
      icon: 'F&B',
      category: 'Food, Retail & Commerce',
      title: 'Restaurants & F&B, VAT, POS Reconciliation & Cost Control',
      tagline: 'VAT, POS, food cost, and outlet-level margin clarity.',
      pain: 'Running a restaurant in UAE means managing VAT across dine-in, takeaway, delivery platforms, and staff meals, each with distinct rules under UAE VAT Law. One wrong classification can build an FTA liability every quarter.',
      guide:
        'BookLean connects your POS, delivery platforms, payroll, VAT, and cost controls into one clean monthly reporting flow built for UAE F&B operators.',
      outcomes: [
        {
          icon: 'POS',
          title: 'POS and delivery reconciled',
          description:
            'Daily sales from dine-in, Talabat, Deliveroo, Noon, and aggregators reconciled against bank and cash.',
        },
        {
          icon: 'VAT',
          title: 'Correct VAT treatment',
          description:
            'Dine-in, takeaway, discounts, service charges, and refunds classified correctly for UAE VAT.',
        },
        {
          icon: 'COGS',
          title: 'Food cost visibility',
          description:
            'Ingredient cost, wastage, and gross margin monitored at outlet and brand level.',
        },
        {
          icon: 'WPS',
          title: 'Payroll and WPS handled',
          description:
            'Shift-heavy payroll, WPS processing, gratuity, and staff cost reporting handled on time.',
        },
      ],
      services: [
        'Restaurant bookkeeping UAE',
        'F&B VAT filing UAE',
        'POS integration accounting',
        'Food cost and margin reports',
        'Delivery platform reconciliation',
        'Multi-outlet consolidation',
        'WPS payroll for restaurant teams',
        'FTA audit-ready records',
      ],
    },
    {
      id: 'retail',
      icon: 'RTL',
      category: 'Food, Retail & Commerce',
      title: 'Retail & Consumer Brand Accounting UAE',
      tagline: 'Inventory, margins, VAT, and cash flow in one clean view.',
      pain: 'Retail brands lose margin visibility when inventory, discounts, returns, ecommerce sales, and store cash are not reconciled daily.',
      guide:
        'BookLean builds retail accounting around inventory movement, channel profitability, VAT accuracy, and management reporting.',
      outcomes: [
        {
          icon: 'INV',
          title: 'Inventory margin clarity',
          description:
            'Stock, COGS, shrinkage, and margin reports aligned with your accounting records.',
        },
        {
          icon: 'CH',
          title: 'Channel-wise reporting',
          description:
            'Store, marketplace, wholesale, and ecommerce performance separated for better decisions.',
        },
        {
          icon: 'VAT',
          title: 'VAT on returns and discounts',
          description: 'Credit notes, promotions, refunds, and VAT adjustments handled cleanly.',
        },
        {
          icon: 'CASH',
          title: 'Cash and card reconciliation',
          description: 'Payment gateway, POS, and bank deposits reconciled without manual chasing.',
        },
      ],
      services: [
        'Retail bookkeeping UAE',
        'Inventory accounting',
        'Store cash reconciliation',
        'VAT return filing for retail',
        'Marketplace sales accounting',
        'Margin and SKU reporting',
        'Payment gateway reconciliation',
        'Monthly MIS for consumer brands',
      ],
    },
    {
      id: 'ecommerce',
      icon: 'ECOM',
      category: 'Food, Retail & Commerce',
      title: 'Ecommerce & Amazon Sellers, UAE VAT, FBA Obligations & Marketplace Accounting',
      tagline: 'Cross-border tax, marketplace payouts, and import VAT under control.',
      pain: 'UAE ecommerce is growing fast, but VAT obligations are complex and widely misunderstood. Amazon FBA UAE, Noon, Shopify, and cross-border digital services each carry distinct VAT treatment.',
      guide:
        'BookLean reconciles marketplace payouts, import VAT, product costs, refunds, and gateway fees into audit-ready ecommerce books.',
      outcomes: [
        {
          icon: 'AMZ',
          title: 'Marketplace payouts reconciled',
          description: 'Amazon, Noon, Shopify, Stripe, PayPal, and banks matched properly.',
        },
        {
          icon: 'VAT',
          title: 'Import VAT and customs handled',
          description: 'Import VAT, duties, landed cost, and reclaim support organized clearly.',
        },
        {
          icon: 'SKU',
          title: 'Product profitability',
          description: 'SKU-level revenue, fees, cost, refunds, and contribution margin tracked.',
        },
        {
          icon: 'XBRD',
          title: 'Cross-border clarity',
          description: 'UAE and international sales separated for cleaner tax and reporting.',
        },
      ],
      services: [
        'Amazon seller accounting UAE',
        'Shopify bookkeeping UAE',
        'Noon seller reconciliation',
        'Import VAT accounting',
        'Payment gateway reconciliation',
        'Marketplace fee accounting',
        'Ecommerce VAT filing',
        'SKU profitability reporting',
      ],
    },
    {
      id: 'hospitality',
      icon: 'HOT',
      category: 'Food, Retail & Commerce',
      title: 'Hospitality & Tourism Accounting UAE',
      tagline: 'Revenue, tourism fees, payroll, and compliance handled end to end.',
      pain: 'Hotels, tour operators, and hospitality brands need daily revenue control, multi-channel booking reconciliation, VAT, tourism fees, and high-volume payroll accuracy.',
      guide:
        'BookLean gives hospitality operators clean revenue recognition, platform reconciliation, VAT compliance, and management reporting.',
      outcomes: [
        {
          icon: 'REV',
          title: 'Revenue control',
          description: 'Bookings, cancellations, deposits, and channel settlements reconciled.',
        },
        {
          icon: 'FEE',
          title: 'Tourism and VAT compliance',
          description: 'VAT and local fee treatment kept clean for UAE hospitality operations.',
        },
        {
          icon: 'PAY',
          title: 'Payroll accuracy',
          description: 'Shift teams, WPS, gratuity, and staff cost reporting managed monthly.',
        },
        {
          icon: 'MIS',
          title: 'Management reporting',
          description: 'Occupancy, revenue, cost, and profit reports delivered clearly.',
        },
      ],
      services: [
        'Hotel accounting UAE',
        'Tourism business bookkeeping',
        'Booking platform reconciliation',
        'VAT filing hospitality UAE',
        'Payroll and WPS hospitality',
        'Revenue recognition support',
        'Multi-branch consolidation',
        'Monthly hospitality MIS',
      ],
    },
    {
      id: 'realestate',
      icon: 'PROP',
      category: 'Property, Tech & Healthcare',
      title: 'Real Estate & Construction, Property VAT, DLD Fees & Project Accounting',
      tagline: 'DLD, VAT, project costing, retentions, and developer reporting.',
      pain: 'UAE real estate and construction carry complex VAT rules. First supply, subsequent supply, commercial versus residential, and bare land each have different VAT treatment, and mistakes can block input tax recovery.',
      guide:
        'BookLean structures property and construction books around projects, contracts, VAT treatment, cash flow, and audit-ready documentation.',
      outcomes: [
        {
          icon: 'JOB',
          title: 'Project cost control',
          description:
            'Materials, subcontractors, retentions, advances, and overheads tracked by project.',
        },
        {
          icon: 'VAT',
          title: 'Property VAT treatment',
          description:
            'Residential, commercial, lease, sale, and development VAT treatment reviewed properly.',
        },
        {
          icon: 'DLD',
          title: 'DLD and escrow reporting',
          description: 'Developer and property records structured for regulatory and bank review.',
        },
        {
          icon: 'CF',
          title: 'Cash flow forecasting',
          description: 'Project cash inflows, payments, and working capital tracked ahead of time.',
        },
      ],
      services: [
        'Construction accounting UAE',
        'Real estate VAT UAE',
        'Project cost accounting',
        'Retention accounting',
        'Developer financial reporting',
        'DLD transaction support',
        'Escrow-related reporting',
        'Contractor monthly MIS',
      ],
    },
    {
      id: 'tech',
      icon: 'SaaS',
      category: 'Property, Tech & Healthcare',
      title: 'Technology & SaaS Startup Accounting UAE',
      tagline: 'Funding-ready finance for startups and SaaS companies.',
      pain: 'Startups need clean burn, runway, deferred revenue, cap table support, and investor-ready reporting before fundraising pressure arrives.',
      guide:
        'BookLean builds startup finance systems for fundraising, SaaS metrics, cash runway, VAT, payroll, and board-ready reporting.',
      outcomes: [
        {
          icon: 'MRR',
          title: 'SaaS metrics',
          description: 'MRR, churn, CAC, LTV, gross margin, and runway reported clearly.',
        },
        {
          icon: 'FUND',
          title: 'Funding ready',
          description: 'Investor-grade financials, forecasts, budgets, and due diligence packs.',
        },
        {
          icon: 'REV',
          title: 'Revenue recognition',
          description:
            'Subscription, annual contract, deferred revenue, and usage billing treated properly.',
        },
        {
          icon: 'ESOP',
          title: 'Founder clarity',
          description: 'Payroll, contractors, ESOP-related support, and cash planning organized.',
        },
      ],
      services: [
        'Startup accounting UAE',
        'SaaS bookkeeping',
        'Investor reporting',
        'Financial modelling startups',
        'Runway and burn reporting',
        'VAT for tech companies',
        'Payroll for startups',
        'Board-ready MIS',
      ],
    },
    {
      id: 'healthcare',
      icon: 'MED',
      category: 'Property, Tech & Healthcare',
      title: 'Healthcare & Clinics, Zero-Rated Services, Cosmetic VAT & Insurance Billing',
      tagline: 'Insurance receivables, VAT exemptions, payroll, and regulated reporting.',
      pain: 'UAE healthcare VAT has zero-rated, standard-rated, and exempt categories, and the boundary is not always clear. Clinics can overcharge VAT, claim blocked input tax, or distort insurance revenue without specialist accounting.',
      guide:
        'BookLean keeps clinic books clean with insurance reconciliation, VAT classification, payroll, and management reporting for regulated healthcare businesses.',
      outcomes: [
        {
          icon: 'INS',
          title: 'Insurance receivables tracked',
          description: 'Claims, approvals, rejections, and collections monitored clearly.',
        },
        {
          icon: 'VAT',
          title: 'VAT exemptions reviewed',
          description:
            'Healthcare VAT treatment, exempt supplies, and mixed activity records handled carefully.',
        },
        {
          icon: 'PAY',
          title: 'Payroll and staff cost',
          description: 'Doctors, nurses, admin teams, WPS, and gratuity reporting kept clean.',
        },
        {
          icon: 'MIS',
          title: 'Clinic performance reporting',
          description: 'Department, doctor, and service-line profitability visibility.',
        },
      ],
      services: [
        'Clinic accounting UAE',
        'Healthcare VAT advisory',
        'Insurance receivable reconciliation',
        'Medical practice bookkeeping',
        'Payroll for clinics UAE',
        'DHA/regulated business reporting',
        'Clinic MIS reports',
        'FTA-ready healthcare records',
      ],
    },
    {
      id: 'logistics',
      icon: 'LOG',
      category: 'Property, Tech & Healthcare',
      title: 'Logistics & Transportation Accounting UAE',
      tagline: 'Multi-emirate, multi-currency, import/export finance under control.',
      pain: 'Logistics books get complex with customs, freight, fuel, fleet costs, multi-currency invoices, and cross-border VAT.',
      guide:
        'BookLean structures logistics accounting around shipments, vehicles, customs, duties, VAT, and cash flow.',
      outcomes: [
        {
          icon: 'SHIP',
          title: 'Shipment costing',
          description:
            'Freight, duties, fuel, subcontractors, and job margins tracked by shipment.',
        },
        {
          icon: 'VAT',
          title: 'Import/export VAT clarity',
          description: 'Cross-border VAT, customs, and documentation organized for FTA review.',
        },
        {
          icon: 'FX',
          title: 'Multi-currency control',
          description: 'Customer, supplier, and bank balances reconciled across currencies.',
        },
        {
          icon: 'FLEET',
          title: 'Fleet cost visibility',
          description: 'Fuel, maintenance, insurance, leases, and utilization reported monthly.',
        },
      ],
      services: [
        'Logistics accounting UAE',
        'Freight forwarding bookkeeping',
        'Import/export VAT support',
        'Customs duty accounting',
        'Fleet cost reporting',
        'Multi-currency reconciliation',
        'Shipment profitability reporting',
        'Transportation payroll UAE',
      ],
    },
    {
      id: 'banking',
      icon: 'FIN',
      category: 'Finance, Trade & Freelancers',
      title: 'Banking & Financial Services Accounting UAE',
      tagline: 'AML, DFSA-style controls, reconciliation, and regulatory reporting.',
      pain: 'Financial services firms need clean reconciliations, AML discipline, governance, and reporting standards that banks and regulators trust.',
      guide:
        'BookLean supports finance-sector businesses with compliance-focused accounting, AML documentation, control reviews, and management reporting.',
      outcomes: [
        {
          icon: 'AML',
          title: 'AML-ready records',
          description:
            'KYC, transaction monitoring support, and policy documentation kept organized.',
        },
        {
          icon: 'REC',
          title: 'High-integrity reconciliation',
          description: 'Client money, bank, gateway, and ledger balances reconciled tightly.',
        },
        {
          icon: 'CTRL',
          title: 'Control frameworks',
          description: 'Approval workflows, segregation of duties, and audit trails strengthened.',
        },
        {
          icon: 'REP',
          title: 'Board reporting',
          description: 'Management packs built for financial services decision-makers.',
        },
      ],
      services: [
        'Financial services accounting UAE',
        'AML compliance support',
        'Bank reconciliation control',
        'DFSA-style reporting support',
        'Client money accounting',
        'Governance reporting',
        'Internal controls review',
        'Financial services MIS',
      ],
    },
    {
      id: 'manufacturing',
      icon: 'MFG',
      category: 'Finance, Trade & Freelancers',
      title: 'Manufacturing & Trading Accounting UAE',
      tagline: 'Import VAT, inventory costing, landed cost, and margin control.',
      pain: 'Manufacturing and trading margins disappear when landed cost, duties, inventory, FX, and supplier payments are not linked cleanly.',
      guide:
        'BookLean builds trading and manufacturing accounts around landed cost, inventory, VAT, supplier management, and profitability reporting.',
      outcomes: [
        {
          icon: 'LC',
          title: 'Landed cost accuracy',
          description: 'Duties, freight, insurance, and purchase costs assigned correctly.',
        },
        {
          icon: 'INV',
          title: 'Inventory control',
          description: 'Stock movement, slow-moving inventory, and valuation reviewed monthly.',
        },
        {
          icon: 'VAT',
          title: 'Import VAT support',
          description: 'Import VAT, reverse charge, and customs documentation kept FTA-ready.',
        },
        {
          icon: 'MRG',
          title: 'Margin reporting',
          description: 'Product, customer, and supplier profitability tracked clearly.',
        },
      ],
      services: [
        'Manufacturing accounting UAE',
        'Trading company bookkeeping',
        'Inventory valuation',
        'Import VAT accounting',
        'Landed cost accounting',
        'Supplier payment control',
        'Cost accounting UAE',
        'Manufacturing MIS reports',
      ],
    },
    {
      id: 'oilgas',
      icon: 'O&G',
      category: 'Finance, Trade & Freelancers',
      title: 'Oil, Gas & Energy Accounting UAE',
      tagline: 'Complex VAT, contracts, project costs, and compliance visibility.',
      pain: 'Energy-sector businesses deal with complex contracts, project accounting, procurement, subcontractors, and VAT treatment that need specialist handling.',
      guide:
        'BookLean supports energy companies with project-led accounting, VAT review, contract cost tracking, and audit-ready financial records.',
      outcomes: [
        {
          icon: 'PRJ',
          title: 'Project cost tracking',
          description: 'Costs, subcontractors, procurement, and margins tracked by contract.',
        },
        {
          icon: 'VAT',
          title: 'Complex VAT structures',
          description: 'Domestic, cross-border, and exempt/reverse-charge treatment reviewed.',
        },
        {
          icon: 'PO',
          title: 'Procurement visibility',
          description: 'Purchase orders, supplier payments, and approvals kept controlled.',
        },
        {
          icon: 'AUD',
          title: 'Audit-ready records',
          description: 'Documentation organized for auditors, banks, and regulatory reviews.',
        },
      ],
      services: [
        'Oil and gas accounting UAE',
        'Energy sector bookkeeping',
        'Project cost accounting',
        'Complex VAT advisory',
        'Procurement accounting',
        'Subcontractor reconciliation',
        'Energy MIS reporting',
        'Audit-ready financials',
      ],
    },
    {
      id: 'freelancer',
      icon: 'FREE',
      category: 'Finance, Trade & Freelancers',
      title: 'Freelancer & Sole Establishment Tax UAE',
      tagline: 'Simple, compliant books for independent UAE businesses.',
      pain: 'Freelancers often mix personal and business spending, miss VAT or Corporate Tax registration triggers, and lack clean records when banks or the FTA ask questions.',
      guide:
        'BookLean gives freelancers clean bookkeeping, VAT/Corporate Tax guidance, invoicing support, and year-end filing readiness.',
      outcomes: [
        {
          icon: 'TRN',
          title: 'Registration triggers monitored',
          description:
            'VAT and Corporate Tax registration obligations reviewed before deadlines become penalties.',
        },
        {
          icon: 'INV',
          title: 'Clean invoicing',
          description: 'Invoices, receipts, expenses, and bank records organized monthly.',
        },
        {
          icon: 'TAX',
          title: 'Tax position clear',
          description:
            'Business profit, deductible expenses, VAT exposure, and Corporate Tax position visible.',
        },
        {
          icon: 'BANK',
          title: 'Bank-ready records',
          description: 'Clean statements and reports ready for bank, visa, or authority reviews.',
        },
      ],
      services: [
        'Freelancer accounting UAE',
        'Sole establishment bookkeeping',
        'VAT registration support',
        'Corporate Tax filing freelancer',
        'Invoice and expense tracking',
        'Bank reconciliation',
        'Annual accounts UAE',
        'Freelancer tax advisory',
      ],
    },
  ];

  currentIndustry = computed(() => {
    const id = this.params()?.get('id') || 'restaurant';
    return this.industries.find((industry) => industry.id === id);
  });

  backFragment = computed(() =>
    this.queryParams()?.get('from') === 'industries' ? 'industries' : undefined,
  );

  constructor() {
    effect(() => {
      const industry = this.currentIndustry();
      if (!industry) return;

      this.seoService.setPage({
        title: `${this.displayTitle(industry)} | BookLean Global UAE`,
        description: this.displaySummary(industry),
        path: `/${this.regionDataService.currentRegion()}/industry/${industry.id}`,
      });
    });
  }

  referenceContent(industry: IndustryDetail): ReferenceIndustryContent | undefined {
    return referenceIndustryContent[industry.id];
  }

  referencePanel(industry: IndustryDetail): ReferenceIndustryPanel | undefined {
    const panel = referenceIndustryPanels[industry.id];
    if (!panel || industry.id !== 'restaurant') {
      return panel;
    }

    return {
      cardHtml: panel.cardHtml.replace(
        /<div class="ind-law-box">[\s\S]*?<div class="ind-booklean-help">/,
        `${this.restaurantLawPanelHtml}\n          <div class="ind-booklean-help">`,
      ),
    };
  }

  displayTag(industry: IndustryDetail): string {
    return (
      this.referenceContent(industry)?.tag || `${industry.category} · Verified UAE tax logic 2026`
    );
  }

  displayTitle(industry: IndustryDetail): string {
    return this.referenceContent(industry)?.title || industry.title;
  }

  displaySummary(industry: IndustryDetail): string {
    return this.referenceContent(industry)?.sub || `${industry.pain} ${industry.guide}`;
  }

  industrySections(industry: IndustryDetail): DetailSection[] {
    return [
      {
        title: 'Complete sector overview',
        body: industry.pain,
        points: [industry.tagline, industry.guide],
      },
      {
        title: 'Sector-specific risk areas',
        body: 'These are the areas where ordinary bookkeeping usually misses sector-specific UAE compliance, tax, or reporting rules.',
        points: this.industryRiskPoints(industry),
      },
      {
        title: 'What your business gets',
        body: 'BookLean turns sector complexity into a monthly reporting workflow your founders, managers, banks, and auditors can trust.',
        points: industry.outcomes.map((outcome) => `${outcome.title}: ${outcome.description}`),
      },
      {
        title: 'Documents and records to prepare',
        body: 'These records let the BookLean team test your current position quickly and build the right accounting workflow from day one.',
        points: this.industryEvidencePoints(industry.id),
      },
      {
        title: 'Industry services included',
        body: 'These services are included or mapped into your proposal depending on the size, structure, and complexity of your business.',
        points: industry.services,
      },
      {
        title: 'BookLean monthly workflow',
        body: 'The goal is not just a filing. The goal is clean books, real visibility, and fewer surprises every month.',
        points: this.industryWorkflowPoints(industry),
      },
    ];
  }

  private industryRiskPoints(industry: IndustryDetail): string[] {
    const byId: Record<string, string[]> = {
      restaurant: [
        'POS data and delivery settlements do not match the books.',
        'Staff meals, discounts, refunds, and service charges need correct VAT treatment.',
        'Food cost and wastage are invisible until margins have already leaked.',
        'Multi-outlet VAT returns need outlet-level reconciliation before filing.',
      ],
      retail: [
        'Inventory, returns, discounts, and promotions distort margin if they are not reconciled daily.',
        'Store, marketplace, wholesale, and ecommerce channels need separate profitability views.',
        'Card, cash, gateway, and bank deposits often do not match without structured reconciliation.',
        'Credit notes and VAT adjustments can be missed during busy sales periods.',
      ],
      ecommerce: [
        'Marketplace payouts rarely match bank deposits because fees, refunds, and currency differences are netted off.',
        'Import VAT and customs duty are often paid but not tracked or reclaimed correctly.',
        'SKU profitability is distorted when landed cost, storage, returns, and platform fees are not allocated.',
        'Cross-border sales need correct separation for VAT and reporting.',
      ],
      hospitality: [
        'Booking platforms, deposits, cancellations, and channel settlements need daily revenue control.',
        'Tourism fees, VAT, and local charges must be classified correctly.',
        'Shift-heavy payroll and WPS records need clean monthly reconciliation.',
        'Multi-branch reporting can hide loss-making locations.',
      ],
      realestate: [
        'Property VAT differs by residential, commercial, first supply, subsequent supply, lease, and sale.',
        'Retention payments and advances create timing issues for VAT and revenue recognition.',
        'DLD, escrow, contracts, and invoices must tie back to accounting records.',
        'Project costs need cost-center tracking to protect margin and audit support.',
      ],
      tech: [
        'Burn, runway, deferred revenue, and SaaS metrics must be investor-ready before fundraising pressure arrives.',
        'Subscription and annual contracts need correct revenue recognition.',
        'Payroll, contractors, and founder spending must be separated clearly.',
        'Due diligence becomes expensive when finance records are built late.',
      ],
      healthcare: [
        'Healthcare services can be zero-rated, standard-rated, or exempt depending on documentation.',
        'Insurance claims, approvals, rejections, co-pays, and collections distort revenue if not reconciled.',
        'Employee insurance and regulated expenses need careful VAT review.',
        'Doctor, department, and service-line profitability can disappear inside generic accounts.',
      ],
      logistics: [
        'Shipment costing can be distorted by freight, customs, fuel, subcontractors, and duties.',
        'Import/export VAT and documentation must be clean for FTA review.',
        'Multi-currency customer and supplier balances need regular reconciliation.',
        'Fleet cost and utilisation need separate reporting to control margin.',
      ],
      banking: [
        'Client money, gateways, and ledger balances require high-integrity reconciliation.',
        'AML, KYC, and transaction monitoring records must be organized for banks and regulators.',
        'Approval workflows and segregation of duties need visible audit trails.',
        'Board reporting must be tighter than ordinary SME management accounts.',
      ],
      manufacturing: [
        'Landed cost, duties, freight, and insurance must be allocated to inventory correctly.',
        'Slow-moving stock and valuation errors can distort profit.',
        'Import VAT and reverse-charge treatment need supporting customs records.',
        'Product, customer, and supplier margins need separate tracking.',
      ],
      oilgas: [
        'Project contracts, procurement, subcontractors, and VAT structures require specialist handling.',
        'Domestic, cross-border, exempt, and reverse-charge treatments must be reviewed.',
        'Purchase orders and supplier approvals need controlled documentation.',
        'Banks and auditors expect stronger contract-level records.',
      ],
      freelancer: [
        'Personal and business spending often get mixed together.',
        'VAT and Corporate Tax registration triggers can be missed until penalties arrive.',
        'Invoices, receipts, and bank records need monthly organization.',
        'Banks, visa authorities, and the FTA may ask for clean annual records.',
      ],
    };

    return byId[industry.id] || industry.outcomes.map((outcome) => outcome.description);
  }

  private industryEvidencePoints(id: string): string[] {
    const shared = [
      'Trade licence and activity details',
      'Bank statements and current bookkeeping records',
      'Sales invoices, supplier bills, and contracts',
      'Payroll, VAT, and management reports',
    ];
    const byId: Record<string, string[]> = {
      restaurant: [
        'POS exports and Z-reports',
        'Talabat, Deliveroo, Noon, and aggregator statements',
        'Food inventory and wastage records',
        'Staff meals, discounts, refunds, and service-charge records',
      ],
      retail: [
        'Inventory movement and SKU reports',
        'POS, card, cash, and gateway settlements',
        'Returns, credit notes, and promotion records',
        'Store and marketplace sales reports',
      ],
      ecommerce: [
        'Amazon, Noon, Shopify, Stripe, and PayPal reports',
        'Customs declarations and import VAT records',
        'SKU cost, landed cost, and refund reports',
        'Domestic and international sales summaries',
      ],
      hospitality: [
        'Booking platform and channel reports',
        'Tourism fee and VAT records',
        'Payroll, gratuity, and WPS files',
        'Occupancy, revenue, and department reports',
      ],
      realestate: [
        'DLD, escrow, sale, and lease documents',
        'Project cost schedules and subcontractor bills',
        'Retention, advance, and variation records',
        'Residential and commercial VAT classification notes',
      ],
      tech: [
        'MRR, subscription, and deferred revenue schedules',
        'Investor reporting and cap table support files',
        'Payroll, contractor, and ESOP records',
        'Forecast, budget, and runway models',
      ],
      healthcare: [
        'Insurance claim, approval, rejection, and co-pay records',
        'Service VAT classification and medical necessity support',
        'DHA, DOH, or MOH licence records',
        'Doctor, department, and clinic revenue reports',
      ],
      logistics: [
        'Shipment job files and costing sheets',
        'Customs, import, export, and duty records',
        'Fleet fuel, maintenance, and lease records',
        'Multi-currency customer and supplier ledgers',
      ],
      banking: [
        'KYC, AML, and transaction support files',
        'Client money and gateway reconciliation records',
        'Governance, approval, and policy documents',
        'Board packs and regulatory reporting files',
      ],
      manufacturing: [
        'Bill of materials and inventory valuation reports',
        'Purchase, freight, duty, and landed cost records',
        'Import VAT and customs support',
        'Product and customer margin reports',
      ],
      oilgas: [
        'Project contracts and purchase orders',
        'Procurement, subcontractor, and supplier records',
        'Domestic and cross-border VAT support',
        'Contract-level cost and margin reports',
      ],
      freelancer: [
        'Business invoices and expense receipts',
        'Separate bank statements',
        'VAT and Corporate Tax threshold tracker',
        'Annual accounts and licence records',
      ],
    };

    return byId[id] || shared;
  }

  private industryWorkflowPoints(industry: IndustryDetail): string[] {
    return [
      `Onboard: review your ${industry.category.toLowerCase()} structure, systems, and compliance deadlines.`,
      'Clean up: reconcile historical books, bank, sales channels, VAT records, payroll, and source documents.',
      'Run monthly: close books, produce MIS, monitor tax exposure, and flag risks before filings.',
      'Advise: give founders and managers clear numbers for cash flow, profit, pricing, and growth decisions.',
    ];
  }

  industryBadges(industry: IndustryDetail): string[] {
    if (industry.id === 'restaurant') {
      return [
        'VAT 5% on most food & beverages',
        'TRF not applicable to F&B',
        'PEPPOL e-invoicing from 2026',
      ];
    }

    return [`${industry.icon} specialist`, 'FTA and UAE tax ready', 'Monthly close workflow'];
  }

  painCards(industry: IndustryDetail): DetailCard[] {
    const reference = this.referenceContent(industry);
    if (reference) {
      return reference.pain.map((card) => ({ icon: '!', ...card }));
    }

    return this.industryRiskPoints(industry).map((description, index) => ({
      icon: '!',
      title: this.painTitles(industry.id)[index] || `Risk area ${index + 1}`,
      description,
    }));
  }

  solutionCards(industry: IndustryDetail): DetailCard[] {
    const reference = this.referenceContent(industry);
    if (reference) {
      return reference.sol.map((card) => ({ icon: industry.icon, ...card }));
    }

    return industry.outcomes;
  }

  lawTitle(industry: IndustryDetail): string {
    return this.referenceContent(industry)?.lawTitle || 'UAE law and compliance points we check';
  }

  lawPoints(industry: IndustryDetail): string[] {
    const reference = this.referenceContent(industry);
    if (reference) {
      return reference.laws;
    }

    return [
      ...this.industryEvidencePoints(industry.id),
      ...industry.services.slice(0, 4),
      ...this.industryWorkflowPoints(industry).slice(0, 2),
    ];
  }

  storyText(industry: IndustryDetail): string {
    const reference = this.referenceContent(industry);
    if (reference) {
      return reference.story;
    }

    const stories: Record<string, string> = {
      restaurant:
        'When a UAE restaurant group came to BookLean, POS revenue, delivery settlements, staff meals, and VAT records were all being handled separately. Within one monthly close cycle, we reconciled the sales channels, corrected VAT treatment, and gave the owner outlet-level margin visibility. The result was a cleaner VAT file and a clearer view of which location was actually profitable.',
      ecommerce:
        'An ecommerce seller was seeing strong marketplace sales but could not explain why bank deposits, platform reports, and profit were never aligned. BookLean separated revenue, fees, refunds, import VAT, and landed cost, then produced SKU-level reporting so pricing and tax decisions were based on real numbers.',
      realestate:
        'A property business had project costs, DLD records, retention payments, and VAT evidence spread across files and spreadsheets. BookLean rebuilt the project ledger, separated residential and commercial VAT treatment, and created a reporting pack ready for management, banks, and auditors.',
      healthcare:
        'A clinic had insurance receivables, co-payments, service VAT treatment, and payroll records moving through different systems. BookLean reconciled claims to collections, reviewed VAT classification by service, and built clinic-level performance reporting for the management team.',
    };

    return (
      stories[industry.id] ||
      `A ${industry.title.toLowerCase()} client came to BookLean with scattered records, unclear margins, and compliance pressure. We reviewed the systems, cleaned the source data, reconciled the books, and converted the monthly close into a repeatable workflow with clearer tax, cash flow, and management reporting.`
    );
  }

  storyTitle(industry: IndustryDetail): string {
    return (
      this.referenceContent(industry)?.storyTitle || 'How BookLean Helped This Industry, Real Story'
    );
  }

  ctaLabel(industry: IndustryDetail): string {
    return this.referenceContent(industry)?.cta || `Book a Free ${industry.icon} Finance Review`;
  }

  private painTitles(id: string): string[] {
    const byId: Record<string, string[]> = {
      restaurant: [
        'POS Data Never Matches the Books',
        'Staff Meals, Deemed Supply Rule Ignored',
        'Food Cost & Margin Blind Spots',
        'Multi-Outlet VAT Returns Filed Incorrectly',
      ],
      retail: [
        'Inventory Margin Leakage',
        'Channel Profitability Is Blurred',
        'Payment Reconciliation Gaps',
        'Returns & Credit Notes Missed',
      ],
      ecommerce: [
        'Marketplace Payouts Never Match Bank Deposits',
        'Import VAT Never Reclaimed',
        'No True SKU Profitability',
        'Cross-Border VAT Confusion',
      ],
      hospitality: [
        'Booking Revenue Is Fragmented',
        'Tourism Fee & VAT Errors',
        'Payroll Complexity',
        'Loss-Making Locations Hidden',
      ],
      realestate: [
        'Property VAT Classification Errors',
        'Retention VAT Timing Issues',
        'DLD & Contract Records Do Not Tie',
        'Project Cost Tracking Gaps',
      ],
      tech: [
        'Runway Is Not Clear',
        'Revenue Recognition Issues',
        'Founder & Contractor Spend Mixed',
        'Due Diligence Records Built Too Late',
      ],
      healthcare: [
        'Wrong VAT Treatment on Services',
        'Insurance Billing Distorts Revenue',
        'Blocked Input VAT Claimed',
        'Clinic Profitability Is Hidden',
      ],
      logistics: [
        'Shipment Costing Is Distorted',
        'Import/Export VAT Evidence Gaps',
        'Multi-Currency Reconciliation Gaps',
        'Fleet Costs Not Visible',
      ],
      banking: [
        'Client Money Reconciliation Risk',
        'AML/KYC Evidence Gaps',
        'Weak Approval Trails',
        'Board Reporting Too Thin',
      ],
      manufacturing: [
        'Landed Cost Allocation Errors',
        'Inventory Valuation Distortion',
        'Import VAT Evidence Missing',
        'Margin Reporting Too Broad',
      ],
      oilgas: [
        'Contract-Level Cost Gaps',
        'Complex VAT Treatment',
        'Procurement Control Weakness',
        'Audit Evidence Pressure',
      ],
      freelancer: [
        'Personal and Business Spend Mixed',
        'VAT and CT Triggers Missed',
        'Records Not Bank-Ready',
        'Annual Filing Stress',
      ],
    };

    return byId[id] || [];
  }

  openBookingModal(event: Event) {
    event.preventDefault();
    this.bookingService.open(event);
  }

  handleIndustryClick(event: Event) {
    const target = event.target as HTMLElement | null;
    const bookingLink = target?.closest<HTMLElement>(
      '[data-booking-cta], .btn-cta-primary, a.btn-primary[href="#contact"], a.industry-primary-btn',
    );

    if (bookingLink) {
      event.preventDefault();
      this.bookingService.open(event);
    }
  }
}
