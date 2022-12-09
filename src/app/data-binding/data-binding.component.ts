import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {

  public age:number = 20;
  public name:string='Ravi';
  public isIndian:boolean=true;
  public phone:number=888;

  test(){
    alert("submit clicked");
  }
  test2(){
    alert("cancel double clicked");
  
  }
  test3(){
    alert("key pressed");
  }
  test4(){
    alert("no cancel");
  }
    

  


}