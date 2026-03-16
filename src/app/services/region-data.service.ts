import { Injectable, signal, effect, inject } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

export interface RegionData {
    heroTitle: string;
    heroSubtitle: string;
    phone: string;
    whatsapp: string;
    currency: string;
    countryName: string;
    shortCode: string;
    services: { 
        id: number, 
        title: string, 
        description: string, 
        icon: string, 
        category?: string, 
        tags?: string[],
        isWide?: boolean,
        subServices?: { title: string, description: string }[]
    }[];
    pricingPlans: { id: number, icon: string, title: string, description: string, price: string, period: string, features: string[], buttonText: string, isPopular?: boolean }[];
}

@Injectable({
    providedIn: 'root'
})
export class RegionDataService {
    private router = inject(Router);

    private uaeData: RegionData = {
        heroTitle: 'Intelligent Financial <br /><em>Engineering</em> <strong>UAE</strong>',
        heroSubtitle: 'Booklean combines AI automation with expert human insight to deliver precision financial intelligence for UAE & GCC businesses.',
        phone: '+97150000000',
        whatsapp: '+97150000000',
        currency: 'AED',
        countryName: 'United Arab Emirates',
        shortCode: 'UAE',
        services: [
            { 
                id: 1, 
                category: '01 / Foundation',
                title: 'Smart Accounting & Bookkeeping', 
                description: 'AI-powered monthly bookkeeping, automated bank reconciliation, cloud accounting migration, and real-time MIS reporting — all verified by Chartered Accountants.', 
                icon: '📚',
                tags: ['Xero / QBO / Zoho', 'Cloud Migration', 'MIS Reporting', 'Audit-Ready']
            },
            { 
                id: 2, 
                category: '02 / Compliance',
                title: 'Tax & Regulatory Shield', 
                description: 'Complete Corporate Tax (9%) management, VAT compliance, FTA audit defence, PEPPOL e-invoicing implementation (2027 ready), ESR notification, and UBO registry — fully managed and penalty-proof.', 
                icon: '🛡️',
                tags: ['Corporate Tax 9%', 'VAT', 'FTA Representation', 'ESR & UBO', 'PEPPOL']
            },
            { 
                id: 3, 
                category: '03 / Strategy',
                title: 'AI CFO & Virtual CFO Services', 
                description: 'Strategic financial leadership without the full-time CFO cost. Budgeting, cash flow forecasting, financial modeling, investor-ready reporting, fundraising support, and board presentations.', 
                icon: '👑',
                tags: ['Virtual CFO', 'Forecasting', 'Fundraising', 'Board Reporting', 'Power BI']
            },
            { 
                id: 4, 
                category: '04 / Technology',
                title: 'AI Finance Automation', 
                description: 'End-to-end digital transformation of your finance function: AI invoice processing, ERP implementation, e-invoicing compliance, predictive analytics, and finance data lake creation.', 
                icon: '🤖',
                tags: ['AI Automation', 'ERP Setup', 'OCR Extraction', 'Fraud Detection']
            },
            { 
                id: 5, 
                category: '05 / Launch',
                title: 'Business Setup & Visa Services', 
                description: 'Complete market entry: UAE Mainland, Freezone, and Offshore company formation, license management, PRO services, bank account opening, investor & employee visa processing, and Golden Visa support.', 
                icon: '🚀',
                tags: ['Mainland / Freezone', 'PRO Services', 'Bank Account', 'Golden Visa']
            },
            { 
                id: 6, 
                category: '06 / Assurance',
                title: 'Audit, Risk & AML Compliance', 
                description: 'Internal audit, external audit coordination, AI-assisted continuous audit protocols, real-time anomaly detection, AML policy development, GoAML registration, and fraud risk assessment.', 
                icon: '🔍',
                tags: ['Internal Audit', 'Risk Assessment', 'AML Compliance', 'GoAML']
            },
            { 
                id: 7, 
                category: '07 / Advisory',
                title: 'Strategy, Valuation & Transaction Advisory', 
                description: 'Comprehensive advisory for growth, investment, and transformation milestones.', 
                icon: '📈',
                isWide: true,
                tags: ['M&A Advisory', 'Business Valuation', 'Due Diligence', 'IPO Readiness'],
                subServices: [
                    { title: 'Business Valuation', description: 'DCF, market comparables, asset-based, and revenue multiple approaches.' },
                    { title: 'Due Diligence', description: 'Commercial, financial, legal, and HR due diligence for M&A transactions.' },
                    { title: 'Digital Finance & BI', description: 'Power BI dashboards, predictive analytics, and finance data lake creation.' },
                    { title: 'International Tax', description: 'Cross-border structuring, transfer pricing, and double taxation planning.' },
                    { title: 'Payroll & WPS', description: 'End-to-end payroll, WPS compliance, gratuity, and labor card processing.' },
                    { title: 'ICV & Franchise Advisory', description: 'ICV certification, family business governance, and franchise finance advisory.' }
                ]
            }
        ],

        pricingPlans: [
            { id: 1, icon: '📚', title: 'Smart Accounting', description: 'Ideal for startups & SMEs up to AED 5M revenue', price: '1,500', period: 'per month', features: ['Monthly Bookkeeping', 'Real-time Dashboard', 'Tax Filing Support', 'MIS Reports', 'Annual Statements'], buttonText: 'Get Started' },
            { id: 2, icon: '🤖', title: 'AI CFO Services', description: 'For growing SMEs with AED 5M+ revenue', price: '3,500', period: 'per month', features: ['All Smart Accounting', 'Virtual CFO Advisory', 'Cash Flow Forecasting', 'Financial Modeling', 'Monthly CFO Strategy Session'], buttonText: 'Get Started', isPopular: true },
            { id: 3, icon: '🛡️', title: 'Tax & Compliance', description: 'For all UAE businesses with AED 2M+ revenue', price: '3,000', period: 'per year', features: ['Corporate Tax (9%)', 'VAT Filing', 'FTA Audit Support', 'ESR & UBO', 'Proactive Deadline Alerts'], buttonText: 'Get Protected' },
            { id: 4, icon: '🚀', title: 'Business Setup', description: 'For new entrants & international investors', price: '12,000', period: 'one-time', features: ['Company Formation', 'PRO Services', 'Visa Processing', 'Bank Account Opening', '1st Year Accounting Free'], buttonText: 'Launch Now' }
        ]
    };

    private inData: RegionData = {
        heroTitle: 'Smart Accounting <br />for <em>Modern</em> <strong>India</strong>',
        heroSubtitle: 'Next-gen CA advisory and AI automation bridging the gap for Indian startups and established enterprises.',
        phone: '+919800000000',
        whatsapp: '+919800000000',
        currency: 'INR',
        countryName: 'India',
        shortCode: 'IN',
        services: [
            { id: 1, category: '01 / Compliance', title: 'GST & Compliance', description: 'Seamless GST filing and smart bookkeeping optimized for the Indian tax ecosystem.', icon: '📊', tags: ['GST Filing', 'Bookkeeping', 'MIS'] },
            { id: 2, category: '02 / Strategy', title: 'Growth Financial Advisory', description: 'Strategic funding readiness and capital optimization for growing startups.', icon: '💡', tags: ['Fundraising', 'Valuation'] },
            { id: 3, category: '03 / Assurance', title: 'Audit & Secretarial', description: 'Rigorous statutory audit support and ROC compliance strategies.', icon: '📈', tags: ['Statutory Audit', 'ROC'] }
        ],
        pricingPlans: [
            { id: 1, icon: '📚', title: 'Smart Accounting', description: 'Ideal for startups up to ₹10Cr revenue', price: '15,000', period: 'per month', features: ['Monthly Bookkeeping', 'Real-time Dashboard', 'GST Filing Support', 'MIS Reports', 'Annual Statements'], buttonText: 'Get Started' },
            { id: 2, icon: '🤖', title: 'AI CFO Services', description: 'For growing SMEs with ₹10Cr+ revenue', price: '35,000', period: 'per month', features: ['All Smart Accounting', 'Virtual CFO Advisory', 'Cash Flow Forecasting', 'Financial Modeling', 'Monthly CFO Strategy Session'], buttonText: 'Get Started', isPopular: true },
            { id: 3, icon: '🛡️', title: 'Tax & Compliance', description: 'For all scale businesses', price: '30,000', period: 'per year', features: ['Income Tax Filing', 'GST Annual Return', 'Statutory Audit Support', 'ROC Compliance', 'Deadline Alerts'], buttonText: 'Get Protected' },
            { id: 4, icon: '🚀', title: 'Business Setup', description: 'For new startup registrations', price: '15,000', period: 'one-time', features: ['Company Registration', 'GST & PAN Processing', 'Startup India Registration', 'Bank Account Opening', '1st Year Strategy Free'], buttonText: 'Launch Now' }
        ]
    };

    private ukData: RegionData = {
        heroTitle: 'Financial Excellence <br />in the <em>United</em> <strong>Kingdom</strong>',
        heroSubtitle: 'World-class bookkeeping and CFO intelligence tailored to HMRC guidelines for progressive UK businesses.',
        phone: '+442070000000',
        whatsapp: '+442070000000',
        currency: 'GBP',
        countryName: 'United Kingdom',
        shortCode: 'UK',
        services: [
            { id: 1, category: '01 / Compliance', title: 'HMRC & Bookkeeping', description: 'Error-free financial reporting perfectly synchronized with UK regulatory bodies.', icon: '📊', tags: ['HMRC', 'VAT', 'Bookkeeping'] },
            { id: 2, category: '02 / Strategy', title: 'M&A and CFO Strategy', description: 'Specialized corporate finance strategy and cash flow modeling for UK entities.', icon: '💡', tags: ['M&A', 'Financial Models'] },
            { id: 3, category: '03 / Tax', title: 'Corporation Tax & VAT', description: 'Optimized UK tax planning and robust VAT return processes.', icon: '📈', tags: ['Corp Tax', 'VAT Returns'] }
        ],
        pricingPlans: [
            { id: 1, icon: '📚', title: 'Smart Accounting', description: 'Ideal for startups up to £1M revenue', price: '300', period: 'per month', features: ['Monthly Bookkeeping', 'Real-time Dashboard', 'HMRC Tax Filing', 'MIS Reports', 'Annual Statements'], buttonText: 'Get Started' },
            { id: 2, icon: '🤖', title: 'AI CFO Services', description: 'For growing SMEs with £1M+ revenue', price: '800', period: 'per month', features: ['All Smart Accounting', 'Virtual CFO Advisory', 'Cash Flow Forecasting', 'Financial Modeling', 'Monthly CFO Strategy Session'], buttonText: 'Get Started', isPopular: true },
            { id: 3, icon: '🛡️', title: 'Tax & Compliance', description: 'For established UK businesses', price: '600', period: 'per year', features: ['Corporation Tax', 'VAT Returns', 'HMRC Audit Support', 'Companies House', 'Proactive Alerts'], buttonText: 'Get Protected' },
            { id: 4, icon: '🚀', title: 'Business Setup', description: 'For new entrants in the UK', price: '1,000', period: 'one-time', features: ['Company Formation', 'Director Registrations', 'PAYE setup', 'Bank Account Intro', '1st Year Consulting Free'], buttonText: 'Launch Now' }
        ]
    };

    currentRegion = signal<string>('uae');
    data = signal<RegionData>(this.uaeData);

    constructor() {
        this.router.events.pipe(
            filter(event => event instanceof NavigationEnd)
        ).subscribe((event: any) => {
            const url = event.urlAfterRedirects || event.url;
            if (url.includes('/uk/')) {
                this.setRegion('uk');
            } else if (url.includes('/in/')) {
                this.setRegion('in');
            } else {
                this.setRegion('uae');
            }
        });
    }

    private setRegion(region: string) {
        this.currentRegion.set(region);
        if (region === 'uk') this.data.set(this.ukData);
        else if (region === 'in') this.data.set(this.inData);
        else this.data.set(this.uaeData);
    }
}
