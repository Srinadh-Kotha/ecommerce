import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ecom-orders-purchased',
  templateUrl: './orders-purchased.component.html',
  styles: [
  ]
})
export class OrdersPurchasedComponent implements OnInit {

  constructor() { }

  orders =[
    {
      orderId : 1,
      productIds : [
        {
          id:101,
          name : 'shampoo',
          price : 153,
        },
        {
          id:102,
          name : 'perfume',
          price : 150,
        },
        {
          id:103,
          name : 'moisturiser',
          price : 92,
        },
        {
          id:104,
          name : 'face mask',
          price : 190,
        } 
      ],
      order_date : new Date(),
      shipping_adderess : {
          street : 'ramalayam street',
          city : 'nellore',
          state : 'Andhra pradesh',
          pincode : '524004',
          country : 'India'
      }
    },
    {
      orderId : 2,
      productIds : [
        {
          id:101,
          name : 'shampoo',
          price : 153,
        },
        {
          id:102,
          name : 'perfume',
          price : 150,
        },
        {
          id:103,
          name : 'moisturiser',
          price : 92,
        },
        {
          id:104,
          name : 'face mask',
          price : 190,
        },
        {
          id:104,
          name : 'face mask',
          price : 190,
        }  
      ],
      order_date : new Date(),
      shipping_adderess : {
          street : 'ramalayam street',
          city : 'nellore',
          state : 'Andhra pradesh',
          pincode : '524004',
          country : 'India'
      }
    }
  ]
  k=0;
  total_amount(orderid){
    var count = this.orders[orderid].productIds.length;
    let amount=0;
    for(let i=0; i<count; i++){
             
      amount = amount + this.orders[orderid].productIds[i].price;
            
            // console.log(count);
    }
    return amount;
  }


  arr=[];
  counta = this.orders.length-1;

    
  ngOnInit(): void {
    var dolog = () => {
      for(let i=0; i < this.counta; i++){
        this.arr.push(i);
      }
      console.log(this.arr);
    } 
    
  }

  

}
