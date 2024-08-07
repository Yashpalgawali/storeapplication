import { Injectable } from '@angular/core';
import { GlobalComponents } from '../GlobalComponents';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../Models/Customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  base_url = GlobalComponents.base_url;
  app_url = this.base_url+"customer/"
  constructor(private http : HttpClient) { }
  
  public saveCustomer(customer : Customer):Observable<Customer>
  {
   return  this.http.post<Customer>(`${this.app_url}`,customer)
  }

  public getAllCustomers():Observable<Customer[]>
  {
    return this.http.get<Customer[]>(`${this.app_url}`)
  }
  public getCustomerById(cid : number):Observable<Customer>
  {
     return this.http.get<Customer>(`${this.app_url}${cid}`)
  }

  public updateCustomer(customer : Customer):Observable<Customer>
  {
    return this.http.put<Customer>(`${this.app_url}`,customer)
  }
}