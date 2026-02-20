import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-featured-agents',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="agents-section">
      <div class="section-header">
        <h2 class="text-gradient">Featured AI Agents</h2>
        <p>Unlock innovation with our diverse range of AI agents.</p>
      </div>

      <div class="agents-grid">
        <div class="agent-card" *ngFor="let agent of agents">
          <div class="card-image">
            <img [src]="agent.image" [alt]="agent.name" />
          </div>
          <div class="card-content">
            <div class="agent-header">
              <img [src]="agent.logo" [alt]="agent.name" class="agent-logo" />
              <div class="agent-meta">
                <h3 class="agent-name">{{ agent.name }} <i class="pi pi-verified"></i></h3>
                <span class="agent-category">{{ agent.category }}</span>
              </div>
            </div>
            <p class="agent-desc">{{ agent.description }}</p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: `
    .agents-section {
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

    .agents-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 24px;
    }

    .agent-card {
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 20px;
      padding: 12px;
      transition: all 0.3s ease;
      cursor: pointer;

      &:hover {
        transform: translateY(-8px);
        background: rgba(255, 255, 255, 0.06);
        border-color: rgba(98, 93, 245, 0.3);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
      }
    }

    .card-image {
      width: 100%;
      aspect-ratio: 16/10;
      border-radius: 14px;
      overflow: hidden;
      margin-bottom: 15px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .agent-header {
      display: flex;
      gap: 12px;
      align-items: center;
      margin-bottom: 12px;

      .agent-logo {
        width: 38px;
        height: 38px;
        border-radius: 50%;
        background: #fff;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }

      .agent-meta {
        .agent-name {
          font-size: 16px;
          font-weight: 800;
          color: #fff;
          margin: 0;
          display: flex;
          align-items: center;
          gap: 6px;

          i {
            color: #625df5;
            font-size: 14px;
          }
        }

        .agent-category {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.6);
          font-weight: 600;
        }
      }
    }

    .agent-desc {
      font-size: 13px;
      color: var(--text-muted);
      line-height: 1.5;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    @media (max-width: 1200px) {
      .agents-grid { grid-template-columns: repeat(3, 1fr); }
    }
    @media (max-width: 992px) {
      .agents-grid { grid-template-columns: repeat(2, 1fr); }
    }
    @media (max-width: 600px) {
      .agents-grid { grid-template-columns: 1fr; }
    }
  `,
})
export class FeaturedAgentsComponent {
  agents = [
    {
      name: 'Gradient Labs',
      category: 'Customer Service',
      description: 'AI-powered customer service agents that learn from your docs.',
      image: 'https://storage.googleapis.com/aiagents_1/agent-logos/1728948598692-e6e2c5ebec74c39d.png',
      logo: 'https://storage.googleapis.com/aiagents_1/agent-logos/1728948598692-e6e2c5ebec74c39d.png'
    },
    {
      name: 'Telezen Template',
      category: 'Productivity',
      description: 'Streamline your workflows with autonomous task management.',
      image: 'https://storage.googleapis.com/aiagents_1/agent-logos/1730233764897-ca8cbc0a63916c86.png',
      logo: 'https://storage.googleapis.com/aiagents_1/agent-logos/1730233764897-ca8cbc0a63916c86.png'
    },
    {
      name: 'Solanasaurus',
      category: 'Blockchain',
      description: 'Intelligent blockchain explorer and analysis agent.',
      image: 'https://storage.googleapis.com/aiagents_1/agent-logos/1729144937331-27a360070715390f.jpg',
      logo: 'https://storage.googleapis.com/aiagents_1/agent-logos/1729144937331-27a360070715390f.jpg'
    },
    {
      name: 'Globus Agent',
      category: 'Logistics',
      description: 'Optimize global shipping and logistics with AI-driven insights.',
      image: 'https://storage.googleapis.com/aiagents_1/agent-logos/1737577267356-download1.webp',
      logo: 'https://storage.googleapis.com/aiagents_1/agent-logos/1737577267356-download1.webp'
    }
  ];
}
