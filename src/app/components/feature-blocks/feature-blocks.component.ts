import { Component } from '@angular/core';
import { AnimationOptions, LottieComponent } from 'ngx-lottie';

@Component({
  selector: 'app-feature-blocks',
  standalone: true,
  imports: [LottieComponent],
  templateUrl: './feature-blocks.component.html',
  styleUrls: ['./feature-blocks.component.scss'],
})
export class FeatureBlocksComponent {
  pressureOptions: AnimationOptions = {
    path: 'lottieflow-attention-06-000000-easey.json',
    loop: true,
    autoplay: true,
  };

  trashOptions: AnimationOptions = {
    path: 'lottieflow-ecommerce-14-19-000000-easey.json',
    loop: true,
    autoplay: true,
  };

  guaranteeOptions: AnimationOptions = {
    path: 'lottieflow-success-05-000000-easey.json',
    loop: true,
    autoplay: true,
  };

  lottieStyles = {
    width: '80px',
    height: '80px',
  };
}