import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Resto } from '../resto';
import { OrderserviceService } from '../services/orderservice.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {

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
  constructor(private rs:OrderserviceService,private route:ActivatedRoute,private router:Router){}

  ngOnInit():void{
    this.route.paramMap.subscribe((parmas)=>{
      let id =Number(parmas.get('id'))
      this.getById(id)
    })
  }

  getById(id:number){
    this.rs.getbyId(id).subscribe((data:any)=>{
      this.RestoRecord= data;
    })
  }

  updateRecords(){
    this.rs.update(this.RestoRecord).subscribe(()=>{
      this.router.navigate(['/']);
    })
  }
}
