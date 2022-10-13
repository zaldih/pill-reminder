import { Injectable } from '@angular/core';

type ISidenavMode = 'side' | 'over' | 'push';

@Injectable({
  providedIn: 'root',
})
export class SidenavService {
  opened = false;
  mode: ISidenavMode = 'over';

  constructor() {}

  toggle() {
    this.opened = !this.opened;
    console.log('toggle!');
  }

  open() {
    this.opened = true;
  }

  close() {
    this.opened = false;
  }
}
