import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caculator',
  templateUrl: './caculator.component.html',
  styleUrls: ['./caculator.component.scss']
})
export class CaculatorComponent implements OnInit {
  first;
  second;
  operator;
  result;

  constructor() { }

  ngOnInit(): void {
  }
  setFirst(first){
    this.first = first;
  }
  setSecond(second){
    this.second = second;
  }
  setOperator(operator){
    this.operator = operator;
  }
  caculateResult(){
    switch (this.operator) {
      case '+':
        this.result = this.first + this.second;
        break;
      case '-':
        this.result = this.first - this.second;
        break;
      case '*':
        this.result = this.first * this.second;
        break;
      case '/':
        this.result = this.first / this.second;
        break;
    }
  }

}
