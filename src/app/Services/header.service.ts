import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor() { }
  private  headerVisibleObject = new BehaviorSubject<boolean>(true) // true means header is visible

  headerVisible$ = this.headerVisibleObject.asObservable();

  setHeaderVisibility(isVisible : boolean) {
     this.headerVisibleObject.next(isVisible)

  }
}
