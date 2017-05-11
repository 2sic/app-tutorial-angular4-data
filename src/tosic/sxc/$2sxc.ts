import { Injectable } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

declare const window: any;

@Injectable()
export class $2sxc {
  private $2sxc : any;
  constructor() {
      this.$2sxc = window.$2sxc; // get $2sxc from the window, must be preloaded
      if(!$2sxc)                // check to be sure
        throw "trying to retrieve $2sxc but can't find it - you are probably missing some javascripts or they are loaded in the wrong order."
    return this.$2sxc;
  }
  public getInstance(idOrDom: any) {
    return this.$2sxc(idOrDom);
  }
}