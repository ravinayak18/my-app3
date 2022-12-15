import { Component, Directive, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BankaccountsComponent } from './bankaccounts/bankaccounts.component';
import { BoredomComponent } from './boredom/boredom.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirctivesComponent } from './dirctives/dirctives.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { FlipkartappComponent } from './flipkartapp/flipkartapp.component';
import { GpayComponent } from './gpay/gpay.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MailComponent } from './mail/mail.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { VehicleComponent } from './vehicle/vehicle.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent, children:[
    {path : 'home',component:HomeComponent},
    {path:'calculator',component:CalculatorComponent},
    {path:'data-binding',component:DataBindingComponent},
    {path:'dirctive',component:DirctivesComponent},
    {path:'gpay',component:GpayComponent},
    {path:"flipkart",component:FlipkartComponent},
    {path:"vehicle",component:VehicleComponent},
    {path:"bankaccounts",component:BankaccountsComponent},
    {path:"flipkartapp",component:FlipkartappComponent},
    {path:"mail",component:MailComponent},
    {path:"boredom",component:BoredomComponent}
  
  ]},
  {path:"",component:LoginComponent},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
