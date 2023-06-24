import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularCalc';

  calValue: number = 0;

  funcT: any = '\u200B';
  calNum: string = 'noValue';

  FirstOperand: number = NaN;
  secondOperand: number = NaN;

  onClickValue(val:string, type: any){
    if(type == 'num'){
      this.onNumberClick(val);
    }else if(type == 'func'){
      this.onFuncClick(val);
    }

  }
  onNumberClick(val:string){
     if(this.calNum != 'noValue'){
      this.calNum = this.calNum + val;
     }else{
      this.calNum = val;
     }

     this.calValue = (parseFloat(this.calNum));
     //this.calValue.toFixed(0);
  }
  onFuncClick(val:string){
    if(val == 'C'){
      this.clearFunc();
    }else if(this.funcT == '\u200B' && val != '='){
      this.FirstOperand = this.calValue;
      this.calValue = 0;
      this.calNum = 'noValue';
      this.funcT = val;
    }else if(this.funcT != '\u200B'){
      this.secondOperand = this.calValue;
      this.valueCalculate(val);
    }
  }
  valueCalculate(val:string){
    if(this.funcT == '+'){
      const Result = this.FirstOperand + this.secondOperand;
      this.resultAssignValues(Result,val);
      if(val == '=') this.onEqualPress();
    }else if(this.funcT == '-'){
      const Result = this.FirstOperand - this.secondOperand;
      this.resultAssignValues(Result,val);
      if(val == '=') this.onEqualPress();
    }else if(this.funcT == '/'){
      const Result = this.FirstOperand / this.secondOperand;
      this.resultAssignValues(Result,val);
      if(val == '=') this.onEqualPress();
    }else if(this.funcT == 'x'){
      const Result = this.FirstOperand * this.secondOperand;
      this.resultAssignValues(Result,val);
      if(val == '=') this.onEqualPress();
    }else if(this.funcT == '%'){
      this.secondOperand = this.secondOperand/100;
      const Result = this.FirstOperand * this.secondOperand/100;
      this.resultAssignValues(Result,val);
      if(val == '=') this.onEqualPress();
    }
  }
  resultAssignValues(Result: number, val: string){
    this.FirstOperand = Result;
    this.secondOperand = NaN;
    this.calNum = 'noValue';
    this.funcT = val;
    this.calValue = Result;
  }
  onEqualPress(){
    this.FirstOperand = NaN;
    this.secondOperand = NaN;
    this.funcT = '\u200B';
    this.calNum = 'noValue';
  }
  clearFunc(){
    this.FirstOperand = NaN;
    this.secondOperand = NaN;
    this.calValue = 0;
    this.calNum = 'noValue';
    this.funcT = '\u200B';
    
  }

}
