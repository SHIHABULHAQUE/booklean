import { Injectable, inject, signal, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private translate = inject(TranslateService);
  private platformId = inject(PLATFORM_ID);
  
  // Current language signal
  currentLang = signal<'en' | 'ar'>('en');

  init() {
    if (isPlatformBrowser(this.platformId)) {
      const savedLang = localStorage.getItem('lang') as 'en' | 'ar';
      const defaultLang = savedLang || 'en';
      
      this.translate.setDefaultLang('en');
      this.setLanguage(defaultLang);
    } else {
      this.translate.setDefaultLang('en');
      this.translate.use('en');
    }
  }

  setLanguage(lang: 'en' | 'ar') {
    this.currentLang.set(lang);
    this.translate.use(lang);

    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('lang', lang);
      
      const htmlTag = document.documentElement;
      if (htmlTag) {
        htmlTag.setAttribute('lang', lang);
        
        if (lang === 'ar') {
          htmlTag.setAttribute('dir', 'rtl');
          document.body.classList.add('rtl-active');
        } else {
          htmlTag.setAttribute('dir', 'ltr');
          document.body.classList.remove('rtl-active');
        }
      }
    }
  }

  toggleLanguage() {
    const nextLang = this.currentLang() === 'en' ? 'ar' : 'en';
    this.setLanguage(nextLang);
  }
}
