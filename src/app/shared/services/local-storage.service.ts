import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private NAMESPACE = 'pill-reminder-01';

  constructor() {}

  setItem(key: string, data: string) {
    const store = this.getStore();
    store[key] = data;
    localStorage.setItem(this.NAMESPACE, JSON.stringify(store));
  }

  getItem(key: string) {
    const serialized = localStorage.getItem(this.NAMESPACE);
    const data = serialized ? JSON.parse(serialized) : {};
    return data[key];
  }

  removeItem(key: string) {
    const store = this.getStore();
    delete store[key];
    this.setItem(this.NAMESPACE, JSON.stringify(store));
  }

  nuke() {
    localStorage.removeItem(this.NAMESPACE);
  }

  private getStore() {
    const serialized = localStorage.getItem(this.NAMESPACE) || '';
    const store = serialized ? JSON.parse(serialized) : {};
    return store;
  }
}
