import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../components/header/header.component';
import { ChatAssistantComponent } from '../components/chat/chat-assistant.component';
import { BookingModalComponent } from '../components/booking-modal/booking-modal.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, ChatAssistantComponent, BookingModalComponent],
  template: `
    <div class="app-container">
      <div class="main-content">
        <app-header></app-header>
        <main class="app-main">
          <router-outlet></router-outlet>
        </main>
        <app-chat-assistant></app-chat-assistant>
        <app-booking-modal></app-booking-modal>
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      position: relative;
      z-index: 1;
    }

    .app-container {
      min-height: 100vh;
    }

    .main-content,
    .app-main {
      position: relative;
      z-index: 1;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainLayoutComponent {}
