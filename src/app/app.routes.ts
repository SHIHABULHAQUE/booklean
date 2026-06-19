import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'uae/home',
        pathMatch: 'full'
    },
    {
        path: ':region',
        loadComponent: () => import('./layouts/main-layout.component').then(m => m.MainLayoutComponent),
        children: [
            {
                path: 'home',
                loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
            },
            {
                path: 'service/:id',
                loadComponent: () => import('./pages/service-detail/service-detail.component').then(m => m.ServiceDetailComponent)
            },
            {
                path: 'industry/:id',
                loadComponent: () => import('./pages/industry-detail/industry-detail.component').then(m => m.IndustryDetailComponent)
            },
            {
                path: 'insight/:id',
                loadComponent: () => import('./pages/insight-detail/insight-detail.component').then(m => m.InsightDetailComponent)
            },
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '**',
        redirectTo: ''
    }
];
