import { Component, Inject, ApplicationRef, ElementRef, Injector, OnInit } from '@angular/core';
import { SxcInstance } from "tosic/sxc/sxc-instance";
import { SxcAngular } from "tosic/sxc/sxc-angular";
import { SxcAppComponent } from "tosic/sxc/sxc-app.component";
import { ContentResourceFactory } from "tosic/sxc/sxc-content.service";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  /*template: `
    <p>moduleId (async pipe): {{sxcNg.moduleId | async}}</p>
    <p>moduleId (subscription): {{modId}}</p>
  `,*/
  styleUrls: ['./app.component.css']
})
export class AppComponent extends SxcAppComponent implements OnInit {
  modId: number;

  title: string = "Title";

  constructor(private element: ElementRef, public sxcNg: SxcAngular, private crf: ContentResourceFactory) {
    super(element, sxcNg);

    
  }

  ngOnInit(){
    let person = this.crf.resource("Person")
    person.get()
      .subscribe(res => {
        console.log('got person', res);
      })

    this.sxcNg.moduleId
      .subscribe((id: number) => this.modId = id);
  }

}
