import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { fadeInRightAnimation } from './fade-in-right.animation';
import { fadeInUpAnimation } from './fade-in-up.animation';
import { routeAnimation } from './route.animation';
import { routeAnimations } from './route.animations';
import { scaleInAnimation } from './scale-in.animation';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    fadeInRightAnimation,
    fadeInUpAnimation,
    routeAnimation,
    routeAnimations,
    scaleInAnimation
  ],
  exports: [
    fadeInRightAnimation,
    fadeInUpAnimation,
    routeAnimation,
    routeAnimations,
    scaleInAnimation,
  ]
})
export class AnimationsModule {
}
