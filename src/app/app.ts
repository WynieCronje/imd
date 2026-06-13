import { ChangeDetectionStrategy, Component, inject, OnInit } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";
import { SITE_CONTENT } from "./data/site-content";
import { SiteContent } from "./models/content.model";
import { environment } from "../environments/environment";

import { DiscoverComponent } from "./components/discover/discover";
import { FooterComponent } from "./components/footer/footer";
import { HeaderComponent } from "./components/header/header";
import { HeroComponent } from "./components/hero/hero";
import { ImageBannerComponent } from "./components/image-banner/image-banner";
import { ProgrammeCardComponent } from "./components/programme-card/programme-card";
import { QualificationsNavComponent } from "./components/qualifications-nav/qualifications-nav";
import { QuoteComponent } from "./components/quote/quote";

@Component({
  selector: "app-root",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    HeaderComponent,
    HeroComponent,
    QuoteComponent,
    DiscoverComponent,
    QualificationsNavComponent,
    ImageBannerComponent,
    ProgrammeCardComponent,
    FooterComponent,
  ],
  template: `
    <main class="imd-shell">
      <app-header [brand]="content.brand" />
      <app-hero [hero]="content.hero" />
      <app-quote [quote]="content.quote" />
      <app-discover [discover]="content.discover" />
      <app-qualifications-nav [nav]="content.qualificationsNav" />

      @for (programme of content.programmes; track programme.id) {
        <app-programme-card [card]="programme" />
      }

      <app-image-banner />
      <app-footer [footer]="content.footer" />
    </main>
  `,
})
export class App implements OnInit {
  protected readonly content: SiteContent = SITE_CONTENT;
  private meta = inject(Meta);
  private title = inject(Title);

  ngOnInit(): void {
    this.title.setTitle('IMD College of Management Development');
    this.meta.addTags([
      { name: 'description', content: 'IMD College of Management Development — accredited online qualifications in Financial Accounting, Business Management, Office Administration and more.' },
      { name: 'robots', content: environment.noIndex ? 'noindex, nofollow' : 'index, follow' },
    ]);
  }
}
