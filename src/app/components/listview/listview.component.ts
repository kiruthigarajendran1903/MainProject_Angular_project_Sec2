
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import customers from './myapp/src/assets/cus';
import { DataService } from '../data-service.service';
 
@Component({
  selector: 'app-listview',
  templateUrl: './listview.component.html',
  styleUrls: ['./listview.component.css']
})
export class ListviewComponent  {
  
  /* data:any[]=[];   //by using http client server
  constructor(private dataService:DataService){
    this.dataService.getJsonData().subscribe((res:any) =>{
      this.data=res;
    });
  } */
  Customer:{
    img:String;
    id:Number;
    FirstName:String;
    LastName:String;
    Address:String;
    City:String;
    State:String;
   }[]=customers;
  
}