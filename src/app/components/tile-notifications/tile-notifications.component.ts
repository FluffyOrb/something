import { Component, OnInit } from '@angular/core';
import { NotificationsApiMockService } from 'src/app/services/notifications-api-mock/notifications-api-mock.service';

@Component({
  selector: 'app-tile-notifications',
  templateUrl: './tile-notifications.component.html',
  styleUrls: ['./tile-notifications.component.scss']
})
export class TileNotificationsComponent {

  constructor(
    private notificationsApiMockService: NotificationsApiMockService
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
