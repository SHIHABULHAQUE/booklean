import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { RegionDataService } from '../../services/region-data.service';

@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [],
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent {
    regionDataService = inject(RegionDataService);
}
