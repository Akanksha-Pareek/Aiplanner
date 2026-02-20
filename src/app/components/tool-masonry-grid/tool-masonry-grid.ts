import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tool-masonry-grid',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="masonry-section">
      <div class="section-header">
        <h2 class="text-gradient">Trending AI Tools</h2>
        <p>Explore the most popular and trending AI tools of the week.</p>
      </div>
      <div class="masonry-grid">
        <div class="masonry-item" *ngFor="let tool of featuredTools">
          <div class="card-wrap">
            <div class="card-screenshot">
              <img [src]="tool.screenshot" [alt]="tool.name" />
            </div>
            <div class="card-footer">
              <div class="tool-icon">
                <img [src]="tool.logo" [alt]="tool.name" />
              </div>
              <div class="tool-meta">
                <p class="tool-name">{{ tool.name }} <i class="pi pi-verified" *ngIf="tool.verified"></i></p>
                <span class="tool-category">{{ tool.category }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: `
    .masonry-section {
      padding: 5rem 5%;
      background: #000;
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

    .masonry-grid {
      column-count: 4;
      column-gap: 24px;
      width: 100%;
    }

    .masonry-item {
      break-inside: avoid;
      margin-bottom: 24px;
    }

    .card-wrap {
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
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
      }
    }

    .card-screenshot {
      width: 100%;
      border-radius: 14px;
      overflow: hidden;
      margin-bottom: 12px;
      
      img {
        width: 100%;
        height: auto;
        display: block;
        transition: transform 0.5s;
        object-fit: cover;
      }
    }

    .card-footer {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 4px 8px 8px;
    }

    .tool-icon {
      width: 38px;
      height: 38px;
      border-radius: 50%;
      overflow: hidden;
      background: #000;
      flex-shrink: 0;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .tool-meta {
      .tool-name {
        font-size: 16px;
        font-weight: 800;
        color: #fff;
        margin: 0;
        display: flex;
        align-items: center;
        gap: 6px;

        .pi-verified {
          color: #625df5;
          font-size: 14px;
        }
      }

      .tool-category {
        font-size: 13px;
        font-weight: 600;
        color: rgba(255, 255, 255, 0.6);
      }
    }

    @media (max-width: 1200px) {
      .masonry-grid { column-count: 3; }
    }

    @media (max-width: 992px) {
      .masonry-grid { column-count: 2; }
    }

    @media (max-width: 600px) {
      .masonry-grid { column-count: 1; }
    }
  `,
})
export class ToolMasonryGridComponent {
  featuredTools = [
    {
      name: 'FineVoice',
      category: 'Text To Speech',
      screenshot: 'https://prod-findmyaitool.s3.amazonaws.com/images/thumbnail/1769589663587.webp',
      logo: 'https://prod-findmyaitool.s3.amazonaws.com/images/ai-tool/logo/webp-1769589662252',
      verified: true
    },
    {
      name: 'Dola AI',
      category: 'Productivity',
      screenshot: 'https://prod-findmyaitool.s3.us-east-1.amazonaws.com/images/ai-tool/web-thumbnail/Dola%20AI-1723798144203',
      logo: 'https://prod-findmyaitool.s3.us-east-1.amazonaws.com/images/ai-tool/logo/Dola%20AI-1723798144203'
    },
    {
      name: 'Charlie Lounge',
      category: 'Lifestyle',
      screenshot: 'https://prod-findmyaitool.s3.us-east-1.amazonaws.com/images/ai-tool/web-thumbnail/Charlie%20Lounge-1723798148590',
      logo: 'https://prod-findmyaitool.s3.us-east-1.amazonaws.com/images/ai-tool/logo/Charlie%20Lounge-1723798148590'
    },
    {
      name: 'Headpix AI',
      category: 'Image',
      screenshot: 'https://prod-findmyaitool.s3.us-east-1.amazonaws.com/images/ai-tool/web-thumbnail/Headpix%20AI-1723798153526',
      logo: 'https://prod-findmyaitool.s3.us-east-1.amazonaws.com/images/ai-tool/logo/Headpix%20AI-1723798153526'
    },
    {
      name: 'AI Girlfriend WTF',
      category: 'Fun',
      screenshot: 'https://prod-findmyaitool.s3.us-east-1.amazonaws.com/images/ai-tool/web-thumbnail/AI%20Girlfriend%20WTF-1723798157762',
      logo: 'https://prod-findmyaitool.s3.us-east-1.amazonaws.com/images/ai-tool/logo/AI%20Girlfriend%20WTF-1723798157762'
    },
    {
      name: 'AI Hentai Generator',
      category: 'Fun',
      screenshot: 'https://prod-findmyaitool.s3.us-east-1.amazonaws.com/images/ai-tool/web-thumbnail/AI%20Hentai%20Generator-1723798162127',
      logo: 'https://prod-findmyaitool.s3.us-east-1.amazonaws.com/images/ai-tool/logo/AI%20Hentai%20Generator-1723798162127'
    },
    {
      name: 'Erota',
      category: 'Lifestyle',
      screenshot: 'https://prod-findmyaitool.s3.us-east-1.amazonaws.com/images/ai-tool/web-thumbnail/Erota-1723798166828',
      logo: 'https://prod-findmyaitool.s3.us-east-1.amazonaws.com/images/ai-tool/logo/Erota-1723798166828'
    },
    {
      name: 'Loverr AI',
      category: 'Lifestyle',
      screenshot: 'https://prod-findmyaitool.s3.us-east-1.amazonaws.com/images/ai-tool/web-thumbnail/Loverr%20AI-1723798171743',
      logo: 'https://prod-findmyaitool.s3.us-east-1.amazonaws.com/images/ai-tool/logo/Loverr%20AI-1723798171743'
    }
  ];
}
