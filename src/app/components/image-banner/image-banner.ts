import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-image-banner",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./image-banner.html",
  styleUrls: ["./image-banner.scss"],
})
export class ImageBannerComponent {}
