import { Component, OnInit } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { I18nService } from 'src/app/shared/services/i18n.service';
import { SidenavService } from '../../sidenav.service';

@Component({
  selector: 'app-sidenav-content',
  templateUrl: './sidenav-content.component.html',
  styleUrls: ['./sidenav-content.component.scss'],
})
export class SidenavContentComponent implements OnInit {
  constructor(
    private sidenavService: SidenavService,
    private translocoService: TranslocoService,
    private i18nService: I18nService
  ) {}

  ngOnInit(): void {}

  onLanguageChange() {
    this.i18nService.setLanguage(this.i18nService.actualLang);
  }

  get languageSelected() {
    return this.i18nService.actualLang;
  }

  set languageSelected(value: string) {
    this.i18nService.actualLang = value;
  }
}
