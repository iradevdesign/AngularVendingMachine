import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-bought',
  templateUrl: './product-bought.component.html',
  styleUrls: ['./product-bought.component.css']
})
export class ProductBoughtComponent implements OnInit {
  @Input() productBought: string;
  @Input() productBoughtImg:string;
  constructor() { }

  ngOnInit(): void {
  }

}
