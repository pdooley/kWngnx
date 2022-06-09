import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation.component';
import { FurySharedModule } from '@fury/core'
import { NavigationItemComponent } from './navigation-item/navigation-item.component';

@NgModule({
  imports: [
    CommonModule,
    FurySharedModule
  ],
  declarations: [NavigationComponent, NavigationItemComponent],
  exports: [NavigationComponent]
})
export class NavigationModule {
}
