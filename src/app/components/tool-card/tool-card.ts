import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { BadgeModule } from 'primeng/badge';

export interface AITool {
  id: string;
  name: string;
  description: string;
  category: string;
  image: string;
  icon: string;
  rating: number;
  featured: boolean;
  verified?: boolean;
}

@Component({
  selector: 'app-tool-card',
  standalone: true,
  imports: [CommonModule, CardModule, BadgeModule],
  template: `
    <div class="tool-card" [class.featured]="tool.featured">
      <div class="card-image-wrapper">
        <div class="featured-badge" *ngIf="tool.featured">Featured</div>
        <img [src]="tool.image" [alt]="tool.name" class="tool-image" />
      </div>
      
      <div class="card-content">
        <div class="tool-header">
          <img [src]="tool.icon" [alt]="tool.name" class="tool-icon" />
          <div class="tool-info">
            <div class="tool-name-row">
              <h3 class="tool-name">{{ tool.name }}</h3>
              <i class="pi pi-verified verified-icon" *ngIf="tool.verified"></i>
            </div>
            <span class="tool-category">{{ tool.category }}</span>
          </div>
        </div>
        
        <p class="tool-description">{{ tool.description }}</p>
        
        <div class="tool-footer">
          <div class="rating">
            <i class="pi pi-star-fill"></i>
            <span>{{ tool.rating }}</span>
          </div>
          <button class="visit-btn">
            Visit Site <i class="pi pi-external-link"></i>
          </button>
        </div>
      </div>
    </div>
  `,
  styles: `
    .tool-card {
      background: hsla(0, 0%, 100%, 0.06);
      border: 1px solid hsla(0, 0%, 100%, 0.12);
      border-radius: 18px;
      padding: 10px;
      overflow: hidden;
      transition: all 0.3s ease-in-out;
      cursor: pointer;
      height: 100%;
      display: flex;
      flex-direction: column;

      &:hover {
        border-color: #625df5;
        transform: translateY(-5px);
        
        .visit-btn {
          background: #fff;
          color: #000;
        }
      }

      &.featured {
        // Optional: extra styling for featured cards
      }
    }

    .card-image-wrapper {
      position: relative;
      width: 100%;
      height: 144px;
      border-radius: 12px;
      overflow: hidden;
      margin-bottom: 14px;

      .tool-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.5s;
      }

      .featured-badge {
        position: absolute;
        top: 8px;
        left: 8px;
        z-index: 2;
        padding: 4px 10px;
        font-size: 12px;
        font-weight: 700;
        color: #fff;
        background: linear-gradient(90deg, #f65c54 0%, #ab57a5 51.14%, #5c52fb 100%);
        border-radius: 99px;
      }
    }

    .card-content {
      flex: 1;
      display: flex;
      flex-direction: column;
    }

    .tool-header {
      display: flex;
      gap: 10px;
      align-items: center;
      margin-bottom: 12px;

      .tool-icon {
        width: 37px;
        height: 37px;
        border-radius: 50%;
        background: #fff;
        object-fit: cover;
      }

      .tool-info {
        .tool-name-row {
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .tool-name {
          font-family: var(--font-main);
          font-weight: 800;
          font-size: 16px;
          color: #fff;
          margin: 0;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 180px;
        }

        .verified-icon {
          color: #625df5;
          font-size: 14px;
        }

        .tool-category {
          display: block;
          font-size: 12px;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.8);
          margin-top: 2px;
        }
      }
    }

    .tool-description {
      font-size: 13px;
      color: var(--text-muted);
      line-height: 1.5;
      margin-bottom: 15px;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      flex: 1;
    }

    .tool-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-top: 12px;
      border-top: 1px solid rgba(255, 255, 255, 0.08);

      .rating {
        display: flex;
        align-items: center;
        gap: 5px;
        color: #facc15;
        font-weight: 700;
        font-size: 14px;
        
        span {
          color: #fff;
        }
      }

      .visit-btn {
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.1);
        color: #fff;
        padding: 6px 14px;
        border-radius: 8px;
        font-size: 13px;
        font-weight: 700;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 6px;
        transition: all 0.3s;

        i {
          font-size: 12px;
        }
      }
    }
  `,
})
export class ToolCardComponent {
  @Input() tool!: AITool;
}
