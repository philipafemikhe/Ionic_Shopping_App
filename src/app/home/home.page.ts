import { Component, OnInit } from '@angular/core';
//import { HTTP } from '@ionic-native/http';
import { HTTP } from '@ionic-native/http/ngx';
import { AuthServicesService } from '../services/auth-services.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  billingInfo = [];
  orderDetails = [];

  suppliers=[];
  totalAmountSupplied: number=0;

  constructor(private authService:AuthServicesService) {}


  ngOnInit(): void {
    this.authService.getOrders().subscribe(res => {
      console.log("Home page initialised");
      this.orderDetails = res;
      console.log(this.orderDetails.toString);
    });

    this.authService.getBilling().subscribe(res => {
      this.billingInfo = res;
      console.log(this.billingInfo);
    });
//hand coded array 
    var temp1={'product':'Nivea Body Lotion Cocoa Butter Milk 400ml (8 X 1) - 89156', 'photo':'assets/products/nivea.png', 'amount':1250, 'qty':'10'};
    var temp2={"product":"NNivea Body Lotion Natural Fairness Milk 400ml (8 X 1) - 89156", "photo":"assets/products/nivea2.png", "amount":1100, "qty":"10"};
    this.suppliers.push(temp1);
    this.suppliers.push(temp2);
    this.totalAmountSupplied = temp1.amount + temp2.amount;
    console.log(this.suppliers);
  }

}
