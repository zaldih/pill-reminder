import { Component, OnInit } from '@angular/core';

import { Pill } from '../interface/pill.interface';
import { PillsService } from '../pills.service';

@Component({
  selector: 'app-pill-all-taken',
  templateUrl: './pill-all-taken.component.html',
  styleUrls: ['./pill-all-taken.component.scss'],
})
export class PillAllTakenComponent implements OnInit {
  constructor(private pillsService: PillsService) {}

  ngOnInit(): void {}

  removePill(pill: Pill) {
    this.pillsService.removePill(pill);
  }

  get pills() {
    return this.pillsService.getAllPills();
  }
}
