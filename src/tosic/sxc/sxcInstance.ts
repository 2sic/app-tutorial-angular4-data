import { Injectable, ApplicationRef, Injector, ElementRef } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { $2sxc } from "tosic/sxc/$2sxc";
import { sxcInstanceInterface } from "tosic/sxc/sxcInstanceInterface";
// import { sxcAppId } from "tosic/sxc/sxcAppId.uri.provider";



declare const window: any;

@Injectable()
export class sxcInstance implements sxcInstanceInterface {
    resolveServiceUrl(path: string): string { throw "not implemented"; };
    id: number;
    cbid: number;
    isEditMode(): boolean {
        throw new Error("Method not implemented.");
    }
    private sxc: sxcInstanceInterface;
  constructor(
    private app: ApplicationRef, private injector: Injector,
    private $2sxc: $2sxc,
  ) {
    //   let element2: ElementRef = this.app['_rootComponents'][0].location;
    //   let element = injector.get(app.componentTypes[0]).elementRef;

    //   this.sxc = $2sxc.getInstance(element);
    //   this.resolveServiceUrl = this.sxc.resolveServiceUrl;
    //   this.id = this.sxc.id;
    //   this.cbid = this.sxc.cbid;
    //   this
    //return $2sxc.getInstance(appId);
  }
  get(): sxcInstanceInterface {

      let element2: ElementRef = this.app['_rootComponents'][0].location;
      let element = this.injector.get(this.app.componentTypes[0]).elementRef;
      this.sxc = this.$2sxc.getInstance(element);
      return this.sxc;

  }
}