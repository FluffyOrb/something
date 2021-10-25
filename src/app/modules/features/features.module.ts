import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { QrCodeModule } from 'ng-qrcode';
import { ButtonModule } from 'primeng/button';
import { FeaturesComponent } from './components/features/features.component';
import { TileLayoutResponsivenessComponent } from './components/tile-layout-responsiveness/tile-layout-responsiveness.component';
import { TileMoreFeaturesComponent } from './components/tile-more-features/tile-more-features.component';
import { TileNotificationsComponent } from './components/tile-notifications/tile-notifications.component';
import { TileThemesComponent } from './components/tile-themes/tile-themes.component';

@NgModule({
  declarations: [
    FeaturesComponent,
    TileNotificationsComponent,
    TileThemesComponent,
    TileMoreFeaturesComponent,
    TileLayoutResponsivenessComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    // primeng
    ButtonModule,
    // other
    QrCodeModule,
  ]
})
export class FeaturesModule { }
