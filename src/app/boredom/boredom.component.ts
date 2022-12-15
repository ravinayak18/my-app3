import { Component } from '@angular/core';
import { BoredomService } from '../boredom.service';

@Component({
  selector: 'app-boredom',
  templateUrl: './boredom.component.html',
  styleUrls: ['./boredom.component.css']
})
export class BoredomComponent {
  public boredoms:any=[];

  constructor(private _boredomService:BoredomService){
    this._boredomService.getBoredom().subscribe(
      (data:any)=>{
        this.boredoms=data;
      },
      (err:any)=>{
        alert("Internal server error");
      }
    )
  }

}
