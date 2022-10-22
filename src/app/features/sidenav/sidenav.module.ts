import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavContentComponent } from './sidenav-content/sidenav-content.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { TranslocoModule } from '@ngneat/transloco';

@NgModule({
  declarations: [SidenavContentComponent],
  imports: [CommonModule, TranslocoModule, MaterialModule],
  exports: [SidenavContentComponent],
})
export class SidenavModule {}
