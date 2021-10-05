import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { SidebarModule } from 'primeng/sidebar';
import { AppRoutingModule } from '../app-routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarMenuComponent } from './components/sidebar-menu/sidebar-menu.component';
import { SidebarNotificationsComponent } from './components/sidebar-notifications/sidebar-notifications.component';
import { SidebarSettingsComponent } from './components/sidebar-settings/sidebar-settings.component';
import { LevelIconPipe } from './pipes/level-icon/level-icon.pipe';

@NgModule({
  declarations: [
    // components
    FooterComponent,
    HeaderComponent,
    SidebarMenuComponent,
    SidebarNotificationsComponent,
    SidebarSettingsComponent,
    // pipes
    LevelIconPipe,
  ],
  exports: [
    // components
    FooterComponent,
    HeaderComponent,
    SidebarMenuComponent,
    SidebarNotificationsComponent,
    SidebarSettingsComponent,
    // pipes
    LevelIconPipe,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    // primeng
    BadgeModule,
    ButtonModule,
    DropdownModule,
    SidebarModule,
  ]
})
export class CoreModule { }
