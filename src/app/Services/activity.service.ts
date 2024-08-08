import { Injectable } from '@angular/core';
import { GlobalComponents } from '../GlobalComponents';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Activities } from '../Models/Activities';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  base_url = GlobalComponents.base_url;
  app_url = this.base_url+"activity/"
  constructor(private http : HttpClient) { }

  public getAllActivities():Observable<Activities[]>
  {
    return this.http.get<Activities[]>(`${this.app_url}`);
  }
}
