import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataCommunicationService {

  private toggleLeftsideBar: BehaviorSubject<any | null> = new BehaviorSubject<any | null>(true);

  constructor() { }

  setSideBarStatus(value: boolean | null): void {
    this.toggleLeftsideBar.next(value);
  }

  getSideBarStatus(): BehaviorSubject<boolean | null> {
    return this.toggleLeftsideBar;
  }
}