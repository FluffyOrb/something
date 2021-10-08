import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FeaturesComponent } from './components/features/features.component';
import { TileNotificationsComponent } from './components/tile-notifications/tile-notifications.component';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    FeaturesComponent,
    TileNotificationsComponent,
  ],
  imports: [
    CommonModule,
    // primeng
    ButtonModule,
  ]
})
export class FeaturesModule { }
