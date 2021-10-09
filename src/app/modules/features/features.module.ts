import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FeaturesComponent } from './components/features/features.component';
import { TileNotificationsComponent } from './components/tile-notifications/tile-notifications.component';
import { ButtonModule } from 'primeng/button';
import { TileSettingsComponent } from './components/tile-themes/tile-settings.component';

@NgModule({
  declarations: [
    FeaturesComponent,
    TileNotificationsComponent,
    TileSettingsComponent,
  ],
  imports: [
    CommonModule,
    // primeng
    ButtonModule,
  ]
})
export class FeaturesModule { }
