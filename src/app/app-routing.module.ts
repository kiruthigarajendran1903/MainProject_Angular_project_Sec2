// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';

// const routes: Routes = [];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }

import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './components/wlcome/wlcome.component';
import { CustomerComponent } from './components/customer/customer.component';
import { OrdersComponent } from './components/orders/orders.component';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/login/login.component';
import { CardviewComponent } from './components/cardview/cardview.component';
import { ListviewComponent } from './components/listview/listview.component';
import { NewcustomerComponent } from './components/newcustomer/newcustomer.component';
import { MapviewComponent } from './components/mapview/mapview.component';



const routes: Routes = [
  { path:'',component:WelcomeComponent},
  { path:'customer',component:CustomerComponent,
children:[ 
    {path:'cardview',component:CardviewComponent},
    {path:'listview',component:ListviewComponent},
    {path:'newcustomer',component:NewcustomerComponent},
    {path:'mapview',component:MapviewComponent},
    
]},
  { path:'orders',component:OrdersComponent},
  { path:'about',component:AboutComponent},
  { path:'login',component:LoginComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

