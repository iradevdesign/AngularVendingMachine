import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  @Output() selectedProducts = new EventEmitter<{img: string, quantity: number, price: number, code: string}>();
  @Input() products;
  @Input() productBought;
  @Input() productBoughtImg;
  constructor() { }

  ngOnInit(): void {
  }

selectProduct(product: {img: string, quantity: number, price: number, code: string}) {
  this.selectedProducts.emit(product)
}
}

