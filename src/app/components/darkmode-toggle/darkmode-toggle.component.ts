import { Component, OnInit } from '@angular/core';
import { DarkmodeService } from '../../services/darkmode.service';

@Component({
  selector: 'app-darkmode-toggle',
  templateUrl: 'darkmode-toggle.component.html',
  styleUrls: ['darkmode-toggle.component.scss']
})

export class DarkmodeToggleComponent implements OnInit {
  constructor(private darkModeService: DarkmodeService) {
  }

  darkMode: boolean = true;

  ngOnInit(): void {
    this.setDarkMode();
  }

  getDarkMode(): boolean {
    return this.darkModeService.getDarkMode();
  }

  setDarkMode() {
    this.darkMode = this.getDarkMode();
    this.darkModeService.setDarkMode(this.darkMode);
  }

  toggleDarkMode(): void {
    this.darkMode = !this.darkMode;
    this.darkModeService.setDarkMode(this.darkMode);
    this.darkModeService.storeDarkMode(this.darkMode);
  }
}
