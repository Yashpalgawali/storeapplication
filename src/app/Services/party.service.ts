import { Injectable } from '@angular/core';
import { GlobalComponents } from '../GlobalComponents';
import { HttpClient } from '@angular/common/http';
import { Party } from '../Models/Party';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PartyService {

  base_url = GlobalComponents.base_url;
  app_url = this.base_url+"party/"

  constructor(private http : HttpClient) { }
 
  public saveParty(party : Party):Observable<Party>
  {
    return this.http.post<Party>(`${this.app_url}`,party)
  }

  public getAllParties():Observable<Party[]>
  {
    return this.http.get<Party[]>(`${this.app_url}`)
  }

  public getPartyById(id : number):Observable<Party>
  {
    return this.http.get<Party>(`${this.app_url}${id}`)
  }
  
  public updateParty(party : Party):Observable<Party>
  {
    return this.http.put<Party>(`${this.app_url}`,party)
  }
}
