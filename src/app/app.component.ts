import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularVendingMachine';
  products = [
    {img: "/assets/images_pack/svg/001-beer.svg", quantity: 5, price: 2, code: "1"},
    {img: "/assets/images_pack/svg/002-beer-1.svg", quantity: 8, price: 3, code: "2"},
    {img: "/assets/images_pack/svg/003-beer-2.svg", quantity: 9, price: 4, code: "3"},
    {img: "/assets/images_pack/svg/004-bottle.svg", quantity: 1, price: 2, code: "4"},
    {img: "/assets/images_pack/svg/005-bottle-1.svg", quantity: 2, price: 3, code: "5"},
    {img: "/assets/images_pack/svg/006-bottle-2.svg", quantity: 9, price: 4, code: "6"},
    {img: "/assets/images_pack/svg/010-cocktail-1.svg", quantity: 4, price: 2, code: "7"},
    {img: "/assets/images_pack/svg/011-cocktail-2.svg", quantity: 3, price: 3, code: "8"},
    {img: "/assets/images_pack/svg/012-cocktail-3.svg", quantity: 6, price: 4, code: "9"}
  ]
  addMoney = [5, 10];
  ballance:number = 0;
  code:string;
  productBought:string;
  addMoneyWarning:string;
  productBoughtImg: string;
  selectProduct(product: {img: string, quantity: number, price: number, code: string}) {
    if(product.price > this.ballance) {
      this.addMoneyWarning = 'Please add money!';
    } else {
      this.ballance = this.ballance - product.price;
      product.quantity -= 1;
      this.productBought = ' with code ' + product.code + ' was bought!';
      this.productBoughtImg = product.img;
      setTimeout(() => {
        this.productBought = '';
        this.productBoughtImg = '';
      },2000);
    }
  }
  selectMoney(money: number) {
    this.ballance += money;
    this.addMoneyWarning = '';
  }
}
