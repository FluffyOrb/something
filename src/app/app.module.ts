import { ApplicationRef, DoBootstrap, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SettingsService } from './core/services/settings/settings.service';
import { HomeModule } from './modules/home/home.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    // app
    CoreModule,
    HomeModule,
  ],
})
export class AppModule implements DoBootstrap {

  constructor(
    private readonly settingsService: SettingsService,
  ) { }

  ngDoBootstrap(app: ApplicationRef) {
    this.settingsService.init();
    app.bootstrap(AppComponent);
  }

}
