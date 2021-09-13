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

  ngOnInit():void {
    this.darkModeService.getDarkModeSetting();
  }

  toggleDarkMode(): void {
    this.darkModeService.darkModeToggle();
  }
}
