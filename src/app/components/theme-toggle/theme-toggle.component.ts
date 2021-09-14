import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-theme-toggle',
  templateUrl: 'theme-toggle.component.html',
  styleUrls: ['theme-toggle.component.scss']
})

export class ThemeToggleComponent implements OnInit {

  isLightModeEnabled!: boolean;

  constructor(private themeService: ThemeService) {
  }

  ngOnInit(): void {
    this.isLightModeEnabled = this.themeService.isLightModeEnabled();
  }

  onToggle(): void {
    this.isLightModeEnabled = !this.isLightModeEnabled;
    this.isLightModeEnabled
      ? this.themeService.enableLightMode()
      : this.themeService.disableLightMode();
  }
}
