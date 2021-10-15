import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_BASE_URL } from '../../../../core/consts/configuration.consts';
import { FaqItemsResponse } from '../../models/faq.model';

@Injectable({
  providedIn: 'root'
})
export class FaqApiService {

  constructor(
    @Inject(API_BASE_URL) private readonly API: string,
    private readonly httpClient: HttpClient,
  ) {
  }

  getFaqItems(): Observable<FaqItemsResponse> {
    return this.httpClient.get<FaqItemsResponse>(`${this.API}/faq`);
  }

}
