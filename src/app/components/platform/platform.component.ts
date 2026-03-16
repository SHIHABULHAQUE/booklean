import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-platform',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './platform.component.html',
  styleUrl: './platform.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlatformComponent {
  features = [
    {
      icon: '🧠',
      title: 'Multi-Model AI Orchestration',
      desc: 'Routes queries between GPT-4o, Claude 3, Gemini, and DeepSeek — using fast models for triage and reasoning models for complex tax queries.'
    },
    {
      icon: '📄',
      title: 'Intelligent OCR & Document Processing',
      desc: 'Extracts invoice data, receipt information, and financial documents automatically with 99%+ accuracy — zero manual entry required.'
    },
    {
      icon: '💬',
      title: '24/7 Client Interface',
      desc: 'Available on WhatsApp, Web Portal, and Voice. Handles FAQs, chases missing documents, and prepopulates compliance forms autonomously.'
    },
    {
      icon: '🔒',
      title: 'Zero-Knowledge Data Sovereignty',
      desc: 'All data processed within UAE borders (Azure/AWS UAE Regions). AES-256 encryption. Zero-retention AI policies. Full PDPL compliance.'
    },
    {
      icon: '📊',
      title: 'RAG-Powered Research & Analysis',
      desc: 'Real-time regulatory research, FTA ruling lookups, and predictive financial modeling — always current, always accurate.'
    }
  ];

  models = ['GPT-4o', 'Claude 3', 'Gemini 1.5', 'DeepSeek', 'Llama 3.3', 'Botpress'];
}
