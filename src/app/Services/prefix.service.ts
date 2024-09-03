import { Injectable } from '@angular/core';
import { GlobalComponents } from '../GlobalComponents';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Prefix } from '../Models/Prefix';

@Injectable({
  providedIn: 'root'
})
export class PrefixService {

  base_url = GlobalComponents.base_url;
  app_url = this.base_url+"prefix/"
  constructor(private http : HttpClient) { }

  public getPrefixById(id : number):Observable<Prefix>
  {
    return this.http.get<Prefix>(`${this.app_url}${id}`);
  }

  public updatePrefix(prefix : Prefix):Observable<Prefix>
  {
    return this.http.put<Prefix>(`${this.app_url}`,prefix);
  }
  
  public getAllPrefixes():Observable<Prefix[]> 
  {
    return this.http.get<Prefix[]>(`${this.app_url}`)
  }

}
