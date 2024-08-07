import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalComponents } from '../GlobalComponents';
import { PoProductsList } from '../Models/PoProductsList';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PoproductService {

  base_url = GlobalComponents.base_url;
  app_url = this.base_url+"poprodlist/"
  constructor(private http : HttpClient) { }

  public savePOProducts(poprod : PoProductsList):Observable<PoProductsList>
  {
    return this.http.post<PoProductsList>(`${this.app_url}`,poprod);
  }

  public getPoProductsById(pid : number):Observable<PoProductsList>
  {
   return  this.http.get<PoProductsList>(`${this.app_url}${pid}`);
  }

  public getAllPoProducts():Observable<PoProductsList[]>
  {
    return this.http.get<PoProductsList[]>(`${this.app_url}`)
  }

  public updatePOProducts(poprod : PoProductsList):Observable<PoProductsList>
  {
    return this.http.put<PoProductsList>(`${this.app_url}`,poprod);
  }
}
