
import { sxcInstanceInterface } from "tosic/sxc/sxcInstanceInterface";
import { ElementRef } from "@angular/core";

declare const window: any;

function $2sxcProviderFactory() {
    return <$2sxc> window.$2sxc;
}

export class $2sxc /*Interface*/ {
    private globSxc: any;

    constructor() {
        this.globSxc = $2sxcProviderFactory();
    };

    bootstrap(htmlNode:ElementRef) {
        let sxc = window.$2sxc(htmlNode.nativeElement);
        console.log('sxc in bootstrap', sxc);
    }

    getInstance(seed: any, cbid?: number) : sxcInstanceInterface {
        return <sxcInstanceInterface> this.globSxc(seed, cbid);
    }

    urlParams(name: string): string {
        return <string> this.globSxc.urlParams(name);
    }
    
}