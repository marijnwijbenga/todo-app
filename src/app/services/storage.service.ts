import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  public set(key: string, value: any): void {
    value = JSON.stringify(value);
    localStorage.setItem(key, value);
  }

  public has(key: string): boolean {
    console.log(localStorage.getItem(key));
    return localStorage.getItem(key) !== null;
  }

  public remove(key: string): void {
    localStorage.removeItem(key);
  }
}
