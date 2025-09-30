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
    window.alert('商品がシェアされました！');
  }
  notify() {
    window.alert('この商品が入荷されたら通知します');
  }
}