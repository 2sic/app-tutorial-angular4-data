import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER, ApplicationRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { $2sxc } from "tosic/sxc/$2sxc";
import { sxcInstance } from "tosic/sxc/sxcInstance";
import { DnnService } from "dnn/dnn.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [$2sxc, sxcInstance, DnnService
  // ,  {
  //   provide: APP_INITIALIZER,
  //     useFactory: (appRef: ApplicationRef /*userServ: UserService*/) => () => initInNg(appRef),
  //     deps: [ApplicationRef/*UserService, Http*/],
  //     multi: true
  //   }
    ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private applicationRef: ApplicationRef){
    console.log('constructor appref', applicationRef);
  }
 }


// export function initInNg(appRef: ApplicationRef): Promise<any> {
//     console.log('initInIng called');
//     console.log('appref', appRef);
//     var promise = new Promise<any>( (resolve, reject) =>  resolve(0));
    
//     return promise;
// }
