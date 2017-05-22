import { Injectable, ApplicationRef } from '@angular/core';
import { ReplaySubject } from "rxjs";
import { Observable } from "rxjs/Observable";

@Injectable()
export class DnnService {
  private moduleIdSubject: ReplaySubject<number> = new ReplaySubject<number>();
  private servicesFramework: ReplaySubject<any> = new ReplaySubject<any>();
  moduleId: Observable<number>;

  constructor(private appRef: ApplicationRef) {
    this.moduleId = this.moduleIdSubject.asObservable();
    this.moduleIdSubject.next(470);
  }

  ngOnInit() {
    


  }
}
