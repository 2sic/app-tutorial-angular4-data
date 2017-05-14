import { Injectable } from '@angular/core';
// import { ActivatedRoute } from "@angular/router";
// import { sxcInstanceInterface } from "tosic/sxc/sxcInstance.interface";

// declare const window: any;

import { $2sxcInterface } from "tosic/sxc/$2sxcInterface";

// dummy $2sxc object, meant for type-checking
export function $2sxc(seed: any): $2sxcInterface {
    let temp = <$2sxcInterface>function (seed: any, cbid: number) { };
    temp.urlParams = function(name: string): string {
        throw new Error("Method not implemented.");
    }
    return temp;
}