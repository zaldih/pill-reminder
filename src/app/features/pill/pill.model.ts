export class Pill {
  timestamp: number;
  name: string;
  /** In milliseconds */
  takeFrequency: number;
  nextTake: number;
  comment: string;

  constructor() {
    this.timestamp = new Date().getTime();
    this.name = 'default';
    this.takeFrequency = 28800000; // 8 hours
    this.nextTake = this.timestamp + this.takeFrequency;
    this.comment = '';
  }

  canTakeNext(): boolean {
    return new Date().getTime() > this.nextTake;
  }
}
