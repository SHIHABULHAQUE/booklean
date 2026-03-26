import { Component, ChangeDetectionStrategy, signal, inject, HostListener, ElementRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RegionDataService } from '../../services/region-data.service';
import { ThemeService } from '../../services/theme.service';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
    isMenuOpen = signal(false);
    openMenu = signal('');
    countryMenuOpen = signal(false);
    isScrolled = signal(false);
    imageError = signal(false);
    regionDataService = inject(RegionDataService);
    themeService = inject(ThemeService);
    private elementRef = inject(ElementRef);

    @HostListener('window:scroll', [])
    onWindowScroll() {
        this.isScrolled.set(window.pageYOffset > 20);
    }

    @HostListener('document:click', ['$event'])
    clickout(event: Event) {
        if (!this.elementRef.nativeElement.contains(event.target)) {
            this.openMenu.set('');
            this.countryMenuOpen.set(false);
        }
    }

    toggleMenu() {
        this.isMenuOpen.update(v => !v);
    }

    toggleMega(menu: string) {
        this.openMenu.update(v => v === menu ? '' : menu);
    }

    toggleCountryMenu() {
        this.countryMenuOpen.update(v => !v);
    }

    toggleTheme() {
        this.themeService.toggleTheme();
    }
}
