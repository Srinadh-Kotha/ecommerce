import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ecom-cart-item',
  templateUrl: './cart-item.component.html',
  styles: [
  ]
})
export class CartItemComponent implements OnInit {
  @Input() cartItem: any

  constructor() { }

  ngOnInit(): void {
  }

}
