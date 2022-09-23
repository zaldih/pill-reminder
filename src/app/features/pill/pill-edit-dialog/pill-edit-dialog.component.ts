import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-pill-edit-dialog',
  templateUrl: './pill-edit-dialog.component.html',
  styleUrls: ['./pill-edit-dialog.component.scss'],
})
export class PillEditDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<PillEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { comment: string }
  ) {}

  ngOnInit(): void {}

  close() {
    this.dialogRef.close();
  }
}
