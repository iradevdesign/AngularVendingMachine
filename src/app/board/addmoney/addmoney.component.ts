import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-addmoney',
  templateUrl: './addmoney.component.html',
  styleUrls: ['./addmoney.component.css']
})
export class AddmoneyComponent implements OnInit {
  @Input() money;
  @Output() selectedMoney = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  selectMoney(money:number) {
    this.selectedMoney.emit(money);
  }

}
