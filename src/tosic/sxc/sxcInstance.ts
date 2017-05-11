import { Injectable } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { $2sxc } from "tosic/sxc/$2sxc";
import { sxcAppId } from "tosic/sxc/sxcAppId";


declare const window: any;

@Injectable()
export class sxcInstance {
  sxc: any;
  constructor(
    private route: ActivatedRoute,
    private $2sxc: $2sxc,
    private appId: sxcAppId
  ) {
    return $2sxc[appId];
  }
}