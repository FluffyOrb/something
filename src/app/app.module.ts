import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApplicationRef, DoBootstrap, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { API_BASE_URL } from './core/consts/configuration.consts';
import { CoreModule } from './core/core.module';
import { ApiMockInterceptor } from './core/interceptors/api-mock/api-mock.interceptor';
import { SettingsService } from './core/services/settings/settings.service';
import { FaqModule } from './modules/faq/faq.module';
import { FeaturesModule } from './modules/features/features.module';
import { HomeModule } from './modules/home/home.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    // app
    CoreModule,
    FaqModule,
    FeaturesModule,
    HomeModule,
  ],
  providers: [
    { provide: API_BASE_URL, useValue: 'something/api' },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiMockInterceptor,
      multi: true,
    },
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
