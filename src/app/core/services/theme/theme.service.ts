import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AppTheme } from '../../models/theme.model';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  get theme$(): Observable<AppTheme> {
    return this.themeSubject$.asObservable();
  }

  get theme(): AppTheme {
    return this.themeSubject$.value;
  }

  set theme(value: AppTheme) {
    this.themeSubject$.next(value);
  }

  private readonly LS_KEY_THEME = 'app-theme';
  private readonly THEME_ELEMENT_ID = 'app-theme';
  private readonly DEFAULT_THEME: AppTheme = AppTheme.DarkViolet;

  private themeSubject$: BehaviorSubject<AppTheme>;

  private primeNgThemeMapping: { [key: string]: string; } = {
    [AppTheme.LightBlue]: 'primeng-saga-blue',
    [AppTheme.DarkViolet]: 'primeng-arya-purple',
  };

  constructor() {
    const theme = localStorage.getItem(this.LS_KEY_THEME) as AppTheme;
    this.themeSubject$ = new BehaviorSubject<AppTheme>(theme || this.DEFAULT_THEME);
  }

  init() {
    this.themeSubject$.subscribe(theme => {
      document.body.className = theme;
      this.loadTheme(theme);
      localStorage.setItem(this.LS_KEY_THEME, theme);
    });
  }

  private loadTheme(theme: string) {
    var themeElement = document.getElementById(this.THEME_ELEMENT_ID) as HTMLLinkElement;
    if (!themeElement) {
      themeElement = document.createElement('link');
      document.head.appendChild(themeElement);
      themeElement.id = this.THEME_ELEMENT_ID;
      themeElement.rel = 'stylesheet';
    }
    themeElement.href = `${this.primeNgThemeMapping[theme]}.css`;
  }

}
