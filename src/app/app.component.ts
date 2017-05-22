import { Component, Inject, ApplicationRef, ElementRef, Injector } from '@angular/core';
import { sxcInstance } from "tosic/sxc/sxcInstance";
import { SxcNg } from "tosic/sxc/$2sxc";


@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <p>moduleId (async pipe): {{sxcNg.moduleId | async}}</p>
    <p>moduleId (subscription): {{modId}}</p>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  modId: number;

  constructor(private appRef: ApplicationRef, private el:ElementRef, private injector: Injector,
    public sxcNg: SxcNg, /*, private sxcInstance: sxcInstance,*/
  ) {
    sxcNg.autoConfigure(el);
    sxcNg.moduleId
      .subscribe((id: number) => this.modId = id);
  }

  ngOnInit(){
    // let's try stuff...
  }
  title = 'Hello Angular 4 Data on DNN! Let\'s load!';
}
