import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { QualificationsNav } from '../models/content.model';

@Component({
  selector: 'app-qualifications-nav',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="quals">
      <div class="container">
        <h2 class="quals__heading display">{{ nav.heading }}</h2>
        <div class="quals__grid">
          @for (link of nav.links; track link.href) {
            <div class="quals__item">
              <h3 class="quals__title">{{ link.title }}</h3>
              <a class="pill quals__cta" [href]="link.href">{{ link.ctaLabel }}</a>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .quals { width: 100%; background: var(--imd-navy); color: var(--imd-white); }
    .container { padding-block: 3rem 3.5rem; text-align: center; }
    .quals__heading {
      font-size: clamp(2rem, 6vw, 3.2rem);
      margin: 0 0 2.5rem;
      letter-spacing: 0.02em;
    }
    .quals__grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 1.25rem;
    }
    .quals__title {
      font-size: 1.05rem;
      font-weight: 800;
      white-space: pre-line;
      margin: 0 0 1rem;
      line-height: 1.2;
    }
    .quals__cta { background: var(--imd-orange); color: var(--imd-white); }
    @media (max-width: 640px) {
      .container { padding-block: 2rem; }
      .quals__grid { grid-template-columns: repeat(2, 1fr); gap: 1.5rem 1rem; }
    }
  `],
})
export class QualificationsNavComponent {
  @Input({ required: true }) nav!: QualificationsNav;
}
