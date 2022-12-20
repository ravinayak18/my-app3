import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BankserviceService {
  public balance:number=1000;

  constructor(private _httpClient:HttpClient) { }

  withdraw(amount:number){
    this.balance=this.balance-amount;
  }
  deposit(amount:number){
    this.balance=this.balance+amount;
  }
  showbalance(){
    return this.balance;
  }
  getSbi():Observable<any>{
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals")
  }
  getFiltersbi(term:any):Observable<any>{
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals?filter="+term);
  }
  getdeleteSbi(id:string):Observable<any>{
    return this._httpClient.delete("https://6128991386a213001729f9df.mockapi.io/test/v1/principals/"+id);
  }

}
