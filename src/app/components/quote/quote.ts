import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { QuoteSection } from '../../models/content.model';

@Component({
  selector: 'app-quote',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './quote.html',
  styleUrls: ['./quote.scss'],
})
export class QuoteComponent {
  @Input({ required: true }) quote!: QuoteSection;
}
