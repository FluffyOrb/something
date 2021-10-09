import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map, mapTo, shareReplay, startWith } from 'rxjs/operators';
import { FaqItem } from '../../models/faq.model';
import { FaqApiService } from '../../services/faq-api/faq-api.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent {

  readonly faqItems$: Observable<FaqItem[]>;
  readonly loading$: Observable<boolean>;

  readonly faqLoadingItems = new Array(3).fill(0);

  constructor(
    private readonly faqApiService: FaqApiService,
  ) {
    this.faqItems$ = faqApiService.getFaqItems().pipe(
      map(response => response.items),
      shareReplay(),
    );
    this.loading$ = this.faqItems$.pipe(
      mapTo(false),
      startWith(true),
    );
  }

}
