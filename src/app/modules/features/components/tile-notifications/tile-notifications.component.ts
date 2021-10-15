import { Component } from '@angular/core';
import { AppConsts } from '../../../../core/consts/app.consts';
import { NotificationsApiMockService } from '../../../../core/services/notifications-api-mock/notifications-api-mock.service';

@Component({
  selector: 'app-tile-notifications',
  templateUrl: './tile-notifications.component.html',
  styleUrls: ['./tile-notifications.component.scss']
})
export class TileNotificationsComponent {

  readonly APP_NAME = AppConsts.APP_NAME;

  constructor(
    private readonly notificationsApiMockService: NotificationsApiMockService
  ) { }

  onAddLowLevelNotification() {
    this.notificationsApiMockService.pushFakeLowLevelNotification();
  }

  onAddHighLevelNotification() {
    this.notificationsApiMockService.pushFakeHighLevelNotification();
  }

  onAddLongNotification() {
    this.notificationsApiMockService.pushFakeLongNotification();
  }

  onAddMultipleNotifications() {
    this.notificationsApiMockService.pushFakeNotifications(19);
  }

}
