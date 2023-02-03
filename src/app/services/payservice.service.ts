import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Paymentinterface } from '../paymentinterface';


@Injectable({
  providedIn: 'root'
})
export class PayserviceService {

  constructor(private http:HttpClient) { }
   //get all reccords 
   getAllpay():Observable<Paymentinterface>{
    return this.http.get<Paymentinterface>("http://localhost:3000/payment");
  }
  create(payload:Paymentinterface):Observable<Paymentinterface>{
    return this.http.post<Paymentinterface>("http://localhost:3000/payment",payload);
  }
}
