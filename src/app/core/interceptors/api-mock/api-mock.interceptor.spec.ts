import { TestBed } from '@angular/core/testing';

import { ApiMockInterceptor } from './api-mock.interceptor';

describe('ApiMockInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ApiMockInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ApiMockInterceptor = TestBed.inject(ApiMockInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
