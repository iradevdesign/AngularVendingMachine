import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product;
  @Output() selectedProduct = new EventEmitter<{img: string, quantity: number, price: number, code: string, outOfStock: boolean}>();
  constructor() { }

  ngOnInit(): void {
  }

  selectProduct(product:{img: string, quantity: number, price: number, code: string, outOfStock: boolean}) {
    this.selectedProduct.emit(product)
  }

}
