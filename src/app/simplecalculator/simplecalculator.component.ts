import { Component } from '@angular/core';

@Component({
  selector: 'app-simplecalculator',
  templateUrl: './simplecalculator.component.html',
  styleUrls: ['./simplecalculator.component.css']
})
export class SimplecalculatorComponent {
firstnum:number=0;
secondnum:number=0;
public answer=0;
setValue(firstnum:string, secondnum:string){
  console.log('Firstnum: ',firstnum)
  console.log('Secondnum: ',secondnum)
  this.answer=Number(firstnum)+Number(secondnum);
}
}
