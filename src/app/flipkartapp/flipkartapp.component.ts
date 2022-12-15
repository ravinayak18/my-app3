import { Component } from '@angular/core';
import { FlipkartappService } from '../flipkartapp.service';

@Component({
  selector: 'app-flipkartapp',
  templateUrl: './flipkartapp.component.html',
  styleUrls: ['./flipkartapp.component.css']
})
export class FlipkartappComponent {
public flipkartapp:any=[];

constructor(private _flipkartappService:FlipkartappService){
  this._flipkartappService.getFlipkartapps().subscribe(
    (data:any)=>{
      this.flipkartapp =data;
    },
    (err:any)=>{
      alert("Internal server error")
    }

  )
}
}
