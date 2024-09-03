import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalComponents } from '../GlobalComponents';
import { Observable } from 'rxjs';
import { Docket } from '../Models/Docket';

@Injectable({
  providedIn: 'root'
})
export class DocketService {

  base_url = GlobalComponents.base_url;
  app_url = this.base_url+"docket/"

  constructor(private http : HttpClient) { }

  public saveDocket(docket : Docket):Observable<Docket>
  {
    return this.http.post<Docket>(`${this.app_url}`,docket)
  }

  public getAllDockets():Observable<Docket[]> 
  {
    return this.http.get<Docket[]>(`${this.app_url}`)
  }

  public getDocketById(id :number):Observable<Docket>
  {
    return this.http.get<Docket>(`${this.app_url}${id}`)
  }

  public updateDocket(docket : Docket):Observable<Docket>
  {
    return this.http.put<Docket>(`${this.app_url}`,docket)
  }
  
}
