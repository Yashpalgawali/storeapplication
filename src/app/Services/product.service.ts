import { Injectable } from '@angular/core';
import { GlobalComponents } from '../GlobalComponents';
import { Product } from '../Models/Product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  base_url = GlobalComponents.base_url;
  app_url = this.base_url+"product/"
  constructor(private http : HttpClient) { }

  public saveProduct(product : Product)
  {
    return this.http.post(`${this.app_url}`,product);
  }
  public getAllProducts():Observable<Product[]>
  {
    return this.http.get<Product[]>(`${this.app_url}`);
  }
  public getProductById(pid : number):Observable<Product>
  {
    return this.http.get<Product>(`${this.app_url}${pid}`);
  }

  public updateProduct(prod : Product):Observable<Product>
  {
    return this.http.put<Product>(`${this.app_url}`,prod);
  }

}
