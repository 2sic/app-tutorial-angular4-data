import { Injectable } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { $2sxc } from "tosic/sxc/$2sxc";

declare const window: any;


export function sxcAppIdUriFactory($2sxc: $2sxc): number {
  return +$2sxc.urlParams("appId");
  // var appElementRef: ElementRef;
  // appElementRef = injector.get(applicationRef.componentTypes[0]).elementRef;
  // return $2sxc.getInstance(appElementRef);
};

export let sxcAppIdFromUriProvider = {
  provide: "sxcAppId",
  useFactory: sxcAppIdUriFactory,
  deps: [$2sxc]
};


// @Injectable()
// export class sxcAppId {
//   constructor(
//     private route: ActivatedRoute
//   ) {
//     return route.snapshot.queryParams['appId'];
//   }
// }