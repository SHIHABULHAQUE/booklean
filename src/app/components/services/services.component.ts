import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-services',
    standalone: true,
    imports: [],
    templateUrl: './services.component.html',
    styleUrl: './services.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServicesComponent {
    services = [
        {
            id: 1,
            title: 'Digital Transformation',
            description: 'Modernize your legacy systems with our state-of-the-art AI-driven architecture to stay ahead in the competitive landscape.',
            icon: '🚀'
        },
        {
            id: 2,
            title: 'Cloud Infrastructure',
            description: 'Scalable, secure, and highly available cloud solutions designed for global enterprises with stringent compliance needs.',
            icon: '☁️'
        },
        {
            id: 3,
            title: 'Data Intelligence',
            description: 'Transform raw data into actionable wisdom through advanced analytics, machine learning, and intuitive visualizations.',
            icon: '📊'
        }
    ];
}
