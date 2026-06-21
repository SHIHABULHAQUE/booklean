import { RenderMode, ServerRoute } from '@angular/ssr';

const REGIONS = ['in', 'uae', 'uk'];
const SERVICE_IDS = ['tax', 'bso', 'digital', 'advisory', 'audit', 'corporate', 'regulatory', 'industry'];
const INDUSTRY_IDS = ['restaurant', 'retail', 'ecommerce', 'hospitality', 'realestate', 'tech', 'healthcare', 'logistics', 'banking', 'manufacturing', 'oilgas', 'freelancer'];
const INSIGHT_IDS = ['corporate-tax', 'vat', 'peppol', 'esr-aml', 'transfer-pricing', 'mainland-freezone', 'payroll-wps', 'cashflow', 'startup-uae', 'golden-visa', 'restaurant-vat', 'ecommerce-tax', 'realestate-vat', 'freelancer-tax', 'healthcare-vat'];

export const serverRoutes: ServerRoute[] = [
  {
    path: ':region',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return REGIONS.map((region) => ({ region }));
    }
  },
  {
    path: ':region/home',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return REGIONS.map((region) => ({ region }));
    }
  },
  {
    path: ':region/service/:id',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return SERVICE_IDS.map((id) => ({ region: 'uae', id }));
    }
  },
  {
    path: ':region/industry/:id',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return INDUSTRY_IDS.map((id) => ({ region: 'uae', id }));
    }
  },
  {
    path: ':region/insight/:id',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return INSIGHT_IDS.map((id) => ({ region: 'uae', id }));
    }
  },
  {
    path: ':region/faq',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return REGIONS.map((region) => ({ region }));
    }
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
