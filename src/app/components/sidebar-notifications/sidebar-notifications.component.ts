import { Component } from '@angular/core';
import { NotificationsService } from 'src/app/services/notifications/notifications.service';

@Component({
  selector: 'app-sidebar-notifications',
  templateUrl: './sidebar-notifications.component.html',
  styleUrls: ['./sidebar-notifications.component.scss']
})
export class SidebarNotificationsComponent {

  constructor(
    public notificationsService: NotificationsService,
  ) { }

  onSidebarClose() {
    this.notificationsService.sidebarOpen = false;
  }

  onClearNotification(uid: string) {
    this.notificationsService.clearNotification(uid);
  }

}
