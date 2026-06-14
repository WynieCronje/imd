import { ChangeDetectionStrategy, Component, inject, OnInit, DOCUMENT } from "@angular/core";
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
    <a class="skip-link" href="#main-content">Skip to main content</a>
    <main class="imd-shell" id="main-content">
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
  private document = inject(DOCUMENT);

  ngOnInit(): void {
    const title = 'IMD College of Management Development';
    const description = 'IMD College of Management Development — accredited online qualifications in Financial Accounting, Business Management, Office Administration and more.';
    const shareImage = `${environment.canonicalUrl}/images/imd-college-share.png`;

    this.title.setTitle(title);

    this.meta.addTags([
      { name: 'description', content: description },
      { name: 'robots', content: environment.noIndex ? 'noindex, nofollow' : 'index, follow' },

      // Open Graph
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: environment.canonicalUrl },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: shareImage },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:site_name', content: 'IMD College' },
      { property: 'og:locale', content: 'en_ZA' },

      // Twitter / X Card
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: shareImage },
    ]);

    // Canonical link
    this.setCanonical(environment.canonicalUrl);

    // JSON-LD structured data
    this.injectJsonLd({
      '@context': 'https://schema.org',
      '@type': 'EducationalOrganization',
      name: 'IMD College of Management Development',
      url: environment.canonicalUrl,
      logo: `${environment.canonicalUrl}/images/imd-college-logo.svg`,
      image: shareImage,
      description,
      telephone: '+27815781579',
      email: 'info@imdcollege.co.za',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'ZA',
      },
      sameAs: [
        'https://www.facebook.com/college.imd/',
        'https://www.instagram.com/imd.college',
      ],
      hasCredential: [
        'Financial Accounting',
        'Business Management',
        'Office Administration',
        'Skills Programmes & Services',
      ].map(name => ({ '@type': 'EducationalOccupationalCredential', name })),
    });
  }

  private setCanonical(url: string): void {
    const existing = this.document.querySelector('link[rel="canonical"]');
    if (existing) {
      existing.setAttribute('href', url);
    } else {
      const link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      link.setAttribute('href', url);
      this.document.head.appendChild(link);
    }
  }

  private injectJsonLd(schema: object): void {
    const script = this.document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    this.document.head.appendChild(script);
  }
}
