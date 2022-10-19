import { Injectable } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class I18nService {
  actualLang = '';

  constructor(
    private translocoService: TranslocoService,
    private localStorageService: LocalStorageService
  ) {
    this.loadLanguage();
  }

  loadLanguage() {
    this.actualLang =
      this.localStorageService.getItem('lang') ||
      this.translocoService.getDefaultLang();
    this.setLanguage(this.actualLang);
  }

  setLanguage(lang: string) {
    this.translocoService.setDefaultLang(lang);
    this.translocoService.setActiveLang(lang);
    this.localStorageService.setItem('lang', lang);
  }
}
