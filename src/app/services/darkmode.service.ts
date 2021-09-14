import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})

export class DarkmodeService {
  constructor(private storageService: StorageService) {}

  getDarkMode(): boolean {
    return this.storageService.getStorage('darkMode');
  }

  setDarkMode(darkMode: boolean): void {
    switch (darkMode) {
      case true:
        document.documentElement.classList.add('dark');
        break;
      case false:
        document.documentElement.classList.remove('dark');
        break;
    }
  }

  storeDarkMode(darkMode: boolean):void {
      this.storageService.setStorage('darkMode', darkMode)
  }

}
