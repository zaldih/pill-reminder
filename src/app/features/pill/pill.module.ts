import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { NgModule } from '@angular/core';
import { PillAllTakenComponent } from './pill-all-taken/pill-all-taken.component';
import { PillLastTakenComponent } from './pill-last-taken/pill-last-taken.component';
import { PillTakeComponent } from './pill-take/pill-take.component';

const COMPONENTS = [
  PillLastTakenComponent,
  PillTakeComponent,
  PillAllTakenComponent,
];

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [CommonModule, MaterialModule],
})
export class PillModule {}
