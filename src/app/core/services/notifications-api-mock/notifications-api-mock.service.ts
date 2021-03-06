import { Injectable } from '@angular/core';
import * as faker from 'faker';
import { interval, merge, Observable, Subject } from 'rxjs';
import { map, switchMap, take, delay } from 'rxjs/operators';
import { Level } from 'src/app/core/models/api.model';
import * as uuid from 'uuid';
import { NotificationResponse } from '../../models/notification-api.model';
import { UtilsService } from '../utils/utils.service';

/**
 * Mocks data you would normally retrieve from backend service using e.g. websocket
 * so that the app doesn't require any backend service running
 */
@Injectable({
  providedIn: 'root'
})
export class NotificationsApiMockService {

  private readonly fakeNotificationTrigger$ = new Subject<NotificationResponse>();
  private readonly fakeNotificationsTrigger$ = new Subject<number>();

  constructor(
    private readonly utilsService: UtilsService,
  ) { }

  listenToNotifications(): Observable<NotificationResponse> {
    return merge(
      this.fakeNotificationTrigger$,
      this.fakeNotificationsTrigger$.pipe(
        delay(5000),
        switchMap(value => interval(250).pipe(take(value))),
        map(() => this.createRandomNotification()),
      ),
    );
  }

  pushFakeLowLevelNotification() {
    this.fakeNotificationTrigger$.next({
      uid: uuid.v4(),
      timestamp: new Date(),
      level: 'LOW',
      message: 'Cool!',
      details: `You've got a new notification`
    });
  }

  pushFakeHighLevelNotification() {
    this.fakeNotificationTrigger$.next({
      uid: uuid.v4(),
      timestamp: new Date(),
      level: 'HIGH',
      message: 'Here it is',
      details: 'Your brand new notification. Take it or leave it'
    });
  }

  pushFakeLongNotification() {
    this.fakeNotificationTrigger$.next({
      uid: uuid.v4(),
      timestamp: new Date(),
      level: this.utilsService.getRandomValue<Level>('LOW', 'MEDIUM', 'HIGH'),
      message: faker.lorem.sentence(),
      details: faker.lorem.paragraphs(5),
    });
  }

  pushFakeNotifications(count: number) {
    this.fakeNotificationTrigger$.next({
      uid: uuid.v4(),
      timestamp: new Date(),
      level: 'MEDIUM',
      message: 'Here it goes!',
      details: 'Expect a rain of totally random notifications in less than 5 seconds - you asked for this'
    });
    this.fakeNotificationsTrigger$.next(count);
  }

  private createRandomNotification(level?: Level): NotificationResponse {
    return {
      uid: uuid.v4(),
      timestamp: new Date(),
      level: level || this.utilsService.getRandomValue<Level>('LOW', 'MEDIUM', 'HIGH'),
      message: faker.name.findName(),
      details: faker.commerce.productDescription()
    };
  }

}
