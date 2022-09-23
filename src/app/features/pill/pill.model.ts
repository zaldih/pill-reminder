export class Pill {
  timestamp: number;
  name: string;
  /** In milliseconds */
  takeFrequency: number;
  nextTake: number;
  comment: string;

  constructor(config = { takeFrequencyHours: 8 }) {
    this.timestamp = new Date().getTime();
    this.name = 'default';
    this.takeFrequency = config.takeFrequencyHours * 60 * 60 * 1000; // Default 8 hours
    this.nextTake = this.timestamp + this.takeFrequency;
    this.comment = '';
  }

  canTakeNext(): boolean {
    return new Date().getTime() > this.nextTake;
  }
}
