import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-final-cta',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './final-cta.component.html',
    styleUrl: './final-cta.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FinalCtaComponent {
    bookDiscoveryCall() {
        window.location.href = 'mailto:hello@bookleanglobal.com?subject=Discovery Call Request';
    }

    downloadProfile() {
        // Implement download logic or link to file
        console.log('Downloading company profile...');
        // window.open('/assets/docs/company-profile.pdf', '_blank');
    }
}
