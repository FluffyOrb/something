import { Component } from '@angular/core';
import { AppConsts } from '../../../../core/consts/app.consts';
import { SettingsService } from '../../../../core//services/settings/settings.service';

@Component({
  selector: 'app-tile-settings',
  templateUrl: './tile-settings.component.html',
  styleUrls: ['./tile-settings.component.scss']
})
export class TileSettingsComponent {

  readonly APP_NAME = AppConsts.APP_NAME;

  constructor(
    private readonly settingsService: SettingsService,
  ) { }

  onOpenSidebarSettings() {
    this.settingsService.sidebarOpen = true;
  }

}
