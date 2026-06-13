import { ChangeDetectionStrategy, Component } from "@angular/core";
import { SITE_CONTENT } from "./data/site-content";
import { SiteContent } from "./models/content.model";

import { DiscoverComponent } from "./components/discover/discover";
import { FooterComponent } from "./components/footer/footer";
import { HeaderComponent } from "./components/header/header";
import { HeroComponent } from "./components/hero/hero";
import { ProgrammeCardComponent } from "./components/programme-card/programme-card";
import { QualificationsNavComponent } from "./components/qualifications-nav/qualifications-nav";
import { ImageBannerComponent } from "./components/image-banner/image-banner";
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
      <app-image-banner />

      @for (programme of content.programmes; track programme.id) {
        <app-programme-card [card]="programme" />
      }

      <app-footer [footer]="content.footer" />
    </main>
  `,
})
export class App {
  protected readonly content: SiteContent = SITE_CONTENT;
}
