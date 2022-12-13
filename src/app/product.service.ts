import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  public products:any=[
    {name:'Ravik',price:50,quantity:30,rating:3},
    {name:'Raj',price:100,quantity:40,rating:4},
    {name:'joshna',price:50,quantity:60,rating:5},
    {name:'ajay',price:50,quantity:70,rating:2},
    
  ]

  constructor() { }
}
