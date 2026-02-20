import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { gsap } from 'gsap';

@Component({
  selector: 'app-logo-marquee',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="marquee-section">
      <!-- Top Row: Large Text Logos -->
      <div class="marquee-wrapper top-row">
        <div class="marquee-content" #topMarquee>
          <div class="logo-item" *ngFor="let logo of topLogos">
            <img [src]="logo.url" [alt]="logo.name" />
          </div>
          <!-- Duplicate for seamless loop -->
          <div class="logo-item" *ngFor="let logo of topLogos">
            <img [src]="logo.url" [alt]="logo.name" />
          </div>
        </div>
      </div>

      <!-- Bottom Row: AI Agents (Icon + Text) -->
      <div class="marquee-wrapper bottom-row">
        <div class="marquee-content" #bottomMarquee>
          <div class="agent-item" *ngFor="let agent of bottomLogos">
            <div class="agent-icon">
              <img [src]="agent.url" [alt]="agent.name" />
            </div>
            <span>{{ agent.name }}</span>
          </div>
          <!-- Duplicate for seamless loop -->
          <div class="agent-item" *ngFor="let agent of bottomLogos">
            <div class="agent-icon">
              <img [src]="agent.url" [alt]="agent.name" />
            </div>
            <span>{{ agent.name }}</span>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: `
    .marquee-section {
      width: 100%;
      background: #000;
      padding: 60px 0;
      overflow: hidden;
      position: relative;
    }

    .marquee-wrapper {
      width: 100%;
      overflow: hidden;
      position: relative;
      padding: 20px 0;

      &::before, &::after {
        position: absolute;
        content: "";
        top: 0;
        width: 150px;
        height: 100%;
        z-index: 2;
        pointer-events: none;
      }

      &::before {
        left: 0;
        background: linear-gradient(90deg, #000 0%, transparent 100%);
      }

      &::after {
        right: 0;
        background: linear-gradient(270deg, #000 0%, transparent 100%);
      }
    }

    .marquee-content {
      display: flex;
      gap: 100px;
      white-space: nowrap;
      align-items: center;
      width: max-content;
    }

    /* Top Row Styles */
    .top-row .logo-item img {
      height: 32px;
      filter: brightness(0) invert(1);
      opacity: 0.7;
      object-fit: contain;
    }

    /* Bottom Row Styles */
    .bottom-row {
      margin-top: 10px;
    }

    .bottom-row .marquee-content {
      gap: 60px;
    }

    .agent-item {
      display: flex;
      align-items: center;
      gap: 12px;
      
      .agent-icon {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        overflow: hidden;
        background: #fff;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      span {
        color: rgba(255, 255, 255, 0.8);
        font-family: var(--font-main);
        font-weight: 700;
        font-size: 14px;
        letter-spacing: 0.5px;
      }
    }
      

  `,
})
export class LogoMarqueeComponent implements AfterViewInit {
  @ViewChild('topMarquee') topMarquee!: ElementRef;
  @ViewChild('bottomMarquee') bottomMarquee!: ElementRef;

  topLogos = [
    { name: 'deepseek', url: 'https://findmyaitool.com/assets/images/s-logo-1.webp' },
    { name: 'DALL·E 2', url: 'https://findmyaitool.com/assets/images/s-logo-2.webp' },
    { name: 'stability.ai', url: 'https://findmyaitool.com/assets/images/s-logo-3.webp' },
    { name: 'Bing', url: 'https://findmyaitool.com/assets/images/s-logo-4.webp' },
    { name: 'CapCut', url: 'https://findmyaitool.com/assets/images/s-logo-5.webp' },
    { name: 'Bard', url: 'https://findmyaitool.com/assets/images/s-logo-6.webp' },
    { name: 'Google AI', url: 'https://findmyaitool.com/assets/images/marquee/google.png' },
  ];

  bottomLogos = [
    { name: 'Twilio AI Assistants', url: 'https://storage.googleapis.com/aiagents_1/agent-logos/1728948598692-e6e2c5ebec74c39d.png' },
    { name: 'v0', url: 'https://storage.googleapis.com/aiagents_1/agent-logos/1730233764897-ca8cbc0a63916c86.png' },
    { name: 'Narrot', url: 'https://storage.googleapis.com/aiagents_1/agent-logos/1729144937331-27a360070715390f.jpg' },
    { name: 'Codestral 25.01', url: 'https://storage.googleapis.com/aiagents_1/agent-logos/1737577267356-download1.webp' },
    { name: 'LaunchLemonade', url: 'https://storage.googleapis.com/aiagents_1/agent-logos/1733772589628-launchlemonadelogo.jpeg' },
    { name: 'Ask On Data', url: 'https://storage.googleapis.com/aiagents_1/agent-logos/1731918151942-068365178b104379.png' },
    { name: 'ShortWave', url: 'https://storage.googleapis.com/aiagents_1/agent-logos/1726104221659-e08a51e1443aa75b.png' },
    { name: 'LevelFields AI', url: 'https://storage.googleapis.com/aiagents_1/agent-logos/1729312202934-7bfbe627dba1d955.png' },
  ];

  ngAfterViewInit() {
    this.animateMarquee(this.topMarquee.nativeElement, 40);
    this.animateMarquee(this.bottomMarquee.nativeElement, 35);
  }

  animateMarquee(el: HTMLElement, duration: number) {
    const scrollWidth = el.scrollWidth / 2;
    gsap.to(el, {
      x: -scrollWidth,
      duration: duration,
      ease: 'none',
      repeat: -1,
    });
  }
}
