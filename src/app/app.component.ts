import { Component, Inject, ApplicationRef, ElementRef, Injector } from '@angular/core';
import { sxcInstance } from "tosic/sxc/sxcInstance";
import { SxcAngular } from "tosic/sxc/SxcAngular";
import { DnnAppComponent } from "tosic/sxc/dnn-app-component";


@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <p>moduleId (async pipe): {{sxcNg.moduleId | async}}</p>
    <p>moduleId (subscription): {{modId}}</p>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent extends DnnAppComponent {
  modId: number;

  constructor(private element:ElementRef, public sxcNg: SxcAngular) {
    super(element, sxcNg);

    sxcNg.moduleId
      .subscribe((id: number) => this.modId = id);
  }

  ngOnInit(){
    // let's try stuff...
  }
  title = 'Hello Angular 4 Data on DNN! Let\'s load!';
}
