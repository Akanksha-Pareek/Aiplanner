import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, MenubarModule, ButtonModule, InputTextModule],
  template: `
    <nav class="navbar">
       
      <!-- LOGO -->
      <div class="logo-container">
      <div class="hamburger" (click)="toggleMenu()" [class.active]="menuOpen">
  <span></span>
  <span></span>
  <span></span>
</div>

        <img src="assets/logo.png" alt="Logo" class="logo"
        onerror="this.src='https://findmyaitool.com/assets/images/logo.png'"/>
        <span class="brand-name">
          ai<span class="text-gradient">planner</span>
        </span>
      </div>

      <!-- MENU -->
      <div class="nav-links" [class.show]="menuOpen">

        <div class="menu-header">

    <span class="menu-title">
      ai<span class="text-gradient">planner</span>
    </span>
  

  <a class="menu-signin">
    {{ isLoggedIn ? username : 'Sign In' }}
  </a>

</div>


        
        <a href="#" class="nav-item active">Home</a>
        <a href="#" class="nav-item">Categories</a>
        <a href="#" class="nav-item">AI Agents</a>
        <a href="#" class="nav-item">GPT Store</a>
        <a href="#" class="nav-item">Blog</a>

      </div>

      
     

      <!-- DESKTOP ACTIONS -->
      <div class="actions">
        <p-button
          label="Submit"
          icon="pi pi-chevron-down"
          iconPos="right"
          [text]="true"
          severity="secondary">
        </p-button>

        <div class="search-icon">
          <i class="pi pi-search"></i>
        </div>

        <div class="user-profile">
          <img
            src="https://ui-avatars.com/api/?name=Ranjan+Kumar&background=3b82f6&color=fff"
            class="avatar"/>
          <span class="username">Ranjan kumar</span>
        </div>
      </div>

    </nav>
  `,
  styles: `

.navbar{
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:12px 16px;
  background:rgba(0,0,0,0.7);
  backdrop-filter:blur(10px);
  position:sticky;
  top:0;
  z-index:1000;
}

.logo-container{
  display:flex;
  align-items:center;
  gap:10px;
  
}

.logo{ height:32px; }

.brand-name{
  font-weight:800;
  font-size:1.25rem;
}

.nav-links{
  display:flex;
  gap:2rem;
}

.nav-item{
  font-weight:500;
  color:var(--text-muted);
  font-size:0.95rem;
  text-decoration:none;
}

.actions{
  display:flex;
  align-items:center;
  gap:1.5rem;
}

.avatar{
  width:32px;
  height:32px;
  border-radius:50%;
}

.username{
  font-size:0.9rem;
}

.hamburger{ display:none; }
.menu-header{ display:none; }

@media (max-width:768px){

.logo-container{
  display:flex;
  align-items:center;
  gap:10px;
  
}

.hamburger{
  width:28px;
  height:20px;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  cursor:pointer;
  z-index:1000001;
}

.hamburger span{
  width:100%;
  height:2px;
  background:#fff;
  border-radius:2px;
  transition:all .35s cubic-bezier(.4,0,.2,1);
}
.hamburger.active span:nth-child(1){
  transform:translateY(9px) rotate(45deg);
}

.hamburger.active span:nth-child(2){
  opacity:0;
  transform:scaleX(0);
}

.hamburger.active span:nth-child(3){
  transform:translateY(-9px) rotate(-45deg);
}

.nav-links{
  position:fixed;
  inset:0;
  width:100vw;
  height:100vh;
  background: radial-gradient(circle at 20% 20%, #2b0b5a, #000 65%);
  
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;

  transform:translateY(-100%);
  opacity:0;
  pointer-events:none;
  transition:transform .4s ease, opacity .4s ease;
 z-index:999999;

}

.nav-links.show{
  transform:translateY(0);
  opacity:1;
  pointer-events:auto;
}

.menu-header{
  position:absolute;
  top:20px;
  left:0;
  width:100%;
  padding:0 20px;

  display:flex;
  align-items:center;
  justify-content:space-between;
}


.menu-title{
  margin-left:30px;
  font-size:1.25rem;
  font-weight:800;
  line-height:1;
}

.menu-signin{
  margin-left:auto;
  color:#5b5bf7;
  font-size:16px;
  font-weight:500;
  text-decoration:none;
}
.nav-item{
  color:#fff;
  font-size:24px;
  margin:18px 0;
  font-weight:500;
  text-decoration:none;
}

.username{display:none;}
.actions p-button{display:none;}

}

`
})
export class NavbarComponent {

  menuOpen = false;

  isLoggedIn = false;
  username = "";

 toggleMenu(){
  this.menuOpen = !this.menuOpen;

  if(this.menuOpen){
    document.body.style.overflow = 'hidden';
  }else{
    document.body.style.overflow = 'auto';
  }
}



}
