import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { RegionDataService } from '../../services/region-data.service';

@Component({
    selector: 'app-cta',
    standalone: true,
    imports: [],
    templateUrl: './cta.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CtaComponent {
    regionDataService = inject(RegionDataService);
}
