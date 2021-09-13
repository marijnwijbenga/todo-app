import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DarkmodeService {

  darkMode: boolean = true;

  getDarkModeSetting(): void {
    if (localStorage.getItem('darkMode') && (localStorage.getItem('darkMode') === 'true')) {
      this.enableDarkMode();
      this.darkMode = true;
    } else if (localStorage.getItem('darkMode') === 'false') {
      this.disableDarkMode();
      this.darkMode = false;
    }
  }

  darkModeToggle(): void {
    document.documentElement.classList.toggle('dark');
    this.darkMode = !this.darkMode;
    this.storeDarkModeSetting();
  }

  enableDarkMode(): void {
    document.documentElement.classList.add('dark');
  }

  disableDarkMode(): void {
    document.documentElement.classList.remove('dark');
  }

  storeDarkModeSetting(): void {
    localStorage.setItem('darkMode', String(this.darkMode));
  }

}
