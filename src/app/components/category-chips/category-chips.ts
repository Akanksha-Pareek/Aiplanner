import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-chips',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="category-section">
      <div class="chips-container">
        <div 
          *ngFor="let cat of categories" 
          class="chip" 
          [class.active]="selectedCategory === cat"
          (click)="selectCategory(cat)"
        >
          {{ cat }}
        </div>
      </div>
    </div>
  `,
  styles: `
    .category-section {
      padding: 2rem 5%;
      overflow: hidden;
    }

    .chips-container {
      display: flex;
      gap: 1rem;
      overflow-x: auto;
      padding-bottom: 1rem;
      scrollbar-width: none; /* Firefox */
      
      &::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera */
      }
    }

    .chip {
      padding: 0.8rem 1.5rem;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 30px;
      white-space: nowrap;
      cursor: pointer;
      color: var(--text-muted);
      font-weight: 600;
      transition: all 0.3s;

      &:hover {
        background: rgba(255, 255, 255, 0.08);
        border-color: rgba(255, 255, 255, 0.2);
        color: #fff;
      }

      &.active {
        background: var(--primary-gradient);
        color: #fff;
        border-color: transparent;
      }
    }
  `,
})
export class CategoryChipsComponent {
  categories = [
    'All', 'AI Agents', 'Text', 'Video', 'Audio', 'Image', 'Coding', 'Marketing',
    'Business', 'Education', 'Productivity', 'Design', 'Data Analysis'
  ];

  selectedCategory = 'All';

  selectCategory(cat: string) {
    this.selectedCategory = cat;
  }
}
