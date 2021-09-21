import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskComponent } from './components/task/task.component';
import { ThemeToggleComponent } from './components/theme-toggle/theme-toggle.component';
import { BrandingComponent } from './layout/branding/branding.component';
import { HeadingComponent } from './layout/heading/heading.component';
import { PageComponent } from './layout/page/page.component';
import { PanelBodyComponent } from './components/panel-body/panel-body.component';
import { PanelContainerComponent } from './components/panel-container/panel-container.component';
import { PanelHeaderComponent } from './components/panel-header/panel-header.component';
import { PanelComponent } from './components/panel/panel.component';
import { TaskService } from './services/task.service';
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
    AddTaskComponent,
    TaskComponent,
    TaskListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ThemeService, StorageService, TaskService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
