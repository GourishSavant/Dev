import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Resto } from '../resto';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class OrderserviceService {

  constructor(private http:HttpClient) { }
 url="http://localhost:3000/order";
  //get all reccords 
  getAll():Observable<Resto>{
    return this.http.get<Resto>("http://localhost:3000/order");
  }
  // Add create
  create(payload:Resto):Observable<Resto>{
    return this.http.post<Resto>("http://localhost:3000/order",payload);
  }

  getbyId(id:number):Observable<Resto>{
    return this.http.get<Resto>(`http://localhost:3000/order/${id}`);
  }
  update(payload:Resto):Observable<Resto>{
    return this.http.put<Resto>(`http://localhost:3000/order/${payload.id}`,payload);
  }

  //  delete Records
   delete(id:number){
    return this.http.delete(`http://localhost:3000/order/${id}`);
  }

  // delete(id:number){
  //   return this.http.delete(`${this.url}/${id}`);
  // }


}
