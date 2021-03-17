import { Component, OnInit } from '@angular/core';

import { AppService } from 'src/app/app.service'
import { Product } from 'src/app/models/product';

@Component({
  selector: 'ecom-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: []
})
export class ProductListComponent implements OnInit {

  productList: Product[] = []

  constructor(private AppService: AppService) { }

  ngOnInit() {
    this.productList = this.AppService.getProducts()
  }

}
