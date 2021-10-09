import { TestBed } from '@angular/core/testing';

import { FaqApiMockService } from './faq-api-mock.service';

describe('FaqApiMockService', () => {
  let service: FaqApiMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FaqApiMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
