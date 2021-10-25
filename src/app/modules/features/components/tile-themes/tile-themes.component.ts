import { Component } from '@angular/core';
import { AppConsts } from 'src/app/core/consts/app.consts';
import { SettingsService } from 'src/app/core/services/settings/settings.service';

@Component({
  selector: 'app-tile-themes',
  templateUrl: './tile-themes.component.html',
  styleUrls: ['./tile-themes.component.scss']
})
export class TileThemesComponent {

  readonly APP_NAME = AppConsts.APP_NAME;

  constructor(
    private readonly settingsService: SettingsService,
  ) { }

  onOpenSidebarSettings() {
    this.settingsService.sidebarOpen = true;
  }

}
