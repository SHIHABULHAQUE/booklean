import { Component, ChangeDetectionStrategy, inject, signal, computed } from '@angular/core';
import { RouterLink, RouterLinkActive, ActivatedRoute } from '@angular/router';
import { RegionDataService } from '../../services/region-data.service';
import { FooterComponent } from '../../components/footer/footer.component';
import { toSignal } from '@angular/core/rxjs-interop';

interface SubService {
  id: string;
  title: string;
  description: string;
  features: string[];
  image: string;
}

interface ServiceCategory {
  id: string;
  title: string;
  subServices: SubService[];
}

@Component({
    selector: 'app-service-detail',
    standalone: true,
    imports: [RouterLink, RouterLinkActive, FooterComponent],
    templateUrl: './service-detail.component.html',
    styleUrl: './service-detail.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServiceDetailComponent {
    regionDataService = inject(RegionDataService);
    private route = inject(ActivatedRoute);

    // Data Mapping
    private serviceData: Record<string, ServiceCategory> = {
      'audit-assurance': {
        id: 'audit-assurance',
        title: 'Audit & Assurance',
        subServices: [
          { 
            id: 'statutory-audit', 
            title: 'Statutory Audit', 
            description: 'Independent verification of financial statements to ensure compliance with UAE laws and IFRS standards.',
            features: ['Financial Statement Audit', 'Consolidated Reporting', 'Regulatory Compliance', 'Investor Confidence'],
            image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200'
          },
          { 
            id: 'internal-audit', 
            title: 'Internal Audit', 
            description: 'Objective evaluation of your internal controls, risk management, and governance processes.',
            features: ['Process Optimization', 'Risk Assessment', 'Control Frameworks', 'Efficiency Review'],
            image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200'
          },
          { id: 'forensic-accounting', title: 'Forensic Accounting', description: 'Specialized investigation of financial discrepancies and potential fraud.', features: ['Fraud Investigation', 'Litigation Support', 'Asset Recovery', 'Dispute Resolution'], image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200' },
          { id: 'risk-assurance', title: 'Risk Assurance', description: 'Strategic identification and mitigation of enterprise-level risks.', features: ['Operational Risk', 'Compliance Monitoring', 'Cyber Risk Review', 'Business Continuity'], image: 'https://images.unsplash.com/photo-1507679799987-c7377ec48696?w=1200' },
          { id: 'ifrs-advisory', title: 'IFRS Advisory', description: 'Expert guidance on the implementation and maintenance of IFRS reporting.', features: ['Standards Mapping', 'Disclosure Design', 'Technical Training', 'Adoption Strategy'], image: 'https://images.unsplash.com/photo-1543286386-713bdd54867e?w=1200' }
        ]
      },
      'tax-compliance': {
        id: 'tax-compliance',
        title: 'Tax & Compliance',
        subServices: [
          { id: 'corporate-tax', title: 'Corporate Tax (9%)', description: 'End-to-end management of the new UAE Corporate Tax regime, from registration to filing.', features: ['CT Registration', 'Tax Impact Assessment', 'Return Filing', 'Payment Optimization'], image: 'https://images.unsplash.com/photo-1554224155-11193ad9d99a?w=1200' },
          { id: 'vat-advisory', title: 'VAT Advisory', description: 'Strategic VAT planning and compliance for complex business transactions.', features: ['VAT Returns', 'Refund Processing', 'De-registration', 'Strategic Review'], image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200' },
          { id: 'transfer-pricing', title: 'Transfer Pricing', description: 'Ensuring your related-party transactions meet arm\'s length requirements.', features: ['TP Documentation', 'Benchmarking studies', 'Policy Alignment', 'Risk Mitigation'], image: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=1200' },
          { id: 'fta-compliance', title: 'FTA Compliance', description: 'Managed representation and coordination with the Federal Tax Authority.', features: ['Audit Defence', 'Clarifications', 'Penalty Appeals', 'Voluntary Disclosures'], image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1200' },
          { id: 'international-tax', title: 'International Tax', description: 'Cross-border tax structuring for multinational operations in the UAE and beyond.', features: ['DTAA Benefits', 'BEPS Compliance', 'Global Structuring', 'Withholding Tax'], image: 'https://images.unsplash.com/photo-1526304640581-d334cd06f69d?w=1200' }
        ]
      },
      'advisory-strategy': {
        id: 'advisory-strategy',
        title: 'Advisory & Strategy',
        subServices: [
          { id: 'business-advisory', title: 'Business Advisory', description: 'Actionable insight to drive growth, efficiency, and market leadership.', features: ['Operational Excellence', 'Market Entry', 'Transformation', 'Performance Mgmt'], image: 'https://images.unsplash.com/photo-1512433555db6-0929be6089d4?w=1200' },
          { id: 'm-and-a-advisory', title: 'M&A Advisory', description: 'Expert guidance through every stage of merger, acquisition, or divestment.', features: ['Due Diligence', 'Deal Structuring', 'Integration Plan', 'Valuation Support'], image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200' },
          { id: 'restructuring', title: 'Restructuring', description: 'Optimizing distressed or underperforming entities for a sustainable future.', features: ['Debt Restructuring', 'Turnaround Strategy', 'Cost Optimization', 'Governance Overhaul'], image: 'https://images.unsplash.com/photo-1454165833767-027ffea9e77b?w=1200' },
          { id: 'valuations', title: 'Valuations', description: 'Independent, robust business valuations for investment or compliance purposes.', features: ['DCF Analysis', 'Market Multiples', 'Intangible Assets', 'Expert Opinions'], image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200' },
          { id: 'esg-and-sustainability', title: 'ESG & Sustainability', description: 'Aligning your business core with environmental and social governance standards.', features: ['Impact Reporting', 'Policy Design', 'Compliance Tracking', 'Strategic Alignment'], image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200' }
        ]
      },
      'digital-ai': {
        id: 'digital-ai',
        title: 'Digital & AI',
        subServices: [
          { id: 'ai-bookkeeping', title: 'AI Bookkeeping', description: 'The future of finance: automated ledger management with 99.9% precision.', features: ['Auto-reconciliation', 'Real-time Feed', 'Anomaly Detection', 'Zero-Manual Entry'], image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200' },
          { id: 'cfo-services', title: 'CFO Services', description: 'Strategic financial leadership powered by real-time data lakes.', features: ['Forecasting', 'Board-Ready Reports', 'Fundraising Prep', 'KPI Analysis'], image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200' },
          { id: 'erp-setup', title: 'ERP Setup', description: 'Implementing next-gen cloud ERPs (Xero, Netsuite, SAP S/4HANA) for speed.', features: ['Custom Mapping', 'API Integration', 'Staff Training', 'Continuous Optimization'], image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200' },
          { id: 'peppol-e-invoicing', title: 'PEPPOL E-Invoicing', description: 'Ensure your business is compliant with the 2027 UAE e-invoicing mandate.', features: ['Network Access', 'Data Mapping', 'Compliance Seal', 'Automated Flow'], image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200' },
          { id: 'power-bi', title: 'Power BI', description: 'Transforming spreadsheets into interactive visual business intelligence.', features: ['Data Discovery', 'Live Dashboards', 'Self-Serve BI', 'Insight Training'], image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200' }
        ]
      }
    };

    // Signals logic
    params = toSignal(this.route.paramMap);
    queryParams = toSignal(this.route.queryParamMap);

    currentCategoryId = computed(() => this.params()?.get('id') || 'audit-assurance');
    currentService = computed(() => this.serviceData[this.currentCategoryId()]);
    
    activeTabId = signal<string | null>(null);

    activeTab = computed(() => {
      const cat = this.currentService();
      if (!cat) return null;

      // Priority 1: Manual select (signal)
      const manualId = this.activeTabId();
      if (manualId) return cat.subServices.find(s => s.id === manualId) || cat.subServices[0];

      // Priority 2: Query param (from header/url)
      const qId = this.queryParams()?.get('tab');
      if (qId) return cat.subServices.find(s => s.id === qId) || cat.subServices[0];

      // Priority 3: Default (first child)
      return cat.subServices[0];
    });

    selectTab(id: string) {
      this.activeTabId.set(id);
    }
}
