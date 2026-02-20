import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-tool-categories',
    standalone: true,
    imports: [CommonModule],
    template: `
    <section class="tool-cats-section">
      <div class="section-header">
        <h2 class="text-gradient">AI Tool Categories</h2>
        <p>Unlock innovation with our diverse range of AI tool categories.</p>
      </div>

      <div class="tool-cats-grid">
        <div class="tool-cat-card" *ngFor="let cat of categories">
          <i [class]="cat.icon"></i>
          <span>{{ cat.name }}</span>
        </div>
      </div>
    </section>
  `,
    styles: `
    .tool-cats-section {
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

    .tool-cats-grid {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      gap: 15px;
    }

    .tool-cat-card {
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 12px;
      padding: 20px 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      cursor: pointer;
      transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);

      i {
        font-size: 24px;
        color: #fff;
        opacity: 0.8;
      }

      span {
        font-size: 14px;
        font-weight: 700;
        color: #fff;
        text-align: center;
      }

      &:hover {
        background: #fff;
        border-color: #fff;
        transform: scale(1.05);

        i, span {
          color: #000;
          opacity: 1;
        }
      }
    }

    @media (max-width: 1024px) {
      .tool-cats-grid { grid-template-columns: repeat(4, 1fr); }
    }
    @media (max-width: 768px) {
      .tool-cats-grid { grid-template-columns: repeat(3, 1fr); }
    }
    @media (max-width: 480px) {
      .tool-cats-grid { grid-template-columns: repeat(2, 1fr); }
    }
  `,
})
export class ToolCategoriesComponent {
    categories = [
        { name: 'Video', icon: 'pi pi-video' },
        { name: '3D', icon: 'pi pi-box' },
        { name: 'Business', icon: 'pi pi-briefcase' },
        { name: 'Audio', icon: 'pi pi-volume-up' },
        { name: 'Image', icon: 'pi pi-image' },
        { name: 'Writing', icon: 'pi pi-pencil' },
        { name: 'Gaming', icon: 'pi pi-discord' },
        { name: 'Marketing', icon: 'pi pi-megaphone' },
        { name: 'Design', icon: 'pi pi-palette' },
        { name: 'Developer', icon: 'pi pi-code' },
        { name: 'E-commerce', icon: 'pi pi-shopping-bag' },
        { name: 'Education', icon: 'pi pi-book' }
    ];
}
