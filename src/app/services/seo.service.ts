import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

interface SeoPageConfig {
  title: string;
  description: string;
  path: string;
  canonicalUrl?: string;
  structuredData?: unknown[];
}

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private readonly siteUrl = 'https://www.bookleanglobal.com';
  private readonly structuredDataScriptId = 'booklean-page-jsonld';
  private readonly hreflangUrls = [
    { hreflang: 'en-ae', href: 'https://www.bookleanglobal.com/uae/home' },
    { hreflang: 'en-in', href: 'https://www.bookleanglobal.com/in/home' },
    { hreflang: 'en-gb', href: 'https://www.bookleanglobal.com/uk/home' },
    { hreflang: 'x-default', href: 'https://www.bookleanglobal.com/' },
  ];

  constructor(
    private title: Title,
    private meta: Meta,
    @Inject(DOCUMENT) private document: Document
  ) {}

  setPage(config: SeoPageConfig) {
    const url = `${this.siteUrl}${config.path}`;
    const canonicalUrl = config.canonicalUrl || url;
    const title = this.clean(config.title);
    const description = this.clean(config.description);

    this.title.setTitle(title);
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });
    this.meta.updateTag({ property: 'og:title', content: title });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:url', content: url });
    this.meta.updateTag({ name: 'twitter:title', content: title });
    this.meta.updateTag({ name: 'twitter:description', content: description });
    this.meta.updateTag({ name: 'twitter:url', content: url });
    this.setCanonical(canonicalUrl);
    this.setHreflangLinks();

    if (config.structuredData?.length) {
      this.setStructuredData(config.structuredData);
    }
  }

  private setCanonical(url: string) {
    let link = this.document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.document.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }

  private setHreflangLinks() {
    this.document
      .querySelectorAll<HTMLLinkElement>('link[rel="alternate"][hreflang]')
      .forEach((link) => link.remove());

    for (const alternate of this.hreflangUrls) {
      const link = this.document.createElement('link');
      link.setAttribute('rel', 'alternate');
      link.setAttribute('hreflang', alternate.hreflang);
      link.setAttribute('href', alternate.href);
      this.document.head.appendChild(link);
    }
  }

  private setStructuredData(data: unknown[]) {
    let script = this.document.getElementById(this.structuredDataScriptId) as HTMLScriptElement | null;
    if (!script) {
      script = this.document.createElement('script');
      script.id = this.structuredDataScriptId;
      script.type = 'application/ld+json';
      this.document.head.appendChild(script);
    }

    script.textContent = JSON.stringify(data).replace(/</g, '\\u003c');
  }

  private clean(value: string) {
    return value.replace(/\s+/g, ' ').trim();
  }
}
