import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ai-shorts',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="shorts-section">
      <div class="section-header">
        <h2 class="text-gradient">AI Shorts</h2>
        <a href="#" class="view-all">View All <i class="pi pi-arrow-right"></i></a>
      </div>
      
      <div class="shorts-grid">
        <div class="short-card" *ngFor="let short of shorts">
          <div class="thumbnail">
            <img [src]="short.thumbnail" [alt]="short.title" />
            <div class="play-overlay">
              <i class="pi pi-play-fill"></i>
            </div>
            <div class="brand-tag">aiplanner</div>
          </div>
          <div class="short-info">
            <h3 class="short-title">{{ short.title }}</h3>
            <span class="short-date">{{ short.date }}</span>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: `
    .shorts-section {
      padding: 5rem 5%;
    }

    .section-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 3rem;

      h2 {
        font-size: 2.5rem;
        font-weight: 800;
      }

      .view-all {
        color: #fff;
        text-decoration: none;
        font-weight: 600;
        display: flex;
        align-items: center;
        gap: 8px;
        opacity: 0.8;
        transition: opacity 0.3s;

        &:hover {
          opacity: 1;
        }
      }
    }

    .shorts-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 24px;
    }

    .short-card {
      cursor: pointer;
      
      &:hover {
        .thumbnail img {
          transform: scale(1.05);
        }
        .play-overlay {
          opacity: 1;
          transform: translate(-50%, -50%) scale(1.1);
        }
      }
    }

    .thumbnail {
      position: relative;
      aspect-ratio: 9/16;
      border-radius: 16px;
      overflow: hidden;
      background: #111;
      margin-bottom: 15px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.5s;
      }

      .play-overlay {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 60px;
        height: 60px;
        background: rgba(255, 255, 255, 0.2);
        backdrop-filter: blur(10px);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: all 0.3s;

        i {
          color: #fff;
          font-size: 20px;
        }
      }

      .brand-tag {
        position: absolute;
        top: 15px;
        left: 15px;
        background: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(5px);
        padding: 4px 12px;
        border-radius: 20px;
        font-size: 11px;
        font-weight: 700;
        color: #fff;
      }
    }

    .short-info {
      .short-title {
        font-size: 16px;
        font-weight: 700;
        color: #fff;
        margin-bottom: 5px;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }

      .short-date {
        font-size: 13px;
        color: var(--text-muted);
      }
    }

    @media (max-width: 1024px) {
      .shorts-grid { grid-template-columns: repeat(3, 1fr); }
    }
    @media (max-width: 768px) {
      .shorts-grid { grid-template-columns: repeat(2, 1fr); }
    }
    @media (max-width: 480px) {
      .shorts-grid { grid-template-columns: 1fr; }
    }
  `,
})
export class AiShortsComponent {
  shorts = [
    {
      title: "Google’s Secret Website Stitch",
      thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
      date: "Oct 24, 2024"
    },
    {
      title: "5 AI Image Hacks You Didn't Know",
      thumbnail: "https://images.unsplash.com/photo-1620712943543-bcc4638d73b9?auto=format&fit=crop&q=80&w=800",
      date: "Oct 20, 2024"
    },
    {
      title: "Future of AI – Google's A2A Protocol",
      thumbnail: "https://images.unsplash.com/photo-1614741480652-75ca336423ca?auto=format&fit=crop&q=80&w=800",
      date: "Oct 15, 2024"
    },
    {
      title: "How to Build an AI Agent in 5 Mins",
      thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
      date: "Oct 10, 2024"
    }
  ];
}
