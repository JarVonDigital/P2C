import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { FeatureBlocksComponent } from './components/feature-blocks/feature-blocks.component';
import { SectionComponent } from './components/section/section.component';
import { InfoCardComponent } from './components/info-card/info-card.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  imports: [
    RouterModule,
    NavbarComponent,
    HeroComponent,
    FeatureBlocksComponent,
    SectionComponent,
    InfoCardComponent,
    FooterComponent
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Power2Clean';
}
