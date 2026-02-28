import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-services',
    standalone: true,
    imports: [],
    templateUrl: './services.component.html',
    styleUrl: './services.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServicesComponent {
    services = [
        {
            id: 1,
            title: 'Bookkeeping & Accounting',
            description: 'Maintain pristine financial records with our expert bookkeeping services, ensuring compliance and crystal-clear business insights.',
            icon: '📊'
        },
        {
            id: 2,
            title: 'Financial Advisory',
            description: 'Strategic financial engineering to optimize your capital structure, maneuver risks, and accelerate sustainable growth.',
            icon: '💡'
        },
        {
            id: 3,
            title: 'Tax Consultancy',
            description: 'Navigate complex UAE tax landscapes with our proactive planning and rigorous compliance frameworks.',
            icon: '📈'
        }
    ];
}
