import { Component } from '@angular/core';

@Component({
  selector: 'app-dirctives',
  templateUrl: './dirctives.component.html',
  styleUrls: ['./dirctives.component.css']
})
export class DirctivesComponent {
  public names:string[]=['ravi','raju','anil','bharth']
  public states:string[]=["tel","ap","HP"]

  public users:any=[
    {name:'anil',age:20,package:10},
    {name: 'ravi',age:22,package:12},
    {name:'raj',age: 23,package:13},
    {name:'raju',age:24,package:14},
    {name:'raju',age:15,package:24},
    {name:'raju',age:16,package:30}
  ]
  
  

  public time:number = 15;
  public today:any=new Date();

}


