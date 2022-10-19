import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { NgModule } from '@angular/core';
import { PillAllTakenComponent } from './pill-all-taken/pill-all-taken.component';
import { PillLastTakenComponent } from './pill-last-taken/pill-last-taken.component';
import { PillTakeComponent } from './pill-take/pill-take.component';
import { PillEditDialogComponent } from './pill-edit-dialog/pill-edit-dialog.component';
import { FormsModule } from '@angular/forms';
import { TranslocoModule } from '@ngneat/transloco';

const COMPONENTS = [
  PillLastTakenComponent,
  PillTakeComponent,
  PillAllTakenComponent,
];

@NgModule({
  declarations: [...COMPONENTS, PillEditDialogComponent],
  exports: [...COMPONENTS],
  imports: [CommonModule, TranslocoModule, MaterialModule, FormsModule],
})
export class PillModule {}
