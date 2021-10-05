import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { HomeComponent } from './components/home/home.component';
import { TileNotificationsComponent } from './components/tile-notifications/tile-notifications.component';

@NgModule({
  declarations: [
    // components
    HomeComponent,
    TileNotificationsComponent,
  ],
  imports: [
    CommonModule,
    // primeng
    ButtonModule,
  ]
})
export class HomeModule { }
