import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-newsletter-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="newsletter-section">
      <div class="newsletter-card">
        <div class="newsletter-left">
           <div class="illustration-box">
             <i class="pi pi-send floating-icon"></i>
             <div class="glow-sphere"></div>
           </div>
        </div>
        <div class="newsletter-right">
          <h2 class="section-title">Stay tuned!</h2>
          <p class="section-desc">Subscribe to our newsletter and stay updated with the latest AI trends.</p>
          <div class="newsletter-form">
            <div class="input-group">
              <input type="email" placeholder="Enter your email" />
              <button class="btn-subscribe">Subscribe Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: `
    .newsletter-section {
      padding: 0 5% 5rem;
      background: #000;
    }

    .newsletter-card {
      background: #625df5;
      border-radius: 24px;
      padding: 60px;
      display: flex;
      align-items: center;
      gap: 60px;
      position: relative;
      overflow: hidden;

      &::before {
        content: '';
        position: absolute;
        top: -50%;
        left: -20%;
        width: 600px;
        height: 600px;
        background: radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, transparent 70%);
        pointer-events: none;
      }
    }

    .newsletter-left {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;

      @media (max-width: 992px) {
        display: none;
      }
    }

    .illustration-box {
      position: relative;
      width: 200px;
      height: 200px;
      display: flex;
      align-items: center;
      justify-content: center;

      .floating-icon {
        font-size: 80px;
        color: #fff;
        z-index: 2;
        animation: float 3s ease-in-out infinite;
      }

      .glow-sphere {
        position: absolute;
        width: 150px;
        height: 150px;
        background: rgba(255, 255, 255, 0.2);
        filter: blur(40px);
        border-radius: 50%;
      }
    }

    @keyframes float {
      0%, 100% { transform: translateY(0) rotate(0); }
      50% { transform: translateY(-20px) rotate(10deg); }
    }

    .newsletter-right {
      flex: 1.5;
    }

    .section-title {
      font-size: 3.5rem !important;
      font-weight: 800;
      color: #fff;
      margin-bottom: 12px;
    }

    .section-desc {
      color: rgba(255, 255, 255, 0.8);
      font-size: 1.2rem;
      margin-bottom: 35px;
      max-width: 500px;
    }

    .newsletter-form {
      max-width: 550px;
    }

    .input-group {
      display: flex;
      background: rgba(255, 255, 255, 0.15);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 50px;
      padding: 8px;
      transition: all 0.3s;

      &:focus-within {
        background: rgba(255, 255, 255, 0.25);
        border-color: #fff;
      }

      input {
        background: transparent;
        border: none;
        color: #fff;
        padding: 0 30px;
        flex: 1;
        font-size: 1.1rem;
        outline: none;
        font-weight: 600;

        &::placeholder {
          color: rgba(255, 255, 255, 0.6);
        }
      }

      .btn-subscribe {
        background: #000;
        color: #fff;
        border: none;
        padding: 16px 40px;
        border-radius: 40px;
        font-weight: 800;
        font-size: 1rem;
        cursor: pointer;
        transition: all 0.3s;

        &:hover {
          transform: scale(1.05);
          background: #111;
        }
      }
    }

    @media (max-width: 992px) {
      .newsletter-card {
        padding: 50px 30px;
        text-align: center;
      }
      .newsletter-right { flex: 1; }
      .section-title { font-size: 2.5rem !important; }
      .newsletter-form { margin: 0 auto; }
      .input-group { 
        flex-direction: column;
        border-radius: 20px;
        gap: 15px;
        input { padding: 15px; text-align: center; }
      }
    }
  `
})
export class NewsletterSectionComponent { }
