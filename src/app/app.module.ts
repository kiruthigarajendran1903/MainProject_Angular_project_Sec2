// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { WlcomeComponent } from './components/wlcome/wlcome.component';
// import { AboutComponent } from './components/about/about.component';
// import { CardviewComponent } from './components/cardview/cardview.component';
// import { CustomerComponent } from './components/customer/customer.component';
// import { ListviewComponent } from './components/listview/listview.component';
// import { LoginComponent } from './components/login/login.component';
// import { MapviewComponent } from './components/mapview/mapview.component';
// import { NewcustomerComponent } from './components/newcustomer/newcustomer.component';
// import { OrdersComponent } from './components/orders/orders.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     WlcomeComponent,
//     AboutComponent,
//     CardviewComponent,
//     CustomerComponent,
//     ListviewComponent,
//     LoginComponent,
//     MapviewComponent,
//     NewcustomerComponent,
//     OrdersComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/wlcome/wlcome.component';
import { CustomerComponent } from './components/customer/customer.component';
import { OrdersComponent } from './components/orders/orders.component';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/login/login.component';

import { ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './components/filter.pipe';
import { CardviewComponent } from './components/cardview/cardview.component';
import { ListviewComponent } from './components/listview/listview.component';
import { NewcustomerComponent } from './components/newcustomer/newcustomer.component';
import { MapviewComponent } from './components/mapview/mapview.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
   AppComponent,
    WelcomeComponent,
    CustomerComponent,
    OrdersComponent,
    AboutComponent,
    LoginComponent,
    FilterPipe,
    CardviewComponent,
    ListviewComponent,
    NewcustomerComponent,
    MapviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
