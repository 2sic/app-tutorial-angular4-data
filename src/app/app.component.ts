import { Component, Inject } from '@angular/core';
import { $2sxc } from "tosic/sxc/$2sxc";
import { sxcInstance } from "tosic/sxc/sxcInstance";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(/*public $2sxc: $2sxc, private sxcInstance: sxcInstance,*/ @Inject("mid") private mid: number) {
    console.log("mid", mid);
    // console.log("2sxc: ", $2sxc);
    // console.log("sxcI: ", sxcInstance);
    // console.log("get", sxcInstance.get());
    // console.log("mid", mid);
  }
  title = 'Hello Angular 4 Data on DNN! Let\' load!';
}
