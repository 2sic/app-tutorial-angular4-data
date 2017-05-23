import { Injectable, ApplicationRef, Injector, ElementRef } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { sxcInstanceInterface } from "tosic/sxc/sxcInstanceInterface";
import { SxcAngular } from "tosic/sxc/SxcAngular";
// import { sxcAppId } from "tosic/sxc/sxcAppId.uri.provider";



declare const window: any;

@Injectable()
export class sxcInstance implements sxcInstanceInterface {
    private sxc: sxcInstanceInterface;
    resolveServiceUrl(path: string): string  { return this.sxc.resolveServiceUrl(path); };
    id: number;
    cbid: number;
    isEditMode(): boolean {
        throw new Error("Method not implemented.");
    }
  constructor(private sxc4ng: SxcAngular) {
    sxc4ng.moduleId.subscribe((id: number) => {
        this.id = id;
        console.log(`a new moduleId arrived: ${id}`);
      });
  }
}