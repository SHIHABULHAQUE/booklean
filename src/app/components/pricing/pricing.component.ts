import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { RegionDataService } from '../../services/region-data.service';

@Component({
    selector: 'app-pricing',
    standalone: true,
    imports: [],
    templateUrl: './pricing.component.html',
    styleUrl: './pricing.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PricingComponent {
    regionDataService = inject(RegionDataService);
}
