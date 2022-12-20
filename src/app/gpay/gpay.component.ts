import { Component } from '@angular/core';
import { BankserviceService } from '../bankservice.service';

@Component({
  selector: 'app-gpay',
  templateUrl: './gpay.component.html',
  styleUrls: ['./gpay.component.css']
})
export class GpayComponent {
  public amount :number=0;
  constructor(private _bankserviceservice:BankserviceService){ 

  }

withdraw(){
  this._bankserviceservice.withdraw(this.amount);
}
deposit(){
  this._bankserviceservice.deposit(this.amount);
}
showbalance(){
  alert(this._bankserviceservice.showbalance());
}
}
