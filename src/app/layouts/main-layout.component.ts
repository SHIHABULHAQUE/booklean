import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../components/header/header.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';

@Component({
    selector: 'app-main-layout',
    standalone: true,
    imports: [RouterOutlet, HeaderComponent, SidebarComponent],
    template: `
    <div class="app-container">
      <app-sidebar></app-sidebar>
      <div class="main-content">
        <app-header></app-header>
        <main>
          <router-outlet></router-outlet>
        </main>
      </div>
    </div>
  `,
    styles: [`
    .app-container {
      display: flex;
      min-height: 100vh;
      width: 100%;
    }
    .main-content {
      flex: 1;
      margin-left: var(--sidebar-width);
      display: flex;
      flex-direction: column;
      width: calc(100% - var(--sidebar-width));
    }
    @media (max-width: 768px) {
      .main-content {
        margin-left: 0;
        width: 100%;
      }
    }
  `],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainLayoutComponent { }
