import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, delay, map, switchMap, tap } from 'rxjs/operators';
import { API_BASE_URL } from '../../consts/configuration.consts';
import { UtilsService } from '../../services/utils/utils.service';
import { FaqApiMockService } from './../../../modules/faq/services/faq-api-mock/faq-api-mock.service';

interface MockRoute {
  url: string;
  method: string;
  handler: (body: any) => any;
}

/**
 * Intercepts http request, simulates response delay and mocks response using api mock services
 * so that the app doesn't require any backend service running.
 * You won't see any http requests in the "Network" section of browser dev tools.
 * Instead, in the "Console" section you'll see the information that your request was handled by this interceptor
 */
@Injectable()
export class ApiMockInterceptor implements HttpInterceptor {

  private readonly routes: MockRoute[] = [
    { url: `${this.API}/faq`, method: 'GET', handler: () => this.faqApiMockService.getFaqItems() },
  ];

  constructor(
    @Inject(API_BASE_URL) private readonly API: string,
    private readonly faqApiMockService: FaqApiMockService,
    private readonly utilsService: UtilsService,
  ) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const route = this.routes.find(value => value.url === request.url && value.method === request.method);
    const mockResponse = route?.handler(request?.body);
    if (mockResponse) {
      return of(mockResponse).pipe(
        switchMap(response =>
          of(response).pipe(delay(this.utilsService.getRandomNumber(15, 300)))
        ),
        map(response =>
          new HttpResponse({ status: 200, body: response })
        ),
        catchError(() =>
          of(new HttpResponse({ status: 400, body: 'Invalid request' }))
        ),
        tap(response =>
          console.log(`${request.method} ${request.url}: This request was handled by api mock interceptor`, { request, response })
        ),
      );
    }
    return next.handle(request);
  }

}
