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
