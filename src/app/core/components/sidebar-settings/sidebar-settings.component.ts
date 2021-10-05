import { Component } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { AppTheme } from 'src/app/core/models/theme.model';
import { SettingsService } from '../../services/settings/settings.service';
import { ThemeService } from '../../services/theme/theme.service';

@Component({
  selector: 'app-sidebar-settings',
  templateUrl: './sidebar-settings.component.html',
  styleUrls: ['./sidebar-settings.component.scss']
})
export class SidebarSettingsComponent {

  readonly THEME_OPTIONS: SelectItem<AppTheme>[] = [
    { value: AppTheme.LightBlue, label: 'Light blue' },
    { value: AppTheme.DarkViolet, label: 'Dark violet' },
  ];

  constructor(
    public readonly settingsService: SettingsService,
    public readonly themeService: ThemeService,
  ) { }

  onSidebarClose() {
    this.settingsService.sidebarOpen = false;
  }

  onThemeChange(theme: AppTheme) {
    this.themeService.theme = theme;
  }

}
