import { Component, OnInit } from '@angular/core';
import packageInfo from '../../../../package.json';
import { PillsService } from 'src/app/features/pill/pills.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  allPillsVisible = false;
  appVersion = packageInfo.version;

  constructor(private pillsService: PillsService) {}

  ngOnInit(): void {}

  toggleAllPills() {
    this.allPillsVisible = !this.allPillsVisible;
  }

  get somePillTaked(): boolean {
    return !!this.pillsService.getLastPill();
  }

  get lastPillTakenRecently() {
    const lastPill = this.pillsService.getLastPill();
    if (!lastPill) return false;
    return !lastPill.isExpired();
  }
}
