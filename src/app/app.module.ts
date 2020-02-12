import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { BoardComponent } from './board/board.component';
import { ProductComponent } from './products/product/product.component';
import { DisplayComponent } from './board/display/display.component';
import { AddmoneyComponent } from './board/addmoney/addmoney.component';
import { ProductBoughtComponent } from './products/product-bought/product-bought.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    BoardComponent,
    ProductComponent,
    DisplayComponent,
    AddmoneyComponent,
    ProductBoughtComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
