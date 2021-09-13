import {NgModule} from '@angular/core';
import {AppRoutingModule} from "./app-routing.module";
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {DarkmodeToggleComponent} from './components/darkmode-toggle/darkmode-toggle.component';
import {BrandingComponent} from './layout/branding/branding.component';
import {HeadingComponent} from './layout/heading/heading.component';
import {PageComponent} from './layout/page/page.component';
import {PanelBodyComponent} from './components/panel-body/panel-body.component';
import {PanelContainerComponent} from './components/panel-container/panel-container.component';
import {PanelHeaderComponent} from './components/panel-header/panel-header.component';
import {PanelComponent} from './components/panel/panel.component';
import { DarkmodeService } from './services/darkmode.service';
import {HomeComponent} from "./views/home/home.component";

@NgModule({
  declarations: [
    HomeComponent,
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
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [DarkmodeService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
