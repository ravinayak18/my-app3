import { Component } from '@angular/core';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent {

  public vehicles:any=[];
  public term:string="";
  constructor(private _vehicleService:VehicleService){
    this._vehicleService.getVehicles().subscribe(
      (data:any)=>{
        this.vehicles=data;
      },
      (err:any)=>{
        alert("internal servicr error");
      }
    )
  } 

  filter(){
    
    this._vehicleService.getFilterdVehicle(this.term).subscribe(
      (data:any)=>{
        this.vehicles=data;
      },
      (err:any)=>{
        alert("internal servicr error");
      }
    )


  }

  public column :string=""
  public order :string=""
  
  sort(){
    
    this._vehicleService.getsortedVehicle(this.column, this.order).subscribe(
      (data:any)=>{
        this.vehicles=data;
      },
      (err:any)=>{
        alert("internal servicr error");
      }
    )


  }
  
page(page:number){
  this._vehicleService.getpagedVehicle(page).subscribe(
    (data:any)=>{
      this.vehicles = data;
    },
    (err:any)=>{
      alert("internal servicr error");
    }
  )
}
delete(id:string){
  this._vehicleService.getdeleteVehicle(id).subscribe(
    (data:any)=>{
      alert("deleted succesfully");
      location.reload();
    },
    (err:any)=>{
      alert("internal servicr error");
    }
  )
}
} 