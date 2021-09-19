import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { addItemComponent } from './components/add-item/add-item.component';
import { ThemeToggleComponent } from './components/theme-toggle/theme-toggle.component';
import { BrandingComponent } from './layout/branding/branding.component';
import { HeadingComponent } from './layout/heading/heading.component';
import { PageComponent } from './layout/page/page.component';
import { PanelBodyComponent } from './components/panel-body/panel-body.component';
import { PanelContainerComponent } from './components/panel-container/panel-container.component';
import { PanelHeaderComponent } from './components/panel-header/panel-header.component';
import { PanelComponent } from './components/panel/panel.component';
import { ThemeService } from './services/theme.service';
import { StorageService } from './services/storage.service';
import { HomeComponent } from './views/home/home.component';

@NgModule({
  declarations: [
    HomeComponent,
    AppComponent,
    PageComponent,
    HeadingComponent,
    BrandingComponent,
    ThemeToggleComponent,
    PanelContainerComponent,
    PanelComponent,
    PanelHeaderComponent,
    PanelBodyComponent,
    addItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ThemeService, StorageService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
