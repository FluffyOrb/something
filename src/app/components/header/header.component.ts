import { Component, OnDestroy } from '@angular/core';
import { fromEvent, Observable, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { MenuService } from 'src/app/services/menu/menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnDestroy {

  private readonly HEADER_SMALL_SCROLL_Y_MIN = 32;

  private readonly kill$ = new Subject();

  readonly headerSmall$: Observable<boolean>;

  constructor(
    public readonly menuService: MenuService,
  ) {
    this.headerSmall$ = fromEvent(window, 'scroll').pipe(
      takeUntil(this.kill$),
      map(() => window.scrollY > this.HEADER_SMALL_SCROLL_Y_MIN),
    );
  }

  ngOnDestroy() {
    this.kill$.next();
  }

  onSidebarMenuOpen() {
    this.menuService.sidebarOpen = true;
  }

  onSidebarNotificationOpen() {
    // todo open notification sidebar
  }

  onSidebarSettingsOpen() {
    // todo settings notification sidebar
  }

}
