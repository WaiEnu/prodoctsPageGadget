import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './pruduct-list.component.html',
  styleUrls: ['./pruduct-list.component.css']
})
export class ProductListComponent {
  products = [...products];

  share() {
    window.alert('The product has been shared!');
  }
}