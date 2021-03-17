import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  products: Product[] = [
    new Product(1, 'Galaxy M31', 'All specifications and descriptions provid may be from the actual specifications and descriptions for the product', 10000,'https://m.media-amazon.com/images/I/31fca8gVtzL._AC_SR160,160_.jpg'),
    new Product(2, 'I KALL K6 Smartphone', 'Box also includes: Power adapter, USB cable, SIM eject tool, Warranty card, User guide, Clear soft case', 51000,'https://m.media-amazon.com/images/I/41nCFSt21SL._AC_SR160,160_.jpg'),
    new Product(3, 'Redmi 9A', 'Android v10 operating system with upto 2.0GHz clock speed Mediatek Helio G25 octa core processor', 7499,'https://images-eu.ssl-images-amazon.com/images/I/61gxiF2l1XL._AC_UL160_SR160,160_.jpg'),
    new Product(4, 'Redmi 9 Prime', 'Android v10 operating system with 2.0 GHz Mediatek Helio G80 octa core processo', 8070,'https://m.media-amazon.com/images/I/41WIO-TGy9L._AC_SR160,160_.jpg'),
    new Product(5, 'Oppo A31', '4230mAH lithium-polymer battery providing talk-time of 45 hours and standby time of 450 hours', 11900,'https://m.media-amazon.com/images/I/41OBf52bnOL._AC_SR160,160_.jpg'),
    new Product(6, 'Samsung Galaxy M01', 'Android GO | v10.0 operating system with 1.5GHz+2GHz MediaTek | MT6739WW quad core processor', 6150,'https://m.media-amazon.com/images/I/41cVLRT2gyL._AC_SR160,160_.jpg'),
    new Product(7, 'Panasonic Eluga I6 ', 'Android Pie v9.0 Operating System with 1.5 GHz | 3000mAh Battery | OTG Compatible', 5550,'https://m.media-amazon.com/images/I/51KZ+jLjAzL._AC_SR160,160_.jpg'),
    new Product(8, 'iPhone 11  ', 'Corning Gorilla Glass 3 protection – the first phone in the sub 6k range to offer a Gorilla Glass protection', 4999,'https://images-eu.ssl-images-amazon.com/images/I/61p3owTiQBL._AC_UL270_SR270,270_.jpg'),
    new Product(8, ' iPhone 11 Pro', 'Hybrid technology that is made of a TPU bumper with a durable PC back', 95999,'https://m.media-amazon.com/images/I/41oUkh+KC3L._AC_SR160,160_.jpg'),
  ]

  subject = new Subject()

  constructor() { }

  getProducts(): Product[] {
    //TODO: Populate products from an API and return an Observable
    return this.products
  }
  sendMsg(product){
    console.log(product)
    this.subject.next(product)
  }
  getMsg(){
    return this.subject.asObservable()
  }
}
