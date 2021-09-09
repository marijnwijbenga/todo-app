import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DarkmodeToggleComponent } from './components/darkmode-toggle/darkmode-toggle.component';
import { BrandingComponent } from './layout/branding/branding.component';
import { HeadingComponent } from './layout/heading/heading.component';
import { PageComponent } from './layout/page/page.component';
import { PanelBodyComponent } from './layout/panel/panel-body/panel-body.component';
import { PanelContainerComponent } from './layout/panel-container/panel-container.component';
import { PanelHeaderComponent } from './layout/panel/panel-header/panel-header.component';
import { PanelComponent } from './layout/panel/panel.component';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    HeadingComponent,
    BrandingComponent,
    DarkmodeToggleComponent,
    PanelContainerComponent,
    PanelComponent,
    PanelHeaderComponent,
    PanelBodyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
