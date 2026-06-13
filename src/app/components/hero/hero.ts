import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { HeroSection } from '../../models/content.model';

@Component({
  selector: 'app-hero',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './hero.html',
  styleUrls: ['./hero.scss'],
})
export class HeroComponent {
  @Input({ required: true }) hero!: HeroSection;
}
