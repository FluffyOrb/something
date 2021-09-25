import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { SidebarMenuComponent } from './components/sidebar-menu/sidebar-menu.component';
import { SidebarNotificationsComponent } from './components/sidebar-notifications/sidebar-notifications.component';
import { TileNotificationsComponent } from './components/tile-notifications/tile-notifications.component';
import { LevelIconPipe } from './pipes/level-icon/level-icon.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SidebarMenuComponent,
    SidebarNotificationsComponent,
    LevelIconPipe,
    TileNotificationsComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    // primeng
    BadgeModule,
    ButtonModule,
    SidebarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
