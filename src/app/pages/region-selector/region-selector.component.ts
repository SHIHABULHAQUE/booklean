import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-region-selector', standalone: true, imports: [RouterLink], templateUrl: './region-selector.component.html', styleUrl: './region-selector.component.scss', changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegionSelectorComponent {
    regions = [
        {
            id: 'uae', name: 'UAE', path: '/uae/home', imageUrl: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800' // Dubai / Burj Al Arab concept
        }
    ];
}
