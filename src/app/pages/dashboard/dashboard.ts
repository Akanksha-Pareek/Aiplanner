import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { AvatarModule } from 'primeng/avatar';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, InputTextModule, AvatarModule, InputIconModule, IconFieldModule],

  template: `
  <div class="layout">

    <div class="sidebar">
      <div>
        <div class="logo">
          <img src="assets/dashboard-icons/logo.png" />
        
        </div>

        <div class="menu">
          <a class="active"><i class="pi pi-home"></i> Home</a>
          <a><i class="pi pi-search"></i> Search AI Tools</a>
          <a><i class="pi pi-sparkles"></i>Trending Tools</a>
          <a><i class="pi pi-bookmark"></i> My Saved Tools</a>
        </div>

        <div class="recent">
          <p>Recent Searches</p>
          <span>WhatsApp chatbot</span>
          <span>AI content writing</span>
          <span>Lead generation tools</span>
        </div>
      </div>

      <div class="bottom">
        <a><i class="pi pi-cog"></i> Settings</a>
        <a><i class="pi pi-user"></i> Support</a>
      </div>
    </div>

  
    <div class="main">

      <!-- profile avatar -->
      <div class="topbar">
        <p-avatar icon="pi pi-user" shape="circle"></p-avatar>
      </div>

      <div class="center">
        <h1>Welcome to UsefulAI Workspace</h1>
        <p class="subtitle">Ask anything. Find the best AI for your task.</p>

      
       <div class="search">
        
 <p-iconfield iconPosition="right">
  <input type="text" pInputText placeholder="What do you want to do today? (Build chatbot, Create ads, Automate WhatsApp...)" />
  
  <p-inputicon class="pi pi-angle-down"></p-inputicon>
  <p-inputicon class="pi pi-microphone"></p-inputicon>
  <p-inputicon class="pi pi-send"></p-inputicon>
 </p-iconfield>

</div>

        <p class="suggest">Show suggestions like</p>

        <div class="cats">
          <div class="box" *ngFor="let item of categories">
            <div class="icon-wrap">
              <img [src]="item.icon" />
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
  `,

  styles: `
  .layout{
    display:flex;
    height:100vh;
    font-family:Inter,sans-serif;
    background:#eef2f7;
  }

  
  .sidebar{
    width:260px;
    background:#0b0f3f;
    color:#fff;
    padding: 30px 20px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
  }

 .logo{
  margin-bottom:30px;
   background:transparent;
}

.logo img{
  width:170px;   
  height:auto;
  object-fit:cover;
  background:transparent;
}
 .menu a{
  display:block;
  padding:12px 0;   /* increases vertical spacing */
  margin-bottom:6px; /* space between menu rows */
  color:#cbd5e1;
  text-decoration:none;
  font-size:14px;
}
  .menu a i{margin-right:8px;}
  .menu .active{color:#fff;font-weight:600;}

  .recent p{
  font-size:15px;
  margin-bottom:10px;
  padding-bottom:8px;
  border-bottom:1px solid #ffffff33; 
}

.recent span{
 font-size:14px;
  display:block;
  margin-top:8px;
  padding:6px 0;
}
 .bottom{
  margin-top:20px;
  padding-top:15px;
  border-top:1px solid rgba(255,255,255,0.2);
}

.bottom a{
  display:block;
  margin-top:10px;
  font-size:14px;
  opacity:.8;
  border:none;   /* important */
}
  /* MAIN */
  .main{
    flex:1;
    background:linear-gradient(120deg,#eef2f7,#f8fafc);
    border-radius:20px;
    margin:10px;
    position:relative;
  }

  .topbar{
    position:absolute;
    right:20px;
    top:20px;
  }

  /* CENTER */
  .center{
    height:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    text-align:center;
  }

  h1{
    font-family:'Inter', sans-serif;
    font-size:47px;
    color:#0b0f3f;
    margin-bottom:8px;
    font-weight:700;
  }

  .subtitle{
    color:rgba(0, 0, 0, 0.7);
    margin-top:18px;
    font-weight:650;
     margin-bottom:24px; 
  }

  .search{
  background:#fff;
  padding:14px 22px;
  border-radius:40px;
  width:720px;
  height:52px;
  display:flex;
  align-items:center;
  box-shadow:0 12px 30px rgba(0,0,0,.08);
  margin-bottom:26px;
  border:1px solid #2564ebbe;
}

.search p-iconfield{
  position:relative;
  width:100%;
   display:flex;
  align-items:center;
}

.search input{
  width:100%;
  border:none;
  outline:none;
  font-size:14px;
  padding-right:120px;
  
}

.search input::placeholder{
  color:#6b7280;
}

.search p-inputicon{
  position:absolute;
  top:50%;
  transform:translateY(-50%);
  font-size:18px;
color:#6b7280;
  
  display:flex;
  align-items:center;
  justify-content:center;
  
}
/* icon positions */
.search .pi-angle-down{ right:85px; }
.search .pi-microphone{ right:50px; }
.search .pi-send{ right:15px; }

.search .pi-angle-down::after,
.search .pi-microphone::after{
  content:"";
  position:absolute;
  right:-10px;
  top:50%;
  transform:translateY(-50%);
  height:18px;
  width:1px;
  background:rgba(0,0,0,0.4);
}
  .suggest{
   color:rgba(0, 0, 0, 0.55);
    margin-bottom:15px;
    font-weight:650;
  }

  
  .cats{
    margin-top:25px;
    display:flex;
    gap:12px;
    flex-wrap:wrap;
    justify-content:center;
  }

  .icon-wrap{
  width:100px;        
  height:100px;
  
  display:flex;
  align-items:center;
  justify-content:center;
  cursor:pointer;
}
  .icon-wrap img{
  width:72px;  
  height:72px;
  object-fit:contain;
  
}

  
  `
})
export class DashboardComponent {

  categories = [
    { icon: 'assets/dashboard-icons/chatbots.png' },
    { icon: 'assets/dashboard-icons/marketing.png' },
    { icon: 'assets/dashboard-icons/content.png' },
    { icon: 'assets/dashboard-icons/video.png' },
    { icon: 'assets/dashboard-icons/automation.png' },
    { icon: 'assets/dashboard-icons/support.png' },
    { icon: 'assets/dashboard-icons/development.png' },
    { icon: 'assets/dashboard-icons/sales.png' },
    
  ];

}