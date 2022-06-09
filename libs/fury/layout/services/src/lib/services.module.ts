import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SplashScreenService } from './splash-screen.service';
import { ThemeService } from './theme.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
  ],
  providers: [
    SplashScreenService,
    ThemeService
  ],
  exports: [
  ]
})
export class ServicesModule {
}
