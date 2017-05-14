// import { Injectable } from '@angular/core';
// import { ActivatedRoute } from "@angular/router";
// import { sxcInstanceInterface } from "tosic/sxc/sxcInstance.interface";
// import { $2sxcInterface } from "tosic/sxc/$2sxc.interface";

// declare const window: any;

// @Injectable()
// export class $2sxc implements $2sxcInterface {
//   urlParams(name: string): string {
//     return $global2sxc.urlParams(name);
//   }
//   private global2sxc: $2sxcInterface;
//   constructor() {
//       this.global2sxc = <$2sxcInterface> window.$2sxc; // get $2sxc from the window, must be preloaded
//       if(!$2sxc)                // check to be sure
//         throw "trying to retrieve $2sxc but can't find it - you are probably missing some javascripts or they are loaded in the wrong order."
//     return this.global2sxc;
//   }
//   public getInstance(idOrDom: any) : sxcInstanceInterface {
//     return this.global2sxc(idOrDom);
//   }
// }