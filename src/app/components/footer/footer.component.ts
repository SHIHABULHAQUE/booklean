import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { RegionDataService } from '../../services/region-data.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-footer',
    standalone: true,
    imports: [TranslateModule],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
    regionDataService = inject(RegionDataService);
}
