import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ProgrammeCard } from '../../models/content.model';

@Component({
  selector: 'app-programme-card',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './programme-card.html',
  styleUrls: ['./programme-card.scss'],
})
export class ProgrammeCardComponent {
  @Input({ required: true }) card!: ProgrammeCard;
}
