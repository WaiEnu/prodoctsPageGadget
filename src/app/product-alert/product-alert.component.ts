import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product-alert',
  standalone: false,
  templateUrl: './product-alert.component.html',
  styleUrl: './product-alert.component.css'
})
export class ProductAlertComponent {
  @Input() name: string = '';
  @Output() notify = new EventEmitter();

}
