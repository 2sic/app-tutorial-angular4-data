import { Injectable } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { $2sxc } from "tosic/sxc/$2sxc";

declare const window: any;

@Injectable()
export class sxcAppId {
  constructor(
    private route: ActivatedRoute,
    private $2sxc: $2sxc
  ) {
    return route.snapshot.queryParams['appId'];
  }
}