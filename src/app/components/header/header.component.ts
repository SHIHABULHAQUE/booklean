import { Component, ChangeDetectionStrategy, signal, inject, HostListener, HostBinding, ElementRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RegionDataService } from '../../services/region-data.service';
import { ThemeService } from '../../services/theme.service';
import { BookingModalService } from '../../services/booking-modal.service';
import { TranslationService } from '../../services/translation.service';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-header', standalone: true, imports: [RouterLink, TranslateModule, CommonModule], templateUrl: './header.component.html', styleUrl: './header.component.scss', changeDetection: ChangeDetectionStrategy.OnPush, })
export class HeaderComponent {
    translationService = inject(TranslationService);
    isMenuOpen = signal(false);
    openMenu = signal('');
    suppressMegaHover = signal(false);
    countryMenuOpen = signal(false);
    langMenuOpen = signal(false);
    isScrolled = signal(false);
    imageError = signal(false);
    regionDataService = inject(RegionDataService);
    themeService = inject(ThemeService);
    bookingService = inject(BookingModalService);
    private elementRef = inject(ElementRef);
    private hoverSuppressTimer: ReturnType<typeof setTimeout> | undefined;

    @HostBinding('class.mega-hover-suppressed')
    get megaHoverSuppressed() {
        return this.suppressMegaHover();
    }

    @HostListener('window:scroll', [])
    onWindowScroll() {
        const scrolled = window.pageYOffset > 20;
        if (this.isScrolled() !== scrolled) {
            this.isScrolled.set(scrolled);
        }
    }

    @HostListener('window:resize', [])
    onWindowResize() {
        if (typeof window !== 'undefined' && window.innerWidth > 1024 && this.isMenuOpen()) {
            this.closeMobileMenu();
        }
    }

    @HostListener('document:click', ['$event'])
    clickout(event: Event) {
        if (!this.elementRef.nativeElement.contains(event.target)) {
            this.openMenu.set('');
            this.countryMenuOpen.set(false);
            this.langMenuOpen.set(false);
            this.isMenuOpen.set(false);
        }
    }

    toggleMenu() {
        const next = !this.isMenuOpen();
        this.isMenuOpen.set(next);

        if (!next) {
            this.openMenu.set('');
        }
    }

    toggleMega(menu: string) {
        this.suppressMegaHover.set(false);
        this.openMenu.update((value) => value === menu ? '' : menu);
    }

    toggleCountryMenu() {
        this.countryMenuOpen.update((value) => !value);
        this.langMenuOpen.set(false);
    }

    toggleLangMenu() {
        this.langMenuOpen.update((value) => !value);
        this.countryMenuOpen.set(false);
    }

    get currentFlag(): { img: string, text: string } {
        switch(this.regionDataService.currentRegion()) {
            case 'uk': return { img: 'https://flagcdn.com/w40/gb.png', text: 'UK' };
            case 'in': return { img: 'https://flagcdn.com/w40/in.png', text: 'IN' };
            default: return { img: 'https://flagcdn.com/w40/ae.png', text: 'UAE' };
        }
    }

    toggleTheme() {
        this.themeService.toggleTheme();
    }

    closeMobileMenu() {
        this.isMenuOpen.set(false);
        this.openMenu.set('');
        this.countryMenuOpen.set(false);
        this.langMenuOpen.set(false);
        this.suppressMegaHover.set(true);

        if (this.hoverSuppressTimer) {
            clearTimeout(this.hoverSuppressTimer);
        }

        this.hoverSuppressTimer = setTimeout(() => {
            this.suppressMegaHover.set(false);
        }, 450);
    }

    openBookingModal(event: Event) {
        event.preventDefault();
        this.bookingService.open();
    }
}
