import { Component ,OnInit} from '@angular/core';
import { Paymentinterface } from '../paymentinterface';
import { PayserviceService } from '../services/payservice.service';

@Component({
  selector: 'app-payment-info',
  templateUrl: './payment-info.component.html',
  styleUrls: ['./payment-info.component.css']
})
export class PaymentInfoComponent implements OnInit{
  allPayment:Paymentinterface[]=[];
  displayedColumns: string[] = ['id','CardNo','ContactName', 'EMY','CVV' ,'OrderNo'];
  constructor(private pay:PayserviceService){
  }
  ngOnInit(): void {
    this.getAllP();
  }
  getAllP(){
    this.pay.getAllpay().subscribe((data:any)=>{
     this.allPayment= data;
     console.log(data);
  })
}
}
