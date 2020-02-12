import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
 @Output() selectedMoney = new EventEmitter<number>()
 @Input() addMoney: number;
 @Input() ballance: number;
 @Input() code: string;
 @Input() addMoneyWarning: string;
  
  selectMoney(money:number) {
    this.selectedMoney.emit(money)
  }
  constructor() { }

  ngOnInit(): void {
  }


}
