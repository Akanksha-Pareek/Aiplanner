import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-popular-tools',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="popular-section">
      <div class="section-header">
        <h2 class="text-gradient">Popular AI Tools</h2>
        <p>Discover the Best AI Tools Making Your Life Easier.</p>
      </div>

      <div class="popular-grid">
        <div class="popular-card" *ngFor="let tool of popularTools">
          <div class="card-screenshot">
            <img [src]="tool.screenshot" [alt]="tool.name" />
            <div class="trending-badge"><i class="pi pi-bolt"></i> Trending</div>
          </div>
          <div class="card-footer">
            <div class="tool-icon">
              <img [src]="tool.logo" [alt]="tool.name" />
            </div>
            <div class="tool-meta">
              <p class="tool-name">{{ tool.name }} <i class="pi pi-verified"></i></p>
              <div class="cat-row">
                <span class="tool-category">{{ tool.category }}</span>
                <div class="rating"><i class="pi pi-star-fill"></i> {{ tool.rating }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: `
    .popular-section {
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

    .popular-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 24px;
    }

    .popular-card {
      background: rgba(255, 255, 255, 0.035);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 20px;
      padding: 12px;
      transition: all 0.3s ease;
      cursor: pointer;

      &:hover {
        transform: translateY(-8px);
        background: rgba(255, 255, 255, 0.06);
        border-color: rgba(98, 93, 245, 0.3);
      }
    }

    .card-screenshot {
      position: relative;
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

      .trending-badge {
        position: absolute;
        top: 10px;
        right: 10px;
        background: rgba(0, 0, 0, 0.6);
        backdrop-filter: blur(5px);
        color: #fff;
        padding: 4px 10px;
        border-radius: 8px;
        font-size: 11px;
        font-weight: 700;
        display: flex;
        align-items: center;
        gap: 5px;

        i {
          color: #facc15;
        }
      }
    }

    .card-footer {
      display: flex;
      gap: 12px;
      align-items: center;
    }

    .tool-icon {
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

    .tool-meta {
      flex: 1;

      .tool-name {
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

      .cat-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 2px;
      }

      .tool-category {
        font-size: 12px;
        color: rgba(255, 255, 255, 0.6);
        font-weight: 600;
      }

      .rating {
        font-size: 11px;
        color: #facc15;
        font-weight: 700;
        display: flex;
        align-items: center;
        gap: 3px;
      }
    }

    @media (max-width: 1200px) {
      .popular-grid { grid-template-columns: repeat(3, 1fr); }
    }
    @media (max-width: 920px) {
      .popular-grid { grid-template-columns: repeat(2, 1fr); }
    }
    @media (max-width: 580px) {
      .popular-grid { grid-template-columns: 1fr; }
    }
  `,
})
export class PopularToolsComponent {
  popularTools = [
    {
      name: 'Elai io',
      category: 'Video',
      rating: 4.8,
      screenshot: 'https://prod-findmyaitool.s3.us-east-1.amazonaws.com/images/ai-tool/web-thumbnail/Elai%20io-1723796629407',
      logo: 'https://prod-findmyaitool.s3.us-east-1.amazonaws.com/images/ai-tool/logo/Elai%20io-1723796629407'
    },
    {
      name: 'Apple Books',
      category: 'Text To Speech',
      rating: 4.7,
      screenshot: 'https://prod-findmyaitool.s3.us-east-1.amazonaws.com/images/ai-tool/web-thumbnail/Apple%20Books-1723795200803',
      logo: 'https://prod-findmyaitool.s3.us-east-1.amazonaws.com/images/ai-tool/logo/Apple%20Books-1723795200803'
    },
    {
      name: 'Canva Text to Image',
      category: 'Image',
      rating: 4.9,
      screenshot: 'https://prod-findmyaitool.s3.us-east-1.amazonaws.com/images/ai-tool/web-thumbnail/Canva%20Text%20to%20Image-1723796026351',
      logo: 'https://prod-findmyaitool.s3.us-east-1.amazonaws.com/images/ai-tool/logo/Canva%20Text%20to%20Image-1723796026351'
    },
    {
      name: 'InVideo',
      category: 'Video',
      rating: 4.6,
      screenshot: 'https://prod-findmyaitool.s3.us-east-1.amazonaws.com/images/ai-tool/web-thumbnail/InVideo-1723795882732',
      logo: 'https://prod-findmyaitool.s3.us-east-1.amazonaws.com/images/ai-tool/logo/InVideo-1723795882732'
    }
  ];
}
