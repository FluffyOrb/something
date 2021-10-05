import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  readonly menuItems: MenuItem[] = [
    { label: 'home', icon: 'fas fa-tachometer-alt', routerLink: 'home' },
    { label: 'faq', icon: 'fas fa-question-circle', routerLink: 'faq' },
  ];

  readonly menuActiveRoute$: Observable<string>;

  sidebarOpen = false;

  constructor(
    private readonly router: Router,
  ) {
    this.menuActiveRoute$ = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(event => event as NavigationEnd),
      map(event => event.urlAfterRedirects.split('/')[1]),
    );
  }

}
