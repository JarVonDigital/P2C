import { Component } from '@angular/core';
import { FeatureBlocksComponent } from '../feature-blocks/feature-blocks.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  imports: [FeatureBlocksComponent],
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent {} 