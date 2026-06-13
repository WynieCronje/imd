import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { QualificationsNav } from '../../models/content.model';

@Component({
  selector: 'app-qualifications-nav',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './qualifications-nav.html',
  styleUrls: ['./qualifications-nav.scss'],
})
export class QualificationsNavComponent {
  @Input({ required: true }) nav!: QualificationsNav;
}
