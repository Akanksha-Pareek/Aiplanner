import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../../components/hero/hero';
import { LogoMarqueeComponent } from '../../components/logo-marquee/logo-marquee';
import { ToolMasonryGridComponent } from '../../components/tool-masonry-grid/tool-masonry-grid';
import { AiShortsComponent } from '../../components/ai-shorts/ai-shorts';
import { FeaturedAgentsComponent } from '../../components/featured-agents/featured-agents';
import { AgentCategoriesComponent } from '../../components/agent-categories/agent-categories';
import { ToolCategoriesComponent } from '../../components/tool-categories/tool-categories';
import { PopularToolsComponent } from '../../components/popular-tools/popular-tools';
import { ExploreGptsComponent } from '../../components/explore-gpts/explore-gpts';
import { BlogsComponent } from '../../components/blogs/blogs';
import { PromotedRowComponent } from '../../components/promoted-row/promoted-row';
import { NewsletterSectionComponent } from '../../components/newsletter-section/newsletter-section';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    LogoMarqueeComponent,
    ToolMasonryGridComponent,
    AiShortsComponent,
    FeaturedAgentsComponent,
    AgentCategoriesComponent,
    ToolCategoriesComponent,
    PopularToolsComponent,
    ExploreGptsComponent,
    BlogsComponent,
    PromotedRowComponent,
    NewsletterSectionComponent,
  ],
  template: `
    <div class="home-container">
      <app-hero></app-hero>
      <app-logo-marquee></app-logo-marquee>
      <app-promoted-row></app-promoted-row>
      <app-tool-masonry-grid></app-tool-masonry-grid>
      <app-ai-shorts></app-ai-shorts>
      <app-featured-agents></app-featured-agents>
      <app-agent-categories></app-agent-categories>
      <app-popular-tools></app-popular-tools>
      <app-tool-categories></app-tool-categories>
      <app-explore-gpts></app-explore-gpts>
      <app-blogs></app-blogs>
      <app-newsletter-section></app-newsletter-section>
    </div>
  `,
  styles: `
    .home-container {
      padding-top: 2rem;
    }
  `,
})
export class HomeComponent {
}
