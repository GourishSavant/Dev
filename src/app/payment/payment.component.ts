import { Component,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Paymentinterface } from '../paymentinterface';
import { PayserviceService } from '../services/payservice.service';
import { FormBuilder, FormControl,FormGroup, Validators} from '@angular/forms';
import { group } from '@angular/animations';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent  implements OnInit{
  registerForm!:FormGroup
  submitted =false;
  
  paymentRec:Paymentinterface={
    id: 0,
    CardNo: "",
    ContactName: "",
    EMY: "",
    CVV: "",
    OrderNo: "",
  }
constructor(private sr:PayserviceService,private router:Router,private formBuilder:FormBuilder){

}
ngOnInit(): void {
  this.getDate();


  //validation
  this.registerForm = this.formBuilder.group({
    ccn:['',Validators.required]
  })
}

onSubmit(){
  this.submitted=true
  if(this.registerForm.invalid){
    return
  }
  alert('Success');
}
minDate:any ="2023-01-24";

getDate(){
  var date:any= new Date();
  var toDate = date.getDate()
  if(toDate<10){
    toDate="0" +toDate
  }
  var month:any= date.getMonth()+1;
  if(month<10){
    month="0" + month
  }
  var year =date.getFullYear();
  this.minDate = year+ "-"+ month+"-"+toDate
  console.log(this.minDate)
}
addPaymentRecords(){
  this.sr.create(this.paymentRec).subscribe((data)=>{
    this.router.navigate(["/"])
  })  
  }
}
