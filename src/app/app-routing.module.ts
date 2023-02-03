import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { MakePaymentComponent } from './make-payment/make-payment.component';
import { PaymentInfoComponent } from './payment-info/payment-info.component';
import { PaymentComponent } from './payment/payment.component';
import { ViewOderinfoComponent } from './view-oderinfo/view-oderinfo.component';


const routes: Routes = [
  {path:'',component:ViewOderinfoComponent},
  {path:'makePayment',component:MakePaymentComponent},
  {path:'payment',component:PaymentComponent},
  {path:'paymentInfo',component:PaymentInfoComponent},
  {path:'edit/:id',component:EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
