import { Component, ChangeDetectionStrategy, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegionDataService } from '../../services/region-data.service';

@Component({
  selector: 'app-chat-assistant',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chat-assistant.component.html',
  styleUrl: './chat-assistant.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatAssistantComponent implements OnInit {
  isOpen = signal(false);
  showBubble = signal(false);
  messages = signal([
    { type: 'bot', text: 'Hi! I\'m LeenBot ∞. How can I help you with your finances today?', time: new Date() }
  ]);

  constructor(public regionDataService: RegionDataService) { }

  ngOnInit() {
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
        let response = "That's a great question! For detailed financial advice, would you like to speak with our experts?";
        const input = text.toLowerCase();

        if (input.includes('tax')) {
            response = "I can certainly help with tax queries! In the UAE, corporate tax is 9% for taxable income above AED 375,000. Booklean ensures your business stays compliant and optimized. Shall I book a call for you?";
        } else if (input.includes('audit')) {
            response = "Booklean provides comprehensive audit and assurance services. We ensure full compliance with international standards (IFRS). Would you like to see our audit checklist?";
        } else if (input.includes('cfo')) {
            response = "Our AI-powered CFO services provide real-time intelligence, cash flow forecasting, and strategic valuation. It's like having a robotic brain for your business growth! Interested?";
        } else if (input.includes('vat')) {
            response = "VAT compliance is one of our specialties. From registration to filing, we handle it all seamlessly via the FTA portal. Need help with a filing?";
        } else if (input.includes('bookkeeping') || input.includes('accounting')) {
            response = "Our smart accounting model combines human wisdom with robotic precision. We reconcile your accounts daily to keep your books 'Clean & Lean'. Shall we start your setup?";
        }
        
        this.messages.update(m => [...m, { type: 'bot', text: response, time: new Date() }]);
    }, 1000);
  }

  openWhatsApp() {
    const phone = this.regionDataService.data().whatsapp.replace('+', '');
    window.open(`https://wa.me/${phone}`, '_blank');
  }
}
