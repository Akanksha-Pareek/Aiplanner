import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-agent-categories',
    standalone: true,
    imports: [CommonModule],
    template: `
    <section class="categories-section">
      <div class="section-header">
        <h2 class="text-gradient">Explore AI Agent Categories</h2>
        <p>Browse through our specialized AI agent niches.</p>
      </div>

      <div class="categories-grid">
        <div class="category-card" *ngFor="let cat of categories">
          <div class="card-inner">
            <i [class]="cat.icon" class="cat-icon"></i>
            <h3>{{ cat.name }}</h3>
          </div>
          <div class="bg-icon">
            <i [class]="cat.icon"></i>
          </div>
        </div>
      </div>
    </section>
  `,
    styles: `
    .categories-section {
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

    .categories-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 20px;
    }

    .category-card {
      position: relative;
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 16px;
      padding: 30px 20px;
      overflow: hidden;
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        background: rgba(98, 93, 245, 0.05);
        border-color: rgba(98, 93, 245, 0.3);
        transform: scale(1.02);

        .cat-icon {
          color: #625df5;
          transform: scale(1.1);
        }
        .bg-icon {
          opacity: 0.15;
          transform: rotate(-15deg) scale(1.2);
        }
      }
    }

    .card-inner {
      position: relative;
      z-index: 2;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 15px;

      .cat-icon {
        font-size: 32px;
        color: #fff;
        transition: all 0.3s;
      }

      h3 {
        font-size: 18px;
        font-weight: 700;
        color: #fff;
        text-align: center;
      }
    }

    .bg-icon {
      position: absolute;
      top: -10px;
      right: -10px;
      font-size: 100px;
      color: #fff;
      opacity: 0.03;
      transition: all 0.5s;
      pointer-events: none;
    }

    @media (max-width: 1024px) {
      .categories-grid { grid-template-columns: repeat(3, 1fr); }
    }
    @media (max-width: 768px) {
      .categories-grid { grid-template-columns: repeat(2, 1fr); }
    }
    @media (max-width: 480px) {
      .categories-grid { grid-template-columns: 1fr; }
    }
  `,
})
export class AgentCategoriesComponent {
    categories = [
        { name: 'Productivity', icon: 'pi pi-bolt' },
        { name: 'Customer Services', icon: 'pi pi-users' },
        { name: 'Personal Assistant', icon: 'pi pi-user' },
        { name: 'Data Analysis', icon: 'pi pi-chart-bar' },
        { name: 'Content Creation', icon: 'pi pi-pencil' },
        { name: 'Lead Generation', icon: 'pi pi-envelope' },
        { name: 'Education', icon: 'pi pi-book' },
        { name: 'Security', icon: 'pi pi-shield' }
    ];
}
