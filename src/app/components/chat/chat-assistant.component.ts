import { Component, ChangeDetectionStrategy, signal, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegionDataService } from '../../services/region-data.service';
import { TranslateModule } from '@ngx-translate/core';

interface ChatMessage {
  type: 'bot' | 'user';
  text: string;
  textKey?: string;
  time: Date;
}

declare global {
  interface Window {
    BOOKLEAN_CHAT_API_URL?: string;
  }
}

@Component({
  selector: 'app-chat-assistant',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './chat-assistant.component.html',
  styleUrl: './chat-assistant.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatAssistantComponent implements OnInit, OnDestroy {
  isOpen = signal(false);
  showBubble = signal(false);
  isSending = signal(false);
  messages = signal<ChatMessage[]>([]);
  private readonly externalOpenHandler = (event: Event) => {
    const detail = (event as CustomEvent<{ message?: string }>).detail;
    const message = detail?.message?.trim();

    this.isOpen.set(true);

    if (message) {
      void this.sendMessage(message);
    }
  };

  constructor(public regionDataService: RegionDataService) {}

  ngOnInit() {
    this.messages.set([{ type: 'bot', text: '', textKey: 'CHAT.BOT_INTRO', time: new Date() }]);
    setTimeout(() => {
      this.showBubble.set(true);
    }, 2000);

    if (typeof window !== 'undefined') {
      window.addEventListener('booklean-open-chat', this.externalOpenHandler);
    }
  }

  ngOnDestroy() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('booklean-open-chat', this.externalOpenHandler);
    }
  }

  toggleChat() {
    this.isOpen.update((v) => !v);
  }

  async sendMessage(text: string) {
    const message = text.trim();
    if (!message || this.isSending()) return;

    this.messages.update((m) => [...m, { type: 'user', text: message, time: new Date() }]);
    this.isSending.set(true);

    try {
      const reply = await this.askBackend(message);
      this.messages.update((m) => [...m, { type: 'bot', text: reply, time: new Date() }]);
    } catch {
      this.messages.update((m) => [
        ...m,
        { type: 'bot', text: '', textKey: 'CHAT.BACKEND_ERROR', time: new Date() },
      ]);
    } finally {
      this.isSending.set(false);
    }
  }

  openWhatsApp() {
    const phone = this.regionDataService.data().whatsapp.replace('+', '');
    const message = encodeURIComponent(
      'Hello BookLean team, I need help with UAE tax and accounting.',
    );
    window.open(
      `https://api.whatsapp.com/send?phone=${phone}&text=${message}`,
      '_blank',
      'noopener,noreferrer',
    );
  }

  private async askBackend(message: string): Promise<string> {
    const endpoint = this.chatEndpoint();

    if (!endpoint) {
      throw new Error('LeanBot backend is not configured for this host.');
    }

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message,
        history: this.messages()
          .filter((item) => item.text && (item.type === 'user' || item.type === 'bot'))
          .slice(-8)
          .map((item) => ({
            role: item.type === 'bot' ? 'assistant' : 'user',
            content: item.text,
          })),
      }),
    });

    if (!response.ok) {
      throw new Error('LeanBot backend unavailable.');
    }

    const data = (await response.json()) as { reply?: string };
    const reply = data.reply?.trim();

    if (!reply) {
      throw new Error('LeanBot backend returned an empty reply.');
    }

    return reply;
  }

  private chatEndpoint(): string | null {
    if (typeof window === 'undefined') {
      return null;
    }

    const configuredUrl = window.BOOKLEAN_CHAT_API_URL?.trim();

    if (configuredUrl) {
      const baseUrl = configuredUrl.replace(/\/$/, '');
      return baseUrl.endsWith('/api/chat') ? baseUrl : `${baseUrl}/api/chat`;
    }

    if (window.location.hostname.endsWith('github.io')) {
      return null;
    }

    return '/api/chat';
  }
}
