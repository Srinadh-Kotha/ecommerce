

import { Component, OnInit } from '@angular/core';

import { Product } from 'src/app/models/product';
import { AppService } from '../app.service';

@Component({
  selector: 'ecom-cart',
  templateUrl: './cart.component.html',
  styleUrls: []
})
export class CartComponent implements OnInit {

  cartItems = [
    // { id: 1, proudctId: 1, productName: 'Test 1', qty: 4, price: 100 },
    // { id: 2, proudctId: 3, productName: 'Test 3', qty: 5, price: 50 },
    // { id: 3, proudctId: 2, productName: 'Test 2', qty: 3, price: 150 },
    // { id: 4, proudctId: 4, productName: 'Test 4', qty: 2, price: 200 },
  ];

  cartTotal = 0

  constructor(private msg: AppService) { }

  ngOnInit() {
    this.msg.getMsg().subscribe((product: Product) => {
      this.addProductToCart(product)
    })
  }

  addProductToCart(product: Product) {

    let productExists = false

    for (let i in this.cartItems) {
      if (this.cartItems[i].productId === product.id) {
        this.cartItems[i].qty++
        productExists = true
        break;
      }
    }

    if (!productExists) {
      this.cartItems.push({
        productId: product.id,
        productName: product.name,
        qty: 1,
        price: product.price
      })
    }
    // if (this.cartItems.length === 0) {
    //   this.cartItems.push({
    //     productId: product.id,
    //     productName: product.name,
    //     qty: 1,
    //     price: product.price
    //   })
    // } else {
    //   for (let i in this.cartItems) {
    //     if (this.cartItems[i].productId === product.id) {
    //       this.cartItems[i].qty++
    //     } else {
    //       this.cartItems.push({
    //         productId: product.id,
    //         productName: product.name,
    //         qty: 1,
    //         price: product.price
    //       })
    //     }
    //   }
    // }

    this.cartTotal = 0
    this.cartItems.forEach(item => {
      this.cartTotal += (item.qty * item.price)
    })
  }

}