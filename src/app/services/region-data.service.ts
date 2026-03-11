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
