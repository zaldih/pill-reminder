import { Component, OnInit } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { SidenavService } from '../../sidenav.service';

@Component({
  selector: 'app-sidenav-content',
  templateUrl: './sidenav-content.component.html',
  styleUrls: ['./sidenav-content.component.scss'],
})
export class SidenavContentComponent implements OnInit {
  languageSelected = this.translocoService.getDefaultLang();

  constructor(
    private sidenavService: SidenavService,
    private translocoService: TranslocoService
  ) {}

  ngOnInit(): void {}

  onLanguageChange() {
    this.translocoService.setDefaultLang(this.languageSelected);
    this.translocoService.setActiveLang(this.languageSelected);
  }
}
