import { Injectable } from '@angular/core';
import { ThemeService } from '../theme/theme.service';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  sidebarOpen = false;

  constructor(
    private readonly themeService: ThemeService,
  ) { }

  init() {
    this.themeService.init();
  }

}
