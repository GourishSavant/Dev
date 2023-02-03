import { Component,OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { subscribeOn } from 'rxjs';

import { Resto } from '../resto';
import { OrderserviceService } from '../services/orderservice.service';
@Component({
  selector: 'app-view-oderinfo',
  templateUrl: './view-oderinfo.component.html',
  styleUrls: ['./view-oderinfo.component.css']
})

export class ViewOderinfoComponent implements OnInit {
  allResto: Resto[]=[];
  displayedColumns: string[] = ['id', 'OrderNo', 'ContactName', 'OrderDate','ItemsOrdered','OrderTotal','TaxTotal','GrandTotal','action'];
  constructor(private resto:OrderserviceService,public dialog:MatDialog){
  }
  ngOnInit(): void {
    this.getAllResto();
}
getAllResto(){
   this.resto.getAll().subscribe((data:any)=>{
   this.allResto = data;
   console.log(data);
  });
}
// OpenDeleteModel(id:number){
//   const deleteConfm =this.dialog.open(DeleteComponent,{
//     width:'250px',
//     data:{id}
//   });
//   deleteConfm.afterClosed().subscribe((result)=>{
//     if(result){
//       this.allResto=this.allResto.filter((_)=>_.id !==id);
//     }
//   })
// }
OpenDeleteModel(id:any){
  this.resto.delete(id).subscribe((res)=>{
    alert("this is deleted");
    this.getAllResto();
  });
}
}