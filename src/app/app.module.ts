import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './product/shared/header/header.component';
import { FooterComponent } from './product/shared/footer/footer.component';
import { NavComponent } from './product/shared/nav/nav.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { Product } from './models/product';
import { ProductItemComponent } from './product/product-list/product-item/product-item.component';

import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from './cart/cart-item/cart-item.component';
import { OrdersPurchasedComponent } from './orders-purchased/orders-purchased.component';
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    ProductListComponent,
    ProductItemComponent,
    
    CartComponent,
    
    CartItemComponent,
    
    OrdersPurchasedComponent,
    
 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
