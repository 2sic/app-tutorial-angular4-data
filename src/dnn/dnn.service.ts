import { Injectable, ApplicationRef, ElementRef } from '@angular/core';
import { ReplaySubject } from "rxjs";
import { Observable } from "rxjs/Observable";

@Injectable()
export class DnnService {
  private moduleIdSubject: ReplaySubject<number> = new ReplaySubject<number>();
  private servicesFramework: ReplaySubject<any> = new ReplaySubject<any>();
  moduleId: Observable<number>;

  public ready: boolean = false;
  constructor() {
    this.moduleId = this.moduleIdSubject.asObservable();
    this.moduleIdSubject.next(470);
  }

  public autoConfigure(element:ElementRef){
    
  }

  ngOnInit() {



  }
}
