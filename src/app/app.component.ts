import { Component, Inject, ApplicationRef, ElementRef, Injector } from '@angular/core';
import { sxcInstance } from "tosic/sxc/sxcInstance";
import { SxcAngular } from "tosic/sxc/SxcAngular";
import { DnnAppComponent } from "tosic/sxc/dnn-app-component";
import { ContentResourceFactory } from "tosic/sxc/sxc-content.service";


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

  constructor(private element:ElementRef, public sxcNg: SxcAngular, private crf: ContentResourceFactory) {
    super(element, sxcNg);

    let person = crf.resource("Person");

    let personObservable = person.get();

    personObservable.subscribe(res => {
      console.log('got person', res);

    })


    sxcNg.moduleId
      .subscribe((id: number) => this.modId = id);
  }

  ngOnInit(){
    // let's try stuff...
  }
  title = 'Hello Angular 4 Data on DNN! Let\'s load now!';
}
