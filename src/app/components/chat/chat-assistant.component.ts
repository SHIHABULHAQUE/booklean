import { Component, ChangeDetectionStrategy, signal, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegionDataService } from '../../services/region-data.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-chat-assistant',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './chat-assistant.component.html',
  styleUrl: './chat-assistant.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatAssistantComponent implements OnInit {
  private translateService = inject(TranslateService);
  isOpen = signal(false);
  showBubble = signal(false);
  messages = signal<Array<{ type: string; text: string; textKey?: string; time: Date }>>([]);

  constructor(public regionDataService: RegionDataService) { }

  ngOnInit() {
    this.messages.set([
      { type: 'bot', text: '', textKey: 'CHAT.BOT_INTRO', time: new Date() }
    ]);
    setTimeout(() => {
      this.showBubble.set(true);
    }, 2000);
  }

  toggleChat() {
    this.isOpen.update(v => !v);
  }

  sendMessage(text: string) {
    if (!text) return;
    
    // Add user message
    this.messages.update(m => [...m, { type: 'user', text, time: new Date() }]);

    // Simple automated response for "financial chats"
    setTimeout(() => {
        let responseKey = "CHAT.RESPONSE_DEFAULT";
        const input = text.toLowerCase();

        if (input.includes('tax')) {
            responseKey = "CHAT.RESPONSE_TAX";
        } else if (input.includes('audit')) {
            responseKey = "CHAT.RESPONSE_AUDIT";
        } else if (input.includes('cfo')) {
            responseKey = "CHAT.RESPONSE_CFO";
        } else if (input.includes('vat')) {
            responseKey = "CHAT.RESPONSE_VAT";
        } else if (input.includes('bookkeeping') || input.includes('accounting')) {
            responseKey = "CHAT.RESPONSE_BOOKKEEPING";
        }
        
        this.messages.update(m => [...m, { type: 'bot', text: '', textKey: responseKey, time: new Date() }]);
    }, 1000);
  }

  openWhatsApp() {
    const phone = this.regionDataService.data().whatsapp.replace('+', '');
    window.open(`https://wa.me/${phone}`, '_blank');
  }
}
