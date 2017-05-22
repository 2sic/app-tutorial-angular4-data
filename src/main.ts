import { enableProdMode, Provider } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import { platformBrowserDnn } from './bootstrap/dnn.bootstrap';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { APP_BASE_HREF } from "@angular/common";

if (environment.production) {
  enableProdMode();
}

// platformBrowserDnn().bootstrapModule(AppModule);
let dnnProviders : Provider[] = [
  {
    provide: "mid",
    useValue: 17
  }
]

declare const window: any;
window.dnnNg = { 
  buildProviders: function(base: string, mid: number) : Provider[] {
    var dnnProviders : Provider[] = [
      { provide: "mid", useValue: mid },
      { provide: APP_BASE_HREF, useValue: base }  // override the base path...
    ]
    return dnnProviders;
  },
  bootstrapper: platformBrowserDynamic(dnnProviders).bootstrapModule,
  modules: [AppModule]
};

platformBrowserDynamic(dnnProviders).bootstrapModule(AppModule);

export function Run(){ 
  console.log("running...");

}