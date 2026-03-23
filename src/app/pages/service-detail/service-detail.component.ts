import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, ActivatedRoute } from '@angular/router';
import { RegionDataService } from '../../services/region-data.service';
import { FooterComponent } from '../../components/footer/footer.component';
import { map } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-service-detail',
    standalone: true,
    imports: [RouterLink, RouterLinkActive, FooterComponent, AsyncPipe],
    templateUrl: './service-detail.component.html',
    styleUrl: './service-detail.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServiceDetailComponent {
    regionDataService = inject(RegionDataService);
    private route = inject(ActivatedRoute);

    serviceTitle$ = this.route.paramMap.pipe(
        map(params => {
            const id = params.get('id');
            if (!id) return 'Service Detail';
            
            return id.split('-')
              .map(word => word.charAt(0).toUpperCase() + word.slice(1))
              .join(' ');
        })
    );
}
