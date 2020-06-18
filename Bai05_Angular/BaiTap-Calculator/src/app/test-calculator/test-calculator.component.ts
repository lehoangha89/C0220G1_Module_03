import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-test-calculator',
  templateUrl: './test-calculator.component.html',
  styleUrls: ['./test-calculator.component.css']
})
export class TestCalculatorComponent implements OnInit {
  firstNumber: number;
  secondNumber: number;
  operator = '+';
  ketqua: any;

  changeFirstNumber(value) {
    this.firstNumber = Number(value);
  }

  changeSecondNumber(value) {
    this.secondNumber = Number(value);
  }

  changeOperator(value) {
    this.operator = (value);
  }

  calculate() {
    switch (this.operator) {
      case ('+'):
        this.ketqua = this.firstNumber + this.secondNumber;
        break;
      case ('-'):
        this.ketqua = this.firstNumber - this.secondNumber;
        break;
      case ('*'):
        this.ketqua = this.firstNumber * this.secondNumber;
        break;
      case ('/'):
        if (this.secondNumber === 0) {
          this.ketqua = 'khong the chia cho 0';
        } else {
          this.ketqua = this.firstNumber / this.secondNumber;
        }
        break;
    }
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
