import { Injectable, Injector, ElementRef, ApplicationRef, ComponentRef } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { $2sxc } from "tosic/sxc/$2sxc";
import { sxcInstanceInterface } from "tosic/sxc/sxcInstanceInterface"
import { sxcInstance } from "tosic/sxc/sxcInstance";


// todo: trying to change how we find the dom root element

  function _getAppRootElement(applicationRef: ApplicationRef, injector: Injector): HTMLElement { 
    // var ct = <ComponentRef<any>[]> applicationRef.componentTypes;
    for (let i = 0; i < applicationRef.componentTypes.length; i++) {
      var found = injector.get(applicationRef.componentTypes[i]);
      if (found) {
        return found.ElementRef;// applicationRef.components[i].location.nativeElement;
      }
    }
  }

export function sxcInstanceFactory(applicationRef: ApplicationRef, injector: Injector, $2sxc: $2sxc): sxcInstanceInterface {
  let element: ElementRef = this._app['_rootComponents'][0].location;
  let element2: ElementRef = this.app['_rootComponents'][0].location;

  var appElementRef: HTMLElement;
  appElementRef = _getAppRootElement(applicationRef, injector);// injector.get(applicationRef.componentTypes[0]).elementRef;
  return $2sxc.getInstance(appElementRef);
};

export let sxcInstanceDomProvider = {
  provide: sxcInstance,
  useFactory: sxcInstanceFactory,
  deps: [ApplicationRef, Injector, $2sxc]
};