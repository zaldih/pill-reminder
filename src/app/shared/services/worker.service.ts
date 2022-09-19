import { Injectable } from '@angular/core';
@Injectable({ providedIn: 'root' })
export class WorkerService {
  private worker: undefined | Worker;
  constructor() {}
  loadWorker() {
    if (typeof Worker !== 'undefined') {
      this.worker = new Worker(new URL('./app.worker', import.meta.url));
      this.worker.onmessage = ({ data }) => {
        console.log(`page got message: ${data}`);
      };
      this.worker.postMessage('hello');
    } else {
      console.log('Web workers not supported');
    }
  }

  async startPeriodicSync() {
    const status = await navigator.permissions.query({
      name: <any>'periodic-background-sync',
    });
    if (status.state === 'granted') {
      console.log('bg sync granted');
    } else {
      console.log('bg sync NO granted');
    }
  }
}
