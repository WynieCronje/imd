import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { QuoteSection } from '../models/content.model';

@Component({
  selector: 'app-quote',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="quote">
      <div class="container quote__row">
        <div class="quote__card">
          <p class="quote__text display">{{ quote.quote }}</p>
          <p class="quote__attr display">{{ quote.attribution }}</p>
        </div>
        <div class="quote__panel">
          <p><strong>{{ quote.bodyHtmlLead }}</strong>{{ quote.body }}</p>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .quote {
      width: 100%;
      background:
        linear-gradient(rgba(0, 4, 75, 0.78), rgba(0, 4, 75, 0.78)),
        var(--imd-navy);
      background-size: cover;
      background-position: center;
    }
    .quote__row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1.5rem;
      padding-block: 2.5rem;
      align-items: stretch;
    }
    .quote__card {
      background: var(--imd-orange);
      color: var(--imd-white);
      border-radius: var(--radius-card);
      padding: 1.75rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .quote__text {
      font-family: var(--font-serif);
      font-style: italic;
      font-size: clamp(1.2rem, 3.2vw, 1.8rem);
      line-height: 1.25;
      margin: 0 0 1rem;
    }
    .quote__attr { font-family: var(--font-serif); font-style: italic; font-size: 1rem; margin: 0; }
    .quote__panel {
      background: var(--imd-navy);
      color: var(--imd-white);
      border-radius: var(--radius-card);
      padding: 1.75rem;
      display: flex;
      align-items: center;
      text-align: center;
      font-size: 0.95rem;
    }
    .quote__panel p { margin: 0; }
    @media (max-width: 640px) {
      .quote__row { grid-template-columns: 1fr; padding-block: 1.5rem; }
    }
  `],
})
export class QuoteComponent {
  @Input({ required: true }) quote!: QuoteSection;
}
