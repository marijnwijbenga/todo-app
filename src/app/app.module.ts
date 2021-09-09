import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeadingComponent } from './layout/heading/heading.component';
import { PageComponent } from './layout/page/page.component';
import { PanelContainerComponent } from './layout/panel-container/panel-container.component';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    HeadingComponent,
    PanelContainerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
