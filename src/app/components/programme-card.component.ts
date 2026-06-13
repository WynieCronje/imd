import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ProgrammeCard } from '../models/content.model';

@Component({
  selector: 'app-programme-card',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section
      class="pc"
      [class.pc--orange-on-navy]="card.variant === 'orange-on-navy'"
      [class.pc--navy-on-orange]="card.variant === 'navy-on-orange'"
      [id]="card.id"
    >
      <div class="container">
        <!-- Outer layer: the framing rounded rectangle -->
        <div class="pc__outer">
          <!-- Inner layer: the offset content panel with hairline outline -->
          <div class="pc__inner">
            <!-- Header bar overlaps the top edge of the inner panel -->
            <header class="pc__head">
              <span class="pc__dot" aria-hidden="true"></span>
              <h3 class="pc__title display">{{ card.title }}</h3>
              <button class="pc__close" type="button" aria-label="Close">
                <span aria-hidden="true">&#10005;</span>
              </button>
            </header>

            <div class="pc__body">
              @if (card.intro) {
                <p class="pc__intro">{{ card.intro }}</p>
              }
              @if (card.note) {
                <p class="pc__note">{{ card.note }}</p>
              }

              <div class="pc__content">
                <ul class="pc__list">
                  @for (item of card.items; track item) {
                    <li>{{ item }}</li>
                  }
                </ul>
                @if (card.illustrationSrc) {
                  <img
                    class="pc__illustration"
                    [src]="card.illustrationSrc"
                    [alt]="card.illustrationAlt || ''"
                  />
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    /* ---- Per-variant color roles via CSS custom properties ---- */
    .pc {
      --frame: var(--imd-navy);
      --panel: var(--imd-orange);
      --header: var(--imd-navy);
      --ink: var(--imd-white);
      --hairline: rgba(255, 255, 255, 0.85);

      padding-block: 1.75rem;
      background: var(--imd-orange);
    }

    .pc--orange-on-navy {
      --frame: var(--imd-navy);
      --panel: var(--imd-orange);
      --header: var(--imd-navy);
    }
    .pc--navy-on-orange {
      --frame: var(--imd-orange);
      --panel: var(--imd-navy);
      --header: var(--imd-orange);
    }

    /* ---- Layer 1: outer frame ---- */
    .pc__outer {
      background: var(--frame);
      border-radius: 26px;
      padding: clamp(8px, 1.2vw, 16px);
    }

    /* ---- Layer 2: inner panel, inset within the frame ---- */
    .pc__inner {
      position: relative;
      background: var(--panel);
      color: var(--ink);
      border-radius: 18px;
      outline: 2px solid var(--hairline);
      outline-offset: -6px;
      padding: 0 1.6rem 1.6rem;
      margin-top: 34px;
    }

    /* ---- Header bar: breaks out above the inner panel's top edge ---- */
    .pc__head {
      position: relative;
      top: -34px;
      margin-bottom: -34px;
      display: flex;
      align-items: center;
      gap: 0.85rem;
      background: var(--header);
      color: var(--imd-white);
      border-radius: 16px;
      padding: 0.6rem 1.1rem;
      margin-inline: -0.4rem;
    }
    .pc__dot {
      width: 22px;
      height: 22px;
      border-radius: 50%;
      border: 2px solid currentColor;
      flex: none;
    }
    .pc__title {
      flex: 1;
      margin: 0;
      font-size: clamp(1.35rem, 3.5vw, 2rem);
      line-height: 1.1;
    }
    .pc__close {
      background: none;
      border: none;
      color: currentColor;
      font-size: 1.25rem;
      line-height: 1;
      cursor: pointer;
      padding: 0.25rem;
    }
    .pc__close:focus-visible {
      outline: 2px solid var(--imd-white);
      outline-offset: 2px;
      border-radius: 4px;
    }

    /* ---- Body ---- */
    .pc__body { padding-top: 0.5rem; }
    .pc__intro {
      font-weight: 700;
      font-size: 0.92rem;
      margin: 0.25rem 0 1rem;
    }
    .pc__note {
      font-weight: 700;
      font-size: 0.95rem;
      text-align: center;
      margin: 0.25rem 0 1rem;
    }
    .pc__content {
      display: flex;
      gap: 1rem;
      align-items: flex-end;
    }
    .pc__list {
      margin: 0;
      padding-left: 1.25rem;
      font-size: 0.92rem;
      line-height: 1.7;
      flex: 1;
    }
    .pc__list li { margin-bottom: 0.1rem; }
    .pc__illustration {
      width: 200px;
      max-width: 38%;
      height: auto;
    }

    @media (max-width: 640px) {
      .pc { padding-block: 1.1rem; }
      .pc__inner { padding-inline: 1.1rem; }
      .pc__content { flex-direction: column; align-items: center; }
      .pc__illustration { max-width: 60%; }
    }
  `],
})
export class ProgrammeCardComponent {
  @Input({ required: true }) card!: ProgrammeCard;
}
