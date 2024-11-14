import { Component, OnInit } from '@angular/core';
import { TranslocoModule, TranslocoService } from '@ngneat/transloco';
import { I18nService } from 'src/app/shared/services/i18n.service';
import { SidenavService } from '../../sidenav.service';
import { PillsService } from '../../pill/pills.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../pill/pill-import-confirm-dialog.component';
import { filter, tap } from 'rxjs';

@Component({
  selector: 'app-sidenav-content',
  templateUrl: './sidenav-content.component.html',
  styleUrls: ['./sidenav-content.component.scss'],
})
export class SidenavContentComponent implements OnInit {
  constructor(
    private readonly sidenavService: SidenavService,
    private readonly i18nService: I18nService,
    private readonly dialog: MatDialog,
    private readonly pillsService: PillsService
  ) {}

  ngOnInit(): void {}

  onLanguageChange() {
    this.i18nService.setLanguage(this.i18nService.actualLang);
  }

  exportData() {
    const data = this.pillsService.exportData();
    const blob = new Blob([data], { type: 'application/json' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'pills.json';
    a.click();
    window.URL.revokeObjectURL(url);
  }

  importData() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent);
    dialogRef
      .afterClosed()
      .pipe(
        filter((result) => !!result),
        tap(() => {
          const input = document.createElement('input');
          input.type = 'file';
          input.accept = '.json';
          input.onchange = (event: Event) => {
            const target = event.target as HTMLInputElement;
            const file = target.files?.[0];
            if (file) {
              const reader = new FileReader();
              reader.onload = (e) => {
                const content = e.target?.result as string;
                this.pillsService.importData(JSON.parse(content));
                window.location.reload();
              };
              reader.readAsText(file);
            }
          };
          input.click();
        })
      )
      .subscribe();
  }

  get languageSelected() {
    return this.i18nService.actualLang;
  }

  set languageSelected(value: string) {
    this.i18nService.actualLang = value;
  }
}
