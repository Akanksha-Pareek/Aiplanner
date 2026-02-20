import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-explore-gpts',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="gpts-section">
      <div class="section-header">
        <h2 class="text-gradient">Explore GPT's</h2>
        <p>Simplify Complexity with Explore GPT Categories.</p>
      </div>

      <div class="gpts-grid">
        <div class="gpt-card" *ngFor="let gpt of gpts">
          <div class="gpt-avatar">
            <img [src]="gpt.avatar" [alt]="gpt.name" />
          </div>
          <div class="gpt-content">
            <h3 class="gpt-name">{{ gpt.name }}</h3>
            <p class="gpt-desc">{{ gpt.description }}</p>
            <div class="gpt-footer">
              <span class="gpt-author">{{ gpt.author }}</span>
              <div class="gpt-stat"><i class="pi pi-chart-line"></i> {{ gpt.usage }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: `
    .gpts-section {
      padding: 5rem 5%;
    }

    .section-header {
      text-align: center;
      margin-bottom: 4rem;

      h2 {
        font-size: 2.5rem;
        font-weight: 800;
        margin-bottom: 1rem;
      }

      p {
        color: var(--text-muted);
        font-size: 1.1rem;
      }
    }

    .gpts-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 24px;
    }

    .gpt-card {
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 20px;
      padding: 20px;
      display: flex;
      gap: 20px;
      transition: all 0.3s ease;
      cursor: pointer;

      &:hover {
        background: rgba(255, 255, 255, 0.06);
        border-color: rgba(98, 93, 245, 0.3);
        transform: translateY(-5px);
      }
    }

    .gpt-avatar {
      width: 70px;
      height: 70px;
      border-radius: 16px;
      overflow: hidden;
      flex-shrink: 0;
      background: #111;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .gpt-content {
      flex: 1;
      display: flex;
      flex-direction: column;

      .gpt-name {
        font-size: 17px;
        font-weight: 800;
        color: #fff;
        margin-bottom: 6px;
      }

      .gpt-desc {
        font-size: 13px;
        color: var(--text-muted);
        line-height: 1.4;
        margin-bottom: 12px;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }

      .gpt-footer {
        margin-top: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .gpt-author {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.5);
          font-weight: 600;
        }

        .gpt-stat {
          font-size: 11px;
          color: #625df5;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 5px;
        }
      }
    }

    @media (max-width: 1100px) {
      .gpts-grid { grid-template-columns: repeat(2, 1fr); }
    }
    @media (max-width: 650px) {
      .gpts-grid { grid-template-columns: 1fr; }
    }
  `,
})
export class ExploreGptsComponent {
  gpts = [
    {
      name: "Actor 'Scene' Writer",
      description: "Write compelling scenes for your scripts and stories.",
      author: "@joelkawira.com",
      avatar: "https://prod-findmyaitool.s3.us-east-1.amazonaws.com/images/appImg/actor-scene-writer-1715198867406",
      usage: "10K+"
    },
    {
      name: "Blueprint Scribe",
      description: "Technical architecture and system design companion.",
      author: "@architecture.ai",
      avatar: "https://prod-findmyaitool.s3.us-east-1.amazonaws.com/images/appImg/blueprint-scribe-1715152167147",
      usage: "5K+"
    },
    {
      name: "Code Engineer",
      description: "Advanced debugging and software engineering helper.",
      author: "@dev.helper",
      avatar: "https://prod-findmyaitool.s3.us-east-1.amazonaws.com/images/appImg/code-1715238701972",
      usage: "25K+"
    }
  ];
}
