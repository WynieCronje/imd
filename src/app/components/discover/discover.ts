import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { DiscoverSection } from '../../models/content.model';

@Component({
  selector: 'app-discover',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './discover.html',
  styleUrls: ['./discover.scss'],
})
export class DiscoverComponent {
  @Input({ required: true }) discover!: DiscoverSection;
}
