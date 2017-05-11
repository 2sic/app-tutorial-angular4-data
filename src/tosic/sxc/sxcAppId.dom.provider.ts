import { Injectable, Injector, ElementRef, ApplicationRef } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { $2sxc } from "tosic/sxc/$2sxc";


export function sxcAppIdFactory(applicationRef: ApplicationRef, injector: Injector, $2sxc: $2sxc) {
  var appElementRef: ElementRef;
  appElementRef = injector.get(applicationRef.componentTypes[0]).elementRef;
  return $2sxc.getInstance(appElementRef);
}

export let sxcAppIdFromDomProvider = {
  provide: "sxcAppId",
  useFactory: sxcAppIdFactory,
  deps: [ApplicationRef, Injector, $2sxc]
};