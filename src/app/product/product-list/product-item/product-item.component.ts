import { Component, OnInit, Input } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Product } from 'src/app/models/product'


@Component({
  selector: 'ecom-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: []
})
export class ProductItemComponent implements OnInit {

  @Input() productItem: Product

  constructor(private msg: AppService) { }

  ngOnInit() {
  }

  handleAddToCart(){
    this.msg.sendMsg(this.productItem)
  }


}
