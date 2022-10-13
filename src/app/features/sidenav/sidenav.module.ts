import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavContentComponent } from './sidenav-content/sidenav-content.component';
import { MaterialModule } from 'src/app/shared/material/material.module';

@NgModule({
  declarations: [SidenavContentComponent],
  imports: [CommonModule, MaterialModule],
  exports: [SidenavContentComponent],
})
export class SidenavModule {}
