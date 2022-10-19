import { Injectable } from '@angular/core';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { Pill } from './pill.model';

const PILLS_STORAGE_KEY = 'pills';

@Injectable({
  providedIn: 'root',
})
export class PillsService {
  pillConfig = {
    /** In hours*/
    takeFrequencyHours: 8,
  };
  private pillsTaked: Pill[] = [];

  constructor(private localStorageService: LocalStorageService) {
    this.loadPills();
  }

  takePill() {
    const pill: Pill = new Pill(this.pillConfig);
    this.pillsTaked.unshift(pill);
    this.savePills();
  }

  untakeLastPill() {
    this.pillsTaked.shift();
    this.savePills();
  }

  removePill(pill: Pill) {
    this.pillsTaked = this.pillsTaked.filter(
      (actualPill) => actualPill.timestamp !== pill.timestamp
    );

    this.savePills();
  }

  getLastPill() {
    return [...this.pillsTaked].shift() || null;
  }

  getAllPills() {
    return this.pillsTaked;
  }

  savePills() {
    this.localStorageService.setItem(
      PILLS_STORAGE_KEY,
      JSON.stringify(this.pillsTaked)
    );
  }

  private loadPills() {
    const savedPills =
      this.localStorageService.getItem(PILLS_STORAGE_KEY) || '[]';
    this.pillsTaked = ((JSON.parse(savedPills) as Object[]) || []).map(
      (plainPill) => Object.assign(new Pill(), plainPill)
    );
  }
}
