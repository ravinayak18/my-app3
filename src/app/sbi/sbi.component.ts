import { Component } from '@angular/core';
import { BankserviceService } from '../bankservice.service';

@Component({
  selector: 'app-sbi',
  templateUrl: './sbi.component.html',
  styleUrls: ['./sbi.component.css']
})
export class SbiComponent {
public sbis :any=[];
public term :string="";
constructor(private _bankService:BankserviceService){
  this._bankService.getSbi().subscribe(
    (data:any)=>{
      this.sbis=data;
    },
    (eer:any)=>{
      alert("Internal service error");
    }

  )
}
filter(){
  this._bankService.getSbi().subscribe(
    (data:any)=>{
      alert("data success")
    },
    (err:any)=>{
      alert("Internal service error")
    },
  )
  
}

delete(){
  this._bankService.getSbi().subscribe(
    (data:any)=>{
      alert("deleted succefully")
      location.reload();
      
    },
  
  )
}

}
