import { Injectable } from '@angular/core';
import { FaqItemsResponse } from '../../models/faq.model';

@Injectable({
  providedIn: 'root'
})
export class FaqApiMockService {

  getFaqItems(): FaqItemsResponse {
    return {
      items: [
        {
          question: `Why there is a FAQ section in this app?`,
          answer: `You'll find here a quick overview of key features and design decisions regarding this app`,
        },
        {
          question: `What component library was used?`,
          answer: `PrimeNG - it has tons of useful and configurable components and suports theming`,
        },
        {
          question: `What icon library was used?`,
          answer: `Font Awesome - it has tons of pretty icons in many variations`,
        },
        {
          question: `How were themes implemented?`,
          answer: `PrimeNG themes are lazy loaded and combined with custom app theme and color palette`,
        },
        {
          question: `Does this app can be hosted on servers in internal networks without the Internet access?`,
          answer: `Yes, all assets including styles, images and even fonts are self hosted on the server to make sure that this app can run even without Internet access`,
        },
        {
          question: `Is this app just another Angular demo on the Internet?`,
          answer: `Well, yes. I hope it's more interesting than generic "Hello world" app 🙂`,
        },
      ],
    };
  }

}
