import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { gsap } from 'gsap';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  template: `
    <section class="hero-section">
      <div class="background-grid"></div>
      <div class="radial-glow"></div>

      <!-- Floating Tool Icons -->
      <div class="floating-icons">
        <div class="float-icon pos-1">
          <div class="icon-wrap"><img src="https://findmyaitool.com/assets/icons/Callintel.webp" alt="Callintel" /></div>
          <span>Callintel</span>
        </div>
        <div class="float-icon pos-2">
          <div class="icon-wrap"><img src="https://findmyaitool.com/assets/icons/Dhanarthi.webp" alt="Dhanarthi" /></div>
          <span>Dhanarthi</span>
        </div>
        <div class="float-icon pos-3">
          <div class="icon-wrap"><img src="https://findmyaitool.com/assets/icons/FineVoice.png" alt="FineVoice" /></div>
          <span>FineVoice</span>
        </div>
        <div class="float-icon pos-4">
          <div class="icon-wrap"><img src="https://findmyaitool.com/assets/icons/BypassAI.webp" alt="BypassAI" /></div>
          <span>BypassAI</span>
        </div>
        <div class="float-icon pos-5">
          <div class="icon-wrap"><img src="https://findmyaitool.com/assets/icons/AI-Studio.webp" alt="AI Studio" /></div>
          <span>AI Studio</span>
        </div>
        <div class="float-icon pos-6">
          <div class="icon-wrap"><img src="https://findmyaitool.com/assets/icons/AssignmentGpt.webp" alt="Assignment AI" /></div>
          <span>Assignment AI</span>
        </div>
      </div>

      <div class="hero-container">
        <div class="hero-content">
          <h1 class="hero-title">
            Discover <span class="tools-gradient">AI Tools</span><br />
            for Your Business!
          </h1>
          
          <div class="hero-subtitle">
            <span>Streamline Your Workflow with Our List of AI Tools / AI Agents. Find Your Perfect Solution.</span>
          </div>

          <div class="search-wrapper">
            <div class="chat-searchbar">
              <div class="robot-icon">
                <img src="https://findmyaitool.com/assets/images/robot-image.png" alt="robot" />
              </div>
              <textarea placeholder="Type anything… we’ll match it with the right tool for you." #searchInput></textarea>
              <div class="right-button">
                <button>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M18.6357 15.6701L20.3521 10.5208C21.8516 6.02242 22.6013 3.77322 21.414 2.58595C20.2268 1.39869 17.9776 2.14842 13.4792 3.64788L8.32987 5.36432C4.69923 6.57453 2.88392 7.17964 2.36806 8.06698C1.87731 8.91112 1.87731 9.95369 2.36806 10.7978C2.88392 11.6852 4.69923 12.2903 8.32987 13.5005C8.91282 13.6948 9.2043 13.792 9.44793 13.9551C9.68404 14.1131 9.88687 14.316 10.0449 14.5521C10.208 14.7957 10.3052 15.0872 10.4995 15.6701C11.7097 19.3008 12.3148 21.1161 13.2022 21.6319C14.0463 22.1227 15.0889 22.1227 15.933 21.6319C16.8204 21.1161 17.4255 19.3008 18.6357 15.6701Z" stroke="white" stroke-width="1.5"></path>
                    <path d="M16.2116 8.84853C16.5061 8.55727 16.5087 8.0824 16.2174 7.78789C15.9262 7.49338 15.4513 7.49075 15.1568 7.78201L15.6842 8.31527L16.2116 8.84853L15.6842 8.31527L15.1568 7.78201L9.60787 13.2698L10.1353 13.803Z" fill="white"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div class="cta-group">
            <div class="two-button-alignment">
              <button class="btn-primary">Explore AI Agents <img src="https://findmyaitool.com/assets/icons/next-arrow.webp" width="11" height="11" alt="Arrow"></button>
              <button class="btn-secondary">Explore AI Tools <img src="https://findmyaitool.com/assets/icons/next-arrow.webp" width="11" height="11" alt="Arrow"></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: `
    .hero-section {
      position: relative;
      min-height: 540px;
      padding: 120px 0 80px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: #000;
      overflow: hidden;
    }

    @media (max-width: 650px) {
      .hero-section {
        padding: 80px 0 40px;
        min-height: auto;
      }
    }

    .background-grid {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: url('https://findmyaitool.com/assets/images/desktop-layer.webp');
      background-size: cover;
      background-position: center;
      opacity: 0.35;
      pointer-events: none;
    }

    .radial-glow {
      position: absolute;
      width: 1000px;
      height: 1000px;
      background: radial-gradient(circle, rgba(98, 93, 245, 0.12) 0%, rgba(0, 0, 0, 0) 70%);
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      pointer-events: none;
      z-index: 1;
    }

    .hero-container {
      max-width: 1300px;
      padding: 0 20px;
      margin: 0 auto;
      width: 100%;
      position: relative;
      z-index: 3;
    }

    .floating-icons {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 2;
    }

    @media (max-width: 1024px) {
      .floating-icons {
        display: none;
      }
    }

    .float-icon {
      position: absolute;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 12px;
      width: 100px; /* Give it a boundary */
    }

    .icon-wrap {
      width: 76px;
      height: 76px;
      border-radius: 50%;
      padding: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(255, 255, 255, 0.05);
      backdrop-filter: blur(8px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      transition: transform 0.3s;
    }

    .float-icon img {
      width: 50px;
      height: 50px;
      object-fit: contain;
      border-radius: 50%;
    }

    .float-icon span {
      color: rgba(255, 255, 255, 0.6);
      font-size: 14px;
      font-weight: 700;
      font-family: var(--font-main);
      text-align: center;
      white-space: nowrap;
    }

    .float-icon.pos-1 { top: 10%; left: 15%; }
    .float-icon.pos-1 .icon-wrap { border-color: #f37021; }
    
    .float-icon.pos-2 { top: 10%; right: 15%; }
    .float-icon.pos-2 .icon-wrap { border-color: #0076bf; }
    
    .float-icon.pos-3 { bottom: 45%; left: 8%; }
    .float-icon.pos-3 .icon-wrap { border-color: #00a499; }
    
    .float-icon.pos-4 { bottom: 45%; right: 8%; }
    .float-icon.pos-4 .icon-wrap { border-color: #7b1fa2; }
    
    .float-icon.pos-5 { bottom: 10%; left: 15%; }
    .float-icon.pos-5 .icon-wrap { border-color: #f7b500; }
    
    .float-icon.pos-6 { bottom: 10%; right: 15%; }
    .float-icon.pos-6 .icon-wrap { border-color: #625df5; }

    .hero-content {
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .hero-title {
      font-family: var(--font-heading);
      font-size: 58px;
      line-height: 72px;
      color: #fff;
      margin: 0 auto 10px;
      max-width: 721px;
    }

    @media (max-width: 1200px) {
      .hero-title {
        font-size: 50px;
        max-width: 519px;
      }
    }

    @media (max-width: 576px) {
      .hero-title {
        font-size: 32px !important;
        line-height: 44px;
        text-align: center;
      }
    }

    .tools-gradient {
      background: var(--tools-gradient);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .hero-subtitle {
      margin: 10px auto 20px;
      max-width: 553px;
    }
    
    .hero-subtitle span {
      font-size: 18px;
      line-height: 26px;
      color: rgba(255, 255, 255, 0.7);
    }

    @media (max-width: 1200px) {
      .hero-subtitle {
        max-width: 453px;
      }
      .hero-subtitle span { font-size: 16px; }
    }

    .search-wrapper {
      width: 100%;
      max-width: 540px;
      margin: 0 auto;
    }

    @media (max-width: 650px) {
      .search-wrapper { width: 300px; }
    }

    .chat-searchbar {
      position: relative;
      border-radius: 18px;
      border: 1px solid rgba(255, 255, 255, 0.12);
      background: rgba(255, 255, 255, 0.06);
      padding: 10px;
      width: 100%;
      display: flex;
      flex-direction: column;
    }

    .chat-searchbar .robot-icon {
      position: absolute;
      left: -95px;
      top: -27px;
      z-index: -1;
    }

    .chat-searchbar .robot-icon img {
      width: 172px;
      height: 170px;
      object-fit: contain;
    }

    @media (max-width: 750px) {
      .chat-searchbar .robot-icon { display: none; }
    }

    .chat-searchbar textarea {
      width: 100%;
      background: transparent;
      font-size: 16px;
      font-family: var(--font-main);
      font-weight: 700;
      color: #fff;
      border: none;
      height: 70px;
      resize: none;
      outline: none;
      padding-top: 5px;
    }

    .chat-searchbar textarea::placeholder {
      color: rgba(255, 255, 255, 0.4);
    }

    .chat-searchbar .right-button {
      display: flex;
      justify-content: flex-end;
    }

    .chat-searchbar .right-button button {
      width: 35px;
      height: 35px;
      background: #625df5;
      color: #fff;
      border: none;
      border-radius: 50%;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transform: rotate(45deg);
      transition: 0.3s ease-in-out;
    }

    .chat-searchbar .right-button button:hover {
      transform: rotate(45deg) scale(1.1);
    }

    .chat-searchbar .right-button button svg {
      width: 18px;
      height: 18px;
    }

    .cta-group {
      max-width: 480px;
      margin: 23px auto 0;
    }

    .two-button-alignment {
      display: flex;
      gap: 20px;
      justify-content: center;
    }

    .two-button-alignment button {
      cursor: pointer;
      padding: 10px 20px;
      border: none;
      border-radius: 30px;
      font-weight: 700;
      font-size: 16px;
      display: flex;
      align-items: center;
      gap: 10px;
      color: #fff;
      transition: 0.3s;
    }

    .two-button-alignment button.btn-primary {
      background: #625df5;
    }

    .two-button-alignment button.btn-primary:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 20px rgba(98, 93, 245, 0.3);
    }

    .two-button-alignment button.btn-secondary {
      background: transparent;
      border: 1px solid rgba(255, 255, 255, 0.15);
    }

    .two-button-alignment button.btn-secondary:hover {
      border-color: #fff;
    }

    @media (max-width: 650px) {
      .two-button-alignment button {
        font-size: 12px;
        padding: 8px 15px;
      }
    }
      

  `,
})
export class HeroComponent implements AfterViewInit {
  @ViewChild('searchInput') searchInput!: ElementRef;

  ngAfterViewInit() {
    // Basic entry animations
    gsap.from('.hero-title', {
      y: 50,
      opacity: 0,
      duration: 1.2,
      ease: 'power3.out'
    });

    gsap.from('.hero-subtitle', {
      y: 30,
      opacity: 0,
      duration: 1,
      delay: 0.3,
      ease: 'power3.out'
    });

    gsap.from('.chat-searchbar', {
      scale: 0.9,
      opacity: 0,
      duration: 0.8,
      delay: 0.5,
      ease: 'back.out(1.7)'
    });

    // Floating icons entry and constant movement
    gsap.from('.float-icon', {
      scale: 0,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      delay: 1,
      ease: 'back.out(1.7)'
    });

    const icons = document.querySelectorAll('.float-icon');
    icons.forEach((icon, index) => {
      gsap.to(icon, {
        y: 'random(-15, 15)',
        x: 'random(-10, 10)',
        duration: 'random(2, 4)',
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: index * 0.2
      });
    });
  }
}
