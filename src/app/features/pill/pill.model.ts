export class Pill {
  timestamp: number;
  name: string;
  /** In milliseconds */
  takeFrequency: number;
  nextTake: number;

  constructor() {
    this.timestamp = new Date().getTime();
    this.name = 'default';
    this.takeFrequency = 28800000; // 8 hours
    this.nextTake = this.timestamp + this.takeFrequency;
  }

  canTakeNext(): boolean {
    return new Date().getTime() > this.nextTake;
  }
}
