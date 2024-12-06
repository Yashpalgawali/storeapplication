import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalComponents } from 'src/app/GlobalComponents';
import { Users } from 'src/app/Models/Users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  base_url = GlobalComponents.base_url;
  app_url = this.base_url+"user/"
  constructor(private http : HttpClient) { }

  public updatePassword(user : Users):Observable<string>
  {
    return this.http.put<string>(`${this.app_url}`,user);
  }
}
