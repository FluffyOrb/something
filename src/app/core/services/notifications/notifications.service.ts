import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NotificationResponse } from '../../models/notification-api.model';
import { NotificationsApiMockService } from '../notifications-api-mock/notifications-api-mock.service';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  get notifications(): NotificationResponse[] {
    return this._notifications;
  }

  private _notifications: NotificationResponse[] = [];

  private readonly notifications$: Observable<NotificationResponse>;

  sidebarOpen = false;

  constructor(
    private notificationsApiMockService: NotificationsApiMockService,
  ) {
    this.notifications$ = this.notificationsApiMockService.listenToNotifications();
    this.notifications$.subscribe(value => this.notifications.push(value));
  }

  clearNotification(uid: string) {
    this._notifications = this.notifications.filter(value => value.uid !== uid);
  }

  clearAllNotifications() {
    this._notifications = [];
  }

}
