import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RegionDataService } from '../../services/region-data.service';

@Component({
  selector: 'app-hero-slider',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './hero-slider.html',
  styleUrl: './hero-slider.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroSliderComponent {
  regionDataService = inject(RegionDataService);
}
