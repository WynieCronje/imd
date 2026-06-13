import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NavBrand } from '../../models/content.model';

@Component({
  selector: 'app-header',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './header.html',
  styleUrls: ['./header.scss'],
})
export class HeaderComponent {
  @Input({ required: true }) brand!: NavBrand;
}
