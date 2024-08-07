import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vendor } from '../Models/Vendor';
import { GlobalComponents } from '../GlobalComponents';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  constructor(private http : HttpClient) { }

  base_url = GlobalComponents.base_url;
  app_url = this.base_url+"vendor/"

  public saveVendor(vendor : Vendor):Observable<Vendor>
  {
    return this.http.post<Vendor>(`${this.app_url}`,vendor)
  }

  public updateVendor(vendor : Vendor):Observable<Vendor>
  {
    return this.http.put<Vendor>(`${this.app_url}`,vendor)
  }

  public getAllVendors():Observable<Vendor[]>
  {
    return this.http.get<Vendor[]>(`${this.app_url}`)
  }

  public getVendorById(vid : number):Observable<Vendor>
  {
    return this.http.get<Vendor>(`${this.app_url}${vid}`)
  }

}
