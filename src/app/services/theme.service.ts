import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

const DARK_MODE_CLASS = 'dark';
const LIGHT_MODE_KEY = 'light-mode';

enum Theme {
  Dark, Light
}

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  theme: Theme = Theme.Dark;

  constructor(private storageService: StorageService) {
    if (this.hasLightModeSettingStored()) {
      this.deleteDarkModeClass();
      this.theme = Theme.Light;
    }
  }

  isLightModeEnabled(): boolean {
    return this.theme === Theme.Light;
  }

  enableLightMode(): void {
    this.storageService.set(LIGHT_MODE_KEY, true);
    this.theme = Theme.Light;
    this.deleteDarkModeClass();
  }

  disableLightMode(): void {
    this.storageService.remove(LIGHT_MODE_KEY);
    this.theme = Theme.Dark;
    this.addDarkModeClass();
  }

  private hasLightModeSettingStored(): boolean {
    return this.storageService.has(LIGHT_MODE_KEY);
  }

  private deleteDarkModeClass(): void {
    document.documentElement.classList.remove(DARK_MODE_CLASS);
  }

  private addDarkModeClass(): void {
    document.documentElement.classList.add(DARK_MODE_CLASS);
  }
}
