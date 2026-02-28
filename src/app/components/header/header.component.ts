import { Component, ChangeDetectionStrategy, signal } from '@angular/core';

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
    isMenuOpen = signal(false);
    imageError = signal(false);

    toggleMenu() {
        this.isMenuOpen.update(v => !v);
    }
}
