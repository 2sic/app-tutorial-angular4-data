import { Injectable, Injector, ElementRef, ApplicationRef } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { $2sxcInterface } from "tosic/sxc/$2sxcInterface";
import { sxcInstanceInterface } from "tosic/sxc/sxcInstanceInterface"

export function sxcInstanceFactory(applicationRef: ApplicationRef, injector: Injector, $2sxc: $2sxcInterface): sxcInstanceInterface {
  var appElementRef: ElementRef;
  appElementRef = injector.get(applicationRef.componentTypes[0]).elementRef;
  return $2sxc(appElementRef);
}

@Injectable()
export let sxcInstanceDomProvider = {
  provide: "sxcInstance",
  useFactory: sxcInstanceFactory,
  deps: [ApplicationRef, Injector, $2sxc]
};