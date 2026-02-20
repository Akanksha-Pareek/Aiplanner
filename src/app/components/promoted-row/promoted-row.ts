import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-promoted-row',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="promoted-container">
      <div class="promoted-label">PROMOTED</div>
      <div class="promoted-list">
        <div class="promoted-item" *ngFor="let item of items">
          <img [src]="item.logo" [alt]="item.name" />
          <span>{{ item.name }}</span>
        </div>
      </div>
    </div>
  `,
  styles: `
    .promoted-container {
      display: flex;
      align-items: center;
      gap: 30px;
      padding: 20px 5%;
      background: #000;
      border-bottom: 1px solid rgba(255, 255, 255, 0.05);
      overflow-x: auto;
      scrollbar-width: none;
      &::-webkit-scrollbar { display: none; }
    }

    .promoted-label {
      background: rgba(255, 255, 255, 0.05);
      color: rgba(255, 255, 255, 0.5);
      font-size: 11px;
      font-weight: 800;
      padding: 4px 10px;
      border-radius: 4px;
      letter-spacing: 1px;
    }

    .promoted-list {
      display: flex;
      gap: 40px;
      align-items: center;
    }

    .promoted-item {
      display: flex;
      align-items: center;
      gap: 10px;
      cursor: pointer;
      opacity: 0.7;
      transition: opacity 0.3s;

      &:hover {
        opacity: 1;
      }

      img {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background: #fff;
      }

      span {
        color: #fff;
        font-size: 14px;
        font-weight: 700;
        white-space: nowrap;
      }
    }
  `
})
export class PromotedRowComponent {
  items = [
    { name: 'gptme', logo: 'https://storage.googleapis.com/aiagents_1/agent-logos/1734081312969-logo.png' },
    { name: 'MachineTranslation', logo: 'https://storage.googleapis.com/aiagents_1/agent-logos/1734205869621-logo.b570f3ec.svg' },
    { name: 'bolt.diy', logo: 'https://storage.googleapis.com/aiagents_1/agent-logos/1735627602344-164069192.jpeg' },
    { name: 'Multi-GPT', logo: 'https://storage.googleapis.com/aiagents_1/agent-logos/1721098084555-ea0608c86339cfeb.png' },
    { name: 'WhatsAppCopilot', logo: 'https://storage.googleapis.com/aiagents_1/agent-logos/1726832195509-6dad3a47e9ba2e09.png' },
    { name: 'DigitalEmployees.io', logo: 'https://storage.googleapis.com/aiagents_1/agent-logos/1738181037069-QXLogo.jpeg' },
    { name: 'DAVEAI', logo: 'https://storage.googleapis.com/aiagents_1/agent-logos/1737116329218-DaveAILogo.jpg' },
    { name: 'CallFluent AI', logo: 'https://storage.googleapis.com/aiagents_1/agent-logos/1720665814015-c28841b58e36da42.jpg' },
    { name: 'Bloop AI', logo: 'https://storage.googleapis.com/aiagents_1/agent-logos/1721942899829-94dfa7deec162a76.png' },
    { name: 'OpenRouter AI', logo: 'https://storage.googleapis.com/aiagents_1/agent-logos/1725248360296-cfaf139b0fe48d7f.jpg' },
    { name: 'Mentat', logo: 'https://storage.googleapis.com/aiagents_1/agent-logos/1724904465595-bf88361475baeaef.png' },
    { name: 'Pixtral 12B', logo: 'https://storage.googleapis.com/aiagents_1/agent-logos/1737580998391-download1.webp' }
  ];
}
