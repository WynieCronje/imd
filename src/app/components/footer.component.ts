import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
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
                  <span class="footer__icon" aria-hidden="true">
                    {{ c.type === 'phone' ? '\u260E' : '\u2709' }}
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
                <a [href]="s.href" [attr.aria-label]="s.label" class="footer__social">
                  {{ glyph(s.network) }}
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

  glyph(network: string): string {
    switch (network) {
      case 'instagram': return '\u{1F4F7}';
      case 'facebook': return 'f';
      case 'messenger': return '\u{1F4AC}';
      case 'whatsapp': return '\u260E';
      default: return '\u2022';
    }
  }
}
