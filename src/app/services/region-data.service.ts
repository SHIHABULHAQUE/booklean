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
    services: { id: number, title: string, description: string, icon: string }[];
    pricingPlans: { id: number, icon: string, title: string, description: string, price: string, period: string, features: string[], buttonText: string, isPopular?: boolean }[];
}

@Injectable({
    providedIn: 'root'
})
export class RegionDataService {
    private router = inject(Router);

    private uaeData: RegionData = {
        heroTitle: 'Intelligent Financial <br /><span class="hl">Engineering UAE</span>',
        heroSubtitle: 'Booklean combines AI automation with expert human insight to deliver precision financial intelligence for UAE & GCC businesses.',
        phone: '+97150000000',
        whatsapp: '+97150000000',
        currency: 'AED',
        countryName: 'United Arab Emirates',
        shortCode: 'UAE',
        services: [
            { id: 1, title: 'Corporate Tax & Bookkeeping', description: 'UAE Corporate Tax compliance and automated bookkeeping solutions tailored for Dubai SMEs.', icon: '📊' },
            { id: 2, title: 'Virtual CFO Services', description: 'Expert financial maneuvering to optimize capital structures inside the UAE market.', icon: '💡' },
            { id: 3, title: 'VAT & Audit Strategy', description: 'Proactive VAT filing and thorough audit preparations to keep you FTA-aligned.', icon: '📈' }
        ],
        pricingPlans: [
            { id: 1, icon: '📚', title: 'Smart Accounting', description: 'Ideal for startups & SMEs up to AED 5M revenue', price: '1,500', period: 'per month', features: ['Monthly Bookkeeping', 'Real-time Dashboard', 'Tax Filing Support', 'MIS Reports', 'Annual Statements'], buttonText: 'Get Started' },
            { id: 2, icon: '🤖', title: 'AI CFO Services', description: 'For growing SMEs with AED 5M+ revenue', price: '3,500', period: 'per month', features: ['All Smart Accounting', 'Virtual CFO Advisory', 'Cash Flow Forecasting', 'Financial Modeling', 'Monthly CFO Strategy Session'], buttonText: 'Get Started', isPopular: true },
            { id: 3, icon: '🛡️', title: 'Tax & Compliance', description: 'For all UAE businesses with AED 2M+ revenue', price: '3,000', period: 'per year', features: ['Corporate Tax (9%)', 'VAT Filing', 'FTA Audit Support', 'ESR & UBO', 'Proactive Deadline Alerts'], buttonText: 'Get Protected' },
            { id: 4, icon: '🚀', title: 'Business Setup', description: 'For new entrants & international investors', price: '12,000', period: 'one-time', features: ['Company Formation', 'PRO Services', 'Visa Processing', 'Bank Account Opening', '1st Year Accounting Free'], buttonText: 'Launch Now' }
        ]
    };

    private inData: RegionData = {
        heroTitle: 'Smart Accounting <br />for <span class="hl">Modern India</span>',
        heroSubtitle: 'Next-gen CA advisory and AI automation bridging the gap for Indian startups and established enterprises.',
        phone: '+919800000000',
        whatsapp: '+919800000000',
        currency: 'INR',
        countryName: 'India',
        shortCode: 'IN',
        services: [
            { id: 1, title: 'GST & Compliance', description: 'Seamless GST filing and smart bookkeeping optimized for the Indian tax ecosystem.', icon: '📊' },
            { id: 2, title: 'Growth Financial Advisory', description: 'Strategic funding readiness and capital optimization for growing startups.', icon: '💡' },
            { id: 3, title: 'Audit & Secretarial', description: 'Rigorous statutory audit support and ROC compliance strategies.', icon: '📈' }
        ],
        pricingPlans: [
            { id: 1, icon: '📚', title: 'Smart Accounting', description: 'Ideal for startups up to ₹10Cr revenue', price: '15,000', period: 'per month', features: ['Monthly Bookkeeping', 'Real-time Dashboard', 'GST Filing Support', 'MIS Reports', 'Annual Statements'], buttonText: 'Get Started' },
            { id: 2, icon: '🤖', title: 'AI CFO Services', description: 'For growing SMEs with ₹10Cr+ revenue', price: '35,000', period: 'per month', features: ['All Smart Accounting', 'Virtual CFO Advisory', 'Cash Flow Forecasting', 'Financial Modeling', 'Monthly CFO Strategy Session'], buttonText: 'Get Started', isPopular: true },
            { id: 3, icon: '🛡️', title: 'Tax & Compliance', description: 'For all scale businesses', price: '30,000', period: 'per year', features: ['Income Tax Filing', 'GST Annual Return', 'Statutory Audit Support', 'ROC Compliance', 'Deadline Alerts'], buttonText: 'Get Protected' },
            { id: 4, icon: '🚀', title: 'Business Setup', description: 'For new startup registrations', price: '15,000', period: 'one-time', features: ['Company Registration', 'GST & PAN Processing', 'Startup India Registration', 'Bank Account Opening', '1st Year Strategy Free'], buttonText: 'Launch Now' }
        ]
    };

    private ukData: RegionData = {
        heroTitle: 'Financial Excellence <br />in the <span class="hl">United Kingdom</span>',
        heroSubtitle: 'World-class bookkeeping and CFO intelligence tailored to HMRC guidelines for progressive UK businesses.',
        phone: '+442070000000',
        whatsapp: '+442070000000',
        currency: 'GBP',
        countryName: 'United Kingdom',
        shortCode: 'UK',
        services: [
            { id: 1, title: 'HMRC & Bookkeeping', description: 'Error-free financial reporting perfectly synchronized with UK regulatory bodies.', icon: '📊' },
            { id: 2, title: 'M&A and CFO Strategy', description: 'Specialized corporate finance strategy and cash flow modeling for UK entities.', icon: '💡' },
            { id: 3, title: 'Corporation Tax & VAT', description: 'Optimized UK tax planning and robust VAT return processes.', icon: '📈' }
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
