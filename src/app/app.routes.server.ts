import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: ':region',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return [
        { region: 'in' },
        { region: 'uae' },
        { region: 'uk' }
      ];
    }
  },
  {
    path: ':region/home',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return [
        { region: 'in' },
        { region: 'uae' },
        { region: 'uk' }
      ];
    }
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
