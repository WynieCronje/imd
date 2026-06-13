import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { HeroSection } from '../models/content.model';

@Component({
  selector: 'app-hero',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="hero" id="enroll">
      <div class="container hero__row">
        <div class="hero__copy">
          <h2 class="hero__heading display">
            @for (line of hero.headingLines; track line) {
              <span>{{ line }}</span>
            }
          </h2>
          <a class="pill hero__cta" [href]="hero.ctaHref">{{ hero.ctaLabel }}</a>
        </div>
        <div class="hero__media">
          <img [src]="hero.imageSrc" [alt]="hero.imageAlt" />
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero { background: var(--imd-orange); color: var(--imd-white); width: 100%; }
    .hero__row {
      display: grid;
      grid-template-columns: 1.3fr 1fr;
      gap: 1.5rem;
      align-items: center;
      padding-block: 2.5rem 3rem;
    }
    .hero__heading {
      display: flex;
      flex-direction: column;
      gap: 0.1rem;
      margin: 0 0 1.5rem;
      font-size: clamp(1.8rem, 5vw, 3rem);
      line-height: 1.08;
    }
    .hero__media { justify-self: end; width: 100%; max-width: 300px; }
    .hero__media img {
      border-radius: 14px;
      border: 4px solid var(--imd-navy);
      width: 100%;
      object-fit: cover;
      aspect-ratio: 4 / 4.6;
    }
    @media (max-width: 640px) {
      .hero__row {
        grid-template-columns: 1fr;
        padding-block: 1.75rem 2.25rem;
      }
      .hero__media { max-width: 260px; justify-self: start; }
    }
  `],
})
export class HeroComponent {
  @Input({ required: true }) hero!: HeroSection;
}
