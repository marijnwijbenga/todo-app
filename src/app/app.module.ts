import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ItemCountComponent } from './components/item-count/item-count.component';
import { ModalCancelButtonComponent } from './components/modal/modal-cancel-button/modal-cancel-button.component';
import { ModalDeleteButtonComponent } from './components/modal/modal-delete-button/modal-delete-button.component';
import { ModalImportantButtonComponent } from './components/modal/modal-important-button/modal-important-button.component';
import { ModalInputComponent } from './components/modal/modal-input/modal-input.component';
import { ModalSaveButtonComponent } from './components/modal/modal-save-button/modal-save-button.component';
import { ModalComponent } from './components/modal/modal.component';
import { AddTaskComponent } from './components/tasks/add-task/add-task.component';
import { FilterTasksComponent } from './components/tasks/filter-tasks/filter-tasks.component';
import { TaskListComponent } from './components/tasks/task-list/task-list.component';
import { TaskComponent } from './components/tasks/task/task.component';
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
    TaskListComponent,
    ItemCountComponent,
    FilterTasksComponent,
    ModalComponent,
    ModalInputComponent,
    ModalImportantButtonComponent,
    ModalCancelButtonComponent,
    ModalSaveButtonComponent,
    ModalDeleteButtonComponent
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
