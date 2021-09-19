import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-item',
  templateUrl: 'add-item.component.html',
  styleUrls: ['add-item.component.scss']
})
export class addItemComponent {

  showSubmitButton: boolean = false;
  showTip: boolean = false;

  @Input() placeholder = '';

  itemTitle: string ='';

  onFocusIn(): void {
    this.showSubmitButton = true;
    this.showTip = true;
  }

  onFocusOut() {
    this.showTip = false;
  }

  saveItem() {
    console.log('daily saved', this.itemTitle);
    this.itemTitle = '';
  }
}
