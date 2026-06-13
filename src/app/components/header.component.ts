import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NavBrand } from '../models/content.model';

@Component({
  selector: 'app-header',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header class="header">
      <div class="container header__row">
        <div class="header__brand">
          <img class="header__logo" [src]="brand.logoSrc" [alt]="brand.logoAlt" />
        </div>
        <h1 class="header__title display">
          <span>{{ brand.title }}</span>
          <span>{{ brand.titleLine2 }}</span>
        </h1>
      </div>
    </header>
  `,
  styles: [`
    .header { background: var(--imd-white); width: 100%; }
    .header__row {
      display: flex;
      align-items: center;
      gap: 1.25rem;
      padding-block: 1.1rem;
    }
    .header__logo { width: 86px; height: auto; }
    .header__title {
      margin: 0;
      color: var(--imd-navy);
      font-size: clamp(1.05rem, 2.8vw, 1.65rem);
      font-weight: 800;
      line-height: 1.05;
      letter-spacing: 0.08em;
      display: flex;
      flex-direction: column;
    }
    @media (max-width: 560px) {
      .header__row { gap: 0.85rem; }
      .header__logo { width: 60px; }
    }
  `],
})
export class HeaderComponent {
  @Input({ required: true }) brand!: NavBrand;
}
