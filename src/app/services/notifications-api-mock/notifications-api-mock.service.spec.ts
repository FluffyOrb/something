import { TestBed } from '@angular/core/testing';

import { NotificationsApiMockService } from './notifications-api-mock.service';

describe('NotificationsApiMockService', () => {
  let service: NotificationsApiMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotificationsApiMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
