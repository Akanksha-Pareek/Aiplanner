import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolCardComponent, AITool } from '../tool-card/tool-card';
import { gsap } from 'gsap';

@Component({
  selector: 'app-tool-grid',
  standalone: true,
  imports: [CommonModule, ToolCardComponent],
  template: `
    <div class="grid-section">
      <div class="section-header">
        <h2 class="text-gradient">Featured AI Tools</h2>
        <p>Expertly curated collection of the most powerful AI technologies.</p>
      </div>
      
      <div class="tool-grid">
        <div class="grid-item" *ngFor="let tool of tools">
          <app-tool-card [tool]="tool"></app-tool-card>
        </div>
      </div>
      
      <div class="load-more">
        <button class="more-btn">Explore All Tools <i class="pi pi-arrow-right"></i></button>
      </div>
    </div>
  `,
  styles: `
    .grid-section {
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

    .tool-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 2rem;
    }

    .load-more {
      display: flex;
      justify-content: center;
      margin-top: 4rem;
    }

    .more-btn {
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.1);
      color: #fff;
      padding: 1rem 2.5rem;
      border-radius: 30px;
      font-weight: 600;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 12px;
      transition: all 0.3s;

      &:hover {
        background: rgba(255, 255, 255, 0.08);
        border-color: var(--primary-color);
        transform: translateY(-2px);
      }
    }

    @media (max-width: 1200px) {
      .tool-grid {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    @media (max-width: 768px) {
      .tool-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 480px) {
      .tool-grid {
        grid-template-columns: 1fr;
      }
    }
  `,
})
export class ToolGridComponent implements AfterViewInit {
  tools: AITool[] = [
    {
      id: 'callintel',
      name: 'Callintel',
      description: 'Advanced AI-powered call analysis and intelligence for sales teams.',
      category: 'Sales',
      image: 'https://findmyaitool.com/assets/images/tools/callintel.png',
      icon: 'https://findmyaitool.com/assets/images/tools/callintel-fav.png',
      rating: 4.8,
      featured: true,
      verified: true
    },
    {
      id: 'finevoice',
      name: 'FineVoice',
      description: 'The all-in-one AI voice toolkit to empower your voice.',
      category: 'Voice',
      image: 'https://findmyaitool.com/assets/images/tools/finevoice.png',
      icon: 'https://findmyaitool.com/assets/images/tools/finevoice-fav.png',
      rating: 4.7,
      featured: false,
      verified: true
    },
    {
      id: 'vocal-remover',
      name: 'Vocal Remover',
      description: 'Separate voice from music with AI-powered accurately.',
      category: 'Audio',
      image: 'https://findmyaitool.com/assets/images/tools/vocalremover.png',
      icon: 'https://findmyaitool.com/assets/images/tools/vocalremover-fav.png',
      rating: 4.9,
      featured: false
    },
    {
      id: 'notta',
      name: 'Notta',
      description: 'AI-powered meeting notes and transcription for teams.',
      category: 'Productivity',
      image: 'https://findmyaitool.com/assets/images/tools/notta.png',
      icon: 'https://findmyaitool.com/assets/images/tools/notta-fav.png',
      rating: 4.7,
      featured: true,
      verified: true
    },
    {
      id: 'midjourney',
      name: 'Midjourney',
      description: 'Top-tier AI image generation from text prompts.',
      category: 'Art',
      image: 'https://findmyaitool.com/assets/images/tools/midjourney.png',
      icon: 'https://findmyaitool.com/assets/images/tools/midjourney-fav.png',
      rating: 4.9,
      featured: false,
      verified: true
    },
    {
      id: 'jasper-ai',
      name: 'Jasper AI',
      description: 'AI content platform that helps teams create content everywhere.',
      category: 'Writing',
      image: 'https://findmyaitool.com/assets/images/tools/jasper.png',
      icon: 'https://findmyaitool.com/assets/images/tools/jasper-fav.png',
      rating: 4.6,
      featured: false
    },
    {
      id: 'openai',
      name: 'OpenAI',
      description: 'The world\'s leading AI research and deployment company.',
      category: 'Research',
      image: 'https://findmyaitool.com/assets/images/tools/openai.png',
      icon: 'https://findmyaitool.com/assets/images/tools/openai-fav.png',
      rating: 5.0,
      featured: true,
      verified: true
    },
    {
      id: 'canva-ai',
      name: 'Canva AI',
      description: 'Design anything with powerful AI-assisted tools.',
      category: 'Design',
      image: 'https://findmyaitool.com/assets/images/tools/canva.png',
      icon: 'https://findmyaitool.com/assets/images/tools/canva-fav.png',
      rating: 4.8,
      featured: false
    }
  ];

  ngAfterViewInit() {
    gsap.from('.grid-item', {
      duration: 0.8,
      opacity: 0,
      y: 20,
      stagger: 0.1,
      ease: 'power2.out'
    });
  }
}
