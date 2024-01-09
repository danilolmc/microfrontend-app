import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class LocalStorageService implements Omit<Storage, 'name' | 'length' | 'key'>{

  private localStorage: Storage = {} as Storage;

  constructor() {
    this.localStorage = window.localStorage
  }

  clear() {
    this.localStorage.clear();
  }
  getItem(key: string): string | null {
    return this.localStorage.getItem(key);
  }

  removeItem(key: string): void {
    this.localStorage.removeItem(key)
  }
  setItem(key: string, value: string): void {
    this.localStorage.setItem(key, value)
  }
}
