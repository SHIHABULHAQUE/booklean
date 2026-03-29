import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-industries',
    standalone: true,
    imports: [],
    templateUrl: './industries.component.html',
    styleUrl: './industries.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class IndustriesComponent {
    industries = [
        { icon: '🛒', name: 'Retail & E-commerce1', tags: ['Omnichannel', 'Inventory'] },
        { icon: '🏗️', name: 'Construction & Real Estate', tags: ['Project Accounting', 'Cost Control'] },
        { icon: '💻', name: 'Technology & SaaS', tags: ['SaaS Metrics', 'Burn Rate'] },
        { icon: '🏥', name: 'Healthcare & Wellness', tags: ['Multi-location', 'Clinic Finance'] },
        { icon: '🎓', name: 'Education & Training', tags: ['Fee Management', 'Grants'] },
        { icon: '🍽️', name: 'Hospitality & F&B', tags: ['POS Integration', 'Food Costing'] },
        { icon: '💼', name: 'Professional Services', tags: ['Project Profitability'] },
        { icon: '🚢', name: 'Trading & Distribution', tags: ['Import/Export', 'Customs'] }
    ];
}
