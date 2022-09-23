import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { filter } from 'rxjs';
import { PillEditDialogComponent } from '../pill-edit-dialog/pill-edit-dialog.component';

import { PillsService } from '../pills.service';

@Component({
  selector: 'app-pill-last-taken',
  templateUrl: './pill-last-taken.component.html',
  styleUrls: ['./pill-last-taken.component.scss'],
})
export class PillLastTakenComponent implements OnInit {
  timeAgo = '';
  detailsExpanded = false;

  constructor(private pillsService: PillsService, private dialog: MatDialog) {}

  ngOnInit(): void {
    setInterval(() => {
      this.setTimeAgo();
    }, 1000);
  }

  takePill() {
    this.pillsService.takePill();
  }

  get lastPill() {
    return this.pillsService.getLastPill();
  }

  setTimeAgo() {
    if (!this.lastPill) return;
    const z = (n: number) => {
      return (n < 10 ? '0' : '') + n;
    };
    let secs = Math.floor(
      (new Date().getTime() - this.lastPill.timestamp) / 1000
    );
    var sign = secs < 0 ? '-' : '';
    secs = Math.abs(secs);
    this.timeAgo =
      sign +
      ((secs / 3600) | 0) +
      ':' +
      z(((secs % 3600) / 60) | 0) +
      ':' +
      z(secs % 60);
  }

  editComment() {
    const dialogRef = this.dialog.open(PillEditDialogComponent, {
      data: this.lastPill,
    });

    dialogRef.afterClosed().subscribe(() => {
      if (!this.lastPill) return;
      this.pillsService.savePills();
    });
  }
}
