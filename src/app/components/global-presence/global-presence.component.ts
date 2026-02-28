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
            badge: 'HQ'
        },
        {
            country: 'India',
            title: 'Global Accounting Center',
            website: 'booklean.in',
            email: 'financials@booklean.in',
            badge: ''
        },
        {
            country: 'United Kingdom',
            title: 'European Financial Operations',
            website: 'booklean.co.uk',
            email: 'consulting@booklean.co.uk',
            badge: ''
        }
    ];
}
