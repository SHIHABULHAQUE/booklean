import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { RegionDataService } from '../../services/region-data.service';

@Component({
    selector: 'app-services',
    standalone: true,
    imports: [],
    templateUrl: './services.component.html',
    styleUrl: './services.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServicesComponent {
    regionDataService = inject(RegionDataService);
}
