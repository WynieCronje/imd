import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SITE_CONTENT } from './data/site-content';
import { SiteContent } from './models/content.model';

import { HeaderComponent } from './components/header.component';
import { HeroComponent } from './components/hero.component';
import { QuoteComponent } from './components/quote.component';
import { DiscoverComponent } from './components/discover.component';
import { QualificationsNavComponent } from './components/qualifications-nav.component';
import { ProgrammeCardComponent } from './components/programme-card.component';
import { FooterComponent } from './components/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    HeaderComponent,
    HeroComponent,
    QuoteComponent,
    DiscoverComponent,
    QualificationsNavComponent,
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

      <app-footer [footer]="content.footer" />
    </main>
  `,
})
export class AppComponent {
  protected readonly content: SiteContent = SITE_CONTENT;
}
