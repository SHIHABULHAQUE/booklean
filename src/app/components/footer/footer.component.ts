import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { RegionDataService } from '../../services/region-data.service';

@Component({
    selector: 'app-footer',
    standalone: true,
    imports: [],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
    regionDataService = inject(RegionDataService);
}
