import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogModule,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  selector: 'app-confirm-dialog',
  standalone: true,
  imports: [CommonModule, TranslocoModule, MatButtonModule, MatDialogModule],
  template: `
    <h1 mat-dialog-title>
      {{ 'pills.import.title_confirmation_modal' | transloco }}
    </h1>
    <div mat-dialog-content>
      <p style="white-space: pre-line">
        {{ 'pills.import.message_confirmation_modal' | transloco }}
      </p>
    </div>
    <div mat-dialog-actions>
      <button mat-button (click)="onCancel()">
        {{ 'pills.import.cancel' | transloco }}
      </button>
      <button mat-button (click)="onConfirm()">
        {{ 'pills.import.confirm' | transloco }}
      </button>
    </div>
  `,
})
export class ConfirmDialogComponent {
  constructor(
    private readonly dialogRef: MatDialogRef<ConfirmDialogComponent>
  ) {}

  onCancel(): void {
    this.dialogRef.close(false);
  }

  onConfirm(): void {
    this.dialogRef.close(true);
  }
}
