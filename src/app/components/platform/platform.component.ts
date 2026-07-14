import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-platform', standalone: true, imports: [CommonModule], templateUrl: './platform.component.html', styleUrl: './platform.component.scss', changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlatformComponent {
  features = [
    {
      icon: '🧠', title: 'ChatGPT + Gemini Orchestration', desc: 'Routes client questions through ChatGPT first, then Gemini as fallback, keeping LeanBot live for UAE tax and finance queries.'
    }, {
      icon: '📄', title: 'Intelligent OCR & Document Processing', desc: 'Extracts invoice data, receipt information, and financial documents automatically with 99%+ accuracy, zero manual entry required.'
    }, {
      icon: '💬', title: '24/7 Client Interface', desc: 'Available on WhatsApp, Web Portal, and Voice. Handles FAQs, chases missing documents, and prepopulates compliance forms autonomously.'
    }, {
      icon: '🔒', title: 'Zero-Knowledge Data Sovereignty', desc: 'All data processed within UAE borders (Azure/AWS UAE Regions). AES-256 encryption. Zero-retention AI policies. Full PDPL compliance.'
    }, {
      icon: '📊', title: 'RAG-Powered Research & Analysis', desc: 'Real-time regulatory research, FTA ruling lookups, and predictive financial modeling, always current, always accurate.'
    }
  ];

  models = ['ChatGPT', 'Gemini'];
}
