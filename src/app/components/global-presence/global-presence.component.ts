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
            title: 'UAE Headquarters',
            website: 'booklean.ae',
            email: 'contact@booklean.ae',
            badge: 'HQ'
        },
        {
            country: 'India',
            title: 'Development Center',
            website: 'booklean.in',
            email: 'hr@booklean.in',
            badge: ''
        },
        {
            country: 'United Kingdom',
            title: 'European Operations',
            website: 'booklean.uk',
            email: 'tax@booklean.uk',
            badge: ''
        }
    ];
}
