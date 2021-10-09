import { TestBed } from '@angular/core/testing';

import { FaqApiService } from './faq-api.service';

describe('FaqApiService', () => {
  let service: FaqApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FaqApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
