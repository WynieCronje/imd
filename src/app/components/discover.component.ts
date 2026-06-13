import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { DiscoverSection } from '../models/content.model';

@Component({
  selector: 'app-discover',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="discover">
      <div class="container discover__row">
        <div class="discover__media">
          <img [src]="discover.imageSrc" [alt]="discover.imageAlt" />
        </div>
        <div class="discover__copy">
          <h2 class="discover__heading display">{{ discover.heading }}</h2>
          @for (p of discover.paragraphs; track $index) {
            <p>{{ p }}</p>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .discover { width: 100%; background: var(--imd-orange); color: var(--imd-white); }
    .discover__row {
      display: grid;
      grid-template-columns: 1fr 1.15fr;
      align-items: stretch;
      gap: 0;
      /* let the image bleed to the section's left edge within the container */
      padding: 0;
    }
    .discover__media { align-self: stretch; }
    .discover__media img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      min-height: 320px;
    }
    .discover__copy { padding: 2.5rem 0 2.5rem 2rem; }
    .discover__heading { font-size: clamp(1.6rem, 4vw, 2.4rem); margin: 0 0 1rem; }
    .discover__copy p { font-size: 0.95rem; margin: 0 0 1rem; }
    @media (max-width: 640px) {
      .discover__row { grid-template-columns: 1fr; }
      .discover__media img { max-height: 240px; min-height: 0; }
      .discover__copy { padding: 1.75rem 0; }
    }
  `],
})
export class DiscoverComponent {
  @Input({ required: true }) discover!: DiscoverSection;
}
