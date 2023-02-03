import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Resto } from '../resto';
import { OrderserviceService } from '../services/orderservice.service';


@Component({
  selector: 'app-make-payment',
  templateUrl: './make-payment.component.html',
  styleUrls: ['./make-payment.component.css']
})
export class MakePaymentComponent implements OnInit {
RestoRecord:Resto={
  id :0,
  OrderNo:"",
  ContactName: "",
  OrderDate: "",
  ItemsOrdered: "",
  OrderTotal: "",
  TaxTotal: "",
  GrandTotal: ""
}
constructor(private rs:OrderserviceService,private router:Router){
}
ngOnInit(): void {}
addRecords(){
  this.rs.create(this.RestoRecord).subscribe((data)=>{
    this.router.navigate(["/"])
  })
}
}
 