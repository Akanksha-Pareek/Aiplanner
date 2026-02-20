import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="blogs-section">
      <div class="section-header">
        <h2 class="text-gradient">Blogs</h2>
        <p>Explore AI's wonders, learn, and stay updated with the latest AI trends.</p>
      </div>

      <div class="blogs-grid">
        <div class="blog-card" *ngFor="let blog of blogs">
          <div class="blog-image">
            <img [src]="blog.image" [alt]="blog.title" />
            <div class="blog-date">{{ blog.date }}</div>
          </div>
          <div class="blog-content">
            <span class="blog-cat">{{ blog.category }}</span>
            <h3 class="blog-title">{{ blog.title }}</h3>
            <div class="blog-footer">
              <div class="author">
                <img [src]="blog.authorAvatar" [alt]="blog.author" />
                <span>{{ blog.author }}</span>
              </div>
              <a href="#" class="read-more">Read More <i class="pi pi-arrow-right"></i></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: `
    .blogs-section {
      padding: 5rem 5% 8rem;
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

    .blogs-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 30px;
    }

    .blog-card {
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 24px;
      overflow: hidden;
      transition: all 0.3s ease;
      cursor: pointer;

      &:hover {
        transform: translateY(-10px);
        border-color: rgba(98, 93, 245, 0.3);
        background: rgba(255, 255, 255, 0.05);

        .blog-image img {
          transform: scale(1.08);
        }
      }
    }

    .blog-image {
      position: relative;
      width: 100%;
      aspect-ratio: 16/9;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.6s;
      }

      .blog-date {
        position: absolute;
        bottom: 15px;
        right: 15px;
        background: rgba(0, 0, 0, 0.6);
        backdrop-filter: blur(5px);
        color: #fff;
        padding: 5px 12px;
        border-radius: 10px;
        font-size: 12px;
        font-weight: 600;
      }
    }

    .blog-content {
      padding: 25px;

      .blog-cat {
        font-size: 12px;
        color: #625df5;
        font-weight: 800;
        text-transform: uppercase;
        letter-spacing: 1px;
        display: block;
        margin-bottom: 10px;
      }

      .blog-title {
        font-size: 20px;
        font-weight: 800;
        color: #fff;
        line-height: 1.4;
        margin-bottom: 25px;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }

      .blog-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 20px;
        border-top: 1px solid rgba(255, 255, 255, 0.06);

        .author {
          display: flex;
          align-items: center;
          gap: 10px;

          img {
            width: 32px;
            height: 32px;
            border-radius: 50%;
          }

          span {
            font-size: 13px;
            color: rgba(255, 255, 255, 0.7);
            font-weight: 600;
          }
        }

        .read-more {
          color: #fff;
          text-decoration: none;
          font-size: 13px;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 6px;
          opacity: 0.8;
          transition: all 0.3s;

          &:hover {
            opacity: 1;
            gap: 10px;
          }
        }
      }
    }

    @media (max-width: 1024px) {
      .blogs-grid { grid-template-columns: repeat(2, 1fr); }
    }
    @media (max-width: 600px) {
      .blogs-grid { grid-template-columns: 1fr; }
    }
  `,
})
export class BlogsComponent {
  blogs = [
    {
      title: 'What Are the Best AI Search Monitoring Tools in 2026?',
      category: 'Guides',
      date: 'Feb 12, 2026',
      image: 'https://prod-findmyaitool.s3.us-east-1.amazonaws.com/blog/images/What_Are_the_Best_AI_Search_Monitoring_Tools_in_2026_fb36c41431.webp',
      author: 'Admin',
      authorAvatar: 'https://findmyaitool.com/assets/images/user-placeholder.png'
    },
    {
      title: 'Top 10 AI Tools Every Designer Should Know in 2026',
      category: 'Reviews',
      date: 'Feb 08, 2026',
      image: 'https://prod-findmyaitool.s3.us-east-1.amazonaws.com/blog/images/Top_10_AI_Tools_Every_Designer_Should_Know_in_2026_50812275be.webp',
      author: 'Sarah J.',
      authorAvatar: 'https://findmyaitool.com/assets/images/user-placeholder.png'
    },
    {
      title: 'FineVoice AI Review: Features, Pricing, Pros & Cons Explained',
      category: 'Case Study',
      date: 'Jan 28, 2026',
      image: 'https://prod-findmyaitool.s3.us-east-1.amazonaws.com/blog/images/Fine_Voice_AI_Review_Features_Pricing_Pros_and_Cons_Explained_999b19703b.webp',
      author: 'Mike D.',
      authorAvatar: 'https://findmyaitool.com/assets/images/user-placeholder.png'
    }
  ];
}
