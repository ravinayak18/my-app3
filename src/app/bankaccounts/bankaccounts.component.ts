import { Component } from '@angular/core';
import { BankaccountsService } from '../bankaccounts.service';

@Component({
  selector: 'app-bankaccounts',
  templateUrl: './bankaccounts.component.html',
  styleUrls: ['./bankaccounts.component.css']
})
export class BankaccountsComponent {
public bankaccounts:any=[]
  constructor(private _bankaccounts:BankaccountsService){
    this._bankaccounts.getbankaccounts().subscribe(
      (data:any)=>{
        this._bankaccounts=data;
      }, 
      (err:any)=>{
        alert("Internal service error");
      }

    )
  }

}
