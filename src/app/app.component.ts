import { Component, Inject, ApplicationRef, ElementRef, Injector } from '@angular/core';
import { $2sxc } from "tosic/sxc/$2sxc";
import { sxcInstance } from "tosic/sxc/sxcInstance";
import { DnnService } from "dnn/dnn.service";


@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <p>moduleId (async pipe): {{moduleIdService.moduleId | async}}</p>
    <p>moduleId (subscription): {{modId}}</p>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  modId: number;

  constructor(private appRef: ApplicationRef, private el:ElementRef, private injector: Injector,
    public $2sxc: $2sxc, /*, private sxcInstance: sxcInstance,*/ @Inject("mid") private mid: number,
    public moduleIdService: DnnService
  ) {
    console.log(el.nativeElement.getAttribute('foo'));
    $2sxc.bootstrap(el);
    console.log("mid", mid);
    // console.log("2sxc: ", $2sxc);
    // console.log("sxcI: ", sxcInstance);
    // console.log("get", sxcInstance.get());
    // console.log("mid", mid);
    moduleIdService.moduleId
      .subscribe((id: number) => this.modId = id);
  }

  ngOnInit(){
    console.log('init appref in components', this.appRef);

        // let element2: ElementRef = this.appRef['_rootComponents'][0].location;
      let element = this.injector.get(this.appRef.componentTypes[0]).elementRef;

      console.log("el ref", element);
  }
  title = 'Hello Angular 4 Data on DNN! Let\'s load!';
}
