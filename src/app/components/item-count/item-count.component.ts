import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-count',
  templateUrl: 'item-count.component.html',
  styleUrls: ['item-count.component.scss']
})
export class ItemCountComponent {
  @Input() itemCount: number = 0;
  @Input() singular: string = '';
  @Input() plural: string = '';

}
