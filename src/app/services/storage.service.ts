import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  public setStorage(key: string, value: any): void {
    value = JSON.stringify(value);
    localStorage.setItem(key, value);
  }

  public getStorage<Type>(key: string): Type {
    return JSON.parse(<string>localStorage.getItem(key));
  }
}
