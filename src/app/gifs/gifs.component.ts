import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-gifs',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>gifs works!</p>`,
  styleUrl: './gifs.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GifsComponent { }
