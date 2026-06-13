import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { FooterSection } from '../models/content.model';

@Component({
  selector: 'app-footer',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <footer class="footer">
      <div class="container">
        <div class="footer__top">
          <div class="footer__contact">
            <h2 class="footer__heading display">{{ footer.contactHeading }}</h2>
            <ul class="footer__list">
              @for (c of footer.contacts; track c.value) {
                <li>
                  <span class="footer__icon" aria-hidden="true"
                    [innerHTML]="contactIcon(c.type)">
                  </span>
                  {{ c.value }}
                </li>
              }
            </ul>
          </div>

          <div class="footer__illustration">
            <img [src]="footer.illustrationSrc" [alt]="footer.illustrationAlt" />
          </div>

          <div class="footer__tag display">
            @for (line of footer.tagLines; track line) {
              <span>{{ line }}</span>
            }
          </div>
        </div>

        <div class="footer__bottom">
          <div class="footer__accred">
            <h3 class="footer__accred-heading">{{ footer.accreditationHeading }}</h3>
            <p class="footer__accred-text">{{ footer.accreditationText }}</p>
          </div>
          <img class="footer__accred-logo"
               [src]="footer.accreditationLogoSrc"
               [alt]="footer.accreditationLogoAlt" />
          <ul class="footer__socials">
            @for (s of footer.socials; track s.network) {
              <li>
                <a [href]="s.href" [attr.aria-label]="s.label" class="footer__social"
                  [innerHTML]="svgIcon(s.network)">
                </a>
              </li>
            }
          </ul>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer { width: 100%; background: var(--imd-navy); color: var(--imd-white); }
    .footer__top {
      display: grid;
      grid-template-columns: 1fr auto 1fr;
      gap: 1.5rem;
      align-items: center;
      padding-block: 2rem 1.5rem;
    }
    .footer__heading { margin: 0 0 0.75rem; font-size: 1.4rem; }
    .footer__list { list-style: none; margin: 0; padding: 0; font-size: 0.9rem; }
    .footer__list li { display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.4rem; }
    .footer__icon {
      display: inline-flex; align-items: center; justify-content: center;
      width: 22px; height: 22px; border-radius: 50%;
      background: var(--imd-orange); font-size: 0.7rem;
    }
    .footer__illustration img {
      width: 110px; height: 110px; object-fit: contain;
      background: var(--imd-orange); border-radius: 14px; padding: 8px;
    }
    .footer__tag {
      display: flex; flex-direction: column;
      font-size: clamp(1.1rem, 3vw, 1.5rem);
      line-height: 1.15; text-align: right;
    }
    .footer__bottom {
      display: flex; align-items: center; gap: 1.25rem; flex-wrap: wrap;
      padding-block: 1rem 2rem;
    }
    .footer__accred-heading { margin: 0; font-size: 0.85rem; font-weight: 800; }
    .footer__accred-text { margin: 0.2rem 0 0; font-size: 0.7rem; max-width: 180px; }
    .footer__accred-logo { width: 70px; height: auto; }
    .footer__socials {
      list-style: none; display: flex; gap: 0.6rem;
      margin: 0 0 0 auto; padding: 0;
    }
    .footer__social {
      display: inline-flex; align-items: center; justify-content: center;
      width: 34px; height: 34px; border-radius: 50%;
      background: var(--imd-orange); color: var(--imd-white);
      text-decoration: none; font-size: 1rem;
    }
    .footer__social:focus-visible { outline: 3px solid var(--imd-white); outline-offset: 2px; }
    @media (max-width: 640px) {
      .footer__top { grid-template-columns: 1fr; text-align: left; }
      .footer__tag { text-align: left; }
      .footer__socials { margin-left: 0; }
    }
  `],
})
export class FooterComponent {
  @Input({ required: true }) footer!: FooterSection;
  private sanitizer = inject(DomSanitizer);

  svgIcon(network: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(this.rawSvg(network));
  }

  contactIcon(type: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(this.rawContactIcon(type));
  }

  private rawSvg(network: string): string {
    switch (network) {
      case 'instagram':
        return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
        </svg>`;
      case 'facebook':
        return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>`;
      case 'messenger':
        return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
          <path d="M12 0C5.373 0 0 4.974 0 11.111c0 3.498 1.744 6.614 4.469 8.654V24l4.088-2.242c1.092.3 2.246.464 3.443.464 6.627 0 12-4.975 12-11.111S18.627 0 12 0zm1.191 14.963l-3.055-3.26-5.963 3.26L10.732 8.1l3.131 3.26L19.752 8.1l-6.561 6.863z"/>
        </svg>`;
      case 'whatsapp':
        return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
        </svg>`;
      default: return '';
    }
  }

  private rawContactIcon(type: string): string {
    if (type === 'phone') {
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="13" height="13">
        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
      </svg>`;
    }
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="13" height="13">
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
    </svg>`;
  }
}
