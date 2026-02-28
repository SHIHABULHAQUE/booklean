import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-region-selector',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './region-selector.component.html',
    styleUrl: './region-selector.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegionSelectorComponent {
    regions = [
        {
            id: 'india',
            name: 'INDIA',
            path: '/in/home',
            imageUrl: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=800' // Taj Mahal / India concept
        },
        {
            id: 'uae',
            name: 'UAE',
            path: '/uae/home',
            imageUrl: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800' // Dubai / Burj Al Arab concept
        },
        {
            id: 'uk',
            name: 'UK',
            path: '/uk/home',
            imageUrl: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=800' // Big Ben / London concept
        }
    ];
}
