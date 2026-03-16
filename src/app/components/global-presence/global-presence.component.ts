import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-global-presence',
    standalone: true,
    imports: [],
    templateUrl: './global-presence.component.html',
    styleUrl: './global-presence.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GlobalPresenceComponent {
    regions = [
        {
            country: 'United Arab Emirates',
            title: 'UAE Regional Office',
            website: 'booklean.ae',
            email: 'tax.advisory@booklean.ae',
            badge: 'HQ',
            flag: '🇦🇪',
            tags: ['Corporate Tax 9%', 'VAT & FTA', 'PEPPOL Ready', 'ESR & UBO']
        },
        {
            country: 'India',
            title: 'Global Accounting Center',
            website: 'booklean.in',
            email: 'financials@booklean.in',
            badge: '',
            flag: '🇮🇳',
            tags: ['GST Compliance', 'AI Processing', 'Cross-Border']
        },
        {
            country: 'United Kingdom',
            title: 'European Financial Operations',
            website: 'booklean.co.uk',
            email: 'consulting@booklean.co.uk',
            badge: '',
            flag: '🇬🇧',
            tags: ['Making Tax Digital', 'Statutory Accounts', 'Post-Brexit']
        }
    ];

    getFlag(country: string): string {
        const region = this.regions.find(r => r.country === country);
        return region?.flag || '🌍';
    }
}
