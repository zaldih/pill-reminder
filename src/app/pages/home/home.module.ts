import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { NgModule } from '@angular/core';
import { PillModule } from 'src/app/features/pill/pill.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, MaterialModule, PillModule],
  exports: [HomeComponent],
})
export class HomeModule {}
