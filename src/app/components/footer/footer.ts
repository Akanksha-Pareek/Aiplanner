import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="footer">
      <div class="footer-grid">
        <div class="footer-info">
          <div class="logo-container">
            <img src="https://findmyaitool.com/assets/images/logo.png" alt="Logo" class="logo" />
            <span class="brand-name">ai<span class="text-gradient">planner</span></span>
          </div>
          <p class="description">
            aiplanner is its website dedicated to providing a comprehensive list of AI tools to assist individuals and businesses in finding the most suitable AI tool for their specific requirements.
          </p>
          <div class="contact-info">
            <a href="mailto:info@findmytool.com"><i class="pi pi-envelope"></i> info@findmytool.com</a>
          </div>
          <div class="social-links">
            <a href="#"><i class="pi pi-instagram"></i></a>
            <a href="#"><i class="pi pi-facebook"></i></a>
            <a href="#"><i class="pi pi-twitter"></i></a>
            <a href="#"><i class="pi pi-linkedin"></i></a>
            <a href="#"><i class="pi pi-prime"></i></a>
            <a href="#"><i class="pi pi-discord"></i></a>
          </div>
        </div>

        <div class="footer-links">
          <h3>Useful Links</h3>
          <ul>
            <li><a href="#">AI Tools Category</a></li>
            <li><a href="#">AI Agents</a></li>
            <li><a href="#">GPT Store</a></li>
            <li><a href="#">AI Shorts</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Submit AI Tool</a></li>
            <li><a href="#">Write For Us</a></li>
          </ul>
        </div>

        <div class="footer-links">
          <h3>Company</h3>
          <ul>
            <li><a href="#">Sitemap</a></li>
            <li><a href="#">AI Agents Sitemap</a></li>
            <li><a href="#">Blog Sitemap</a></li>
            <li><a href="#">Tool Sitemap</a></li>
            <li><a href="#">GPT Sitemap</a></li>
            <li><a href="#">Search Keyword Sitemap</a></li>
          </ul>
        </div>

        <div class="footer-links">
          <h3>Contact Us</h3>
          <ul>
            <li><a href="#">Marketing</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Hire Us</a></li>
            <li><a href="#">Book Meeting</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="bottom-left">
          <a href="#">Terms & Condition</a>
          <a href="#">Privacy Policy</a>
        </div>
        <p>Copyright aiplanner © 2025 All Rights Reserved by <span class="text-gradient">aiplanner</span> Team.</p>
      </div>
    </footer>
  `,
  styles: `
    .footer {
      padding: 5rem 5% 2rem;
      background: #050505;
      border-top: 1px solid rgba(255, 255, 255, 0.05);
    }

    .footer-grid {
      display: grid;
      grid-template-columns: 1.5fr 1fr 1fr 0.8fr;
      gap: 3rem;
      margin-bottom: 4rem;
    }

    .logo-container {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 1.5rem;

      .logo {
        height: 32px;
        width: auto;
      }
    }

    .brand-name {
      font-weight: 800;
      font-size: 1.4rem;
      display: inline-block;
      text-transform: lowercase;
    }

    .description {
      color: rgba(255, 255, 255, 0.6);
      margin-bottom: 1.5rem;
      font-size: 0.9rem;
      line-height: 1.6;
    }

    .contact-info {
       margin-bottom: 1.5rem;
       a {
         color: #fff;
         font-size: 0.9rem;
         font-weight: 600;
         display: flex;
         align-items: center;
         gap: 10px;
         text-decoration: none;
         
         i { color: #625df5; }
       }
    }

    .social-links {
      display: flex;
      gap: 1rem;
      a {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.05);
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        font-size: 1rem;
        transition: all 0.3s;
        border: 1px solid rgba(255, 255, 255, 0.1);
        
        &:hover {
          background: #625df5;
          transform: translateY(-3px);
          border-color: #625df5;
        }
      }
    }

    .footer-links {
      h3 {
        font-size: 1.1rem;
        font-weight: 800;
        margin-bottom: 1.5rem;
      }
      ul li {
        margin-bottom: 0.8rem;
        a {
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.9rem;
          font-weight: 600;
          transition: color 0.3s;
          &:hover {
            color: #fff;
          }
        }
      }
    }

    .footer-bottom {
      border-top: 1px solid rgba(255, 255, 255, 0.08);
      padding-top: 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: rgba(255, 255, 255, 0.4);
      font-size: 0.85rem;

      .bottom-left {
        display: flex;
        gap: 2rem;
        a {
          color: rgba(255, 255, 255, 0.6);
          font-weight: 600;
          &:hover { color: #fff; }
        }
      }

      p {
        font-weight: 600;
        .text-gradient { font-weight: 800; }
      }
    }

    @media (max-width: 992px) {
      .footer-grid {
        grid-template-columns: 1fr 1fr;
        gap: 2.5rem;
      }
    }

    @media (max-width: 576px) {
      .footer-grid {
        grid-template-columns: 1fr;
      }
      .footer-bottom {
        flex-direction: column;
        gap: 1.5rem;
        text-align: center;
      }
      .bottom-left {
        justify-content: center;
      }
    }
  `,
})
export class FooterComponent {
}
