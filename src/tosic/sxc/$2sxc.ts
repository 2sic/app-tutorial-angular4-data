
import { sxcInstanceInterface } from "tosic/sxc/sxcInstanceInterface";

declare const window: any;

function $2sxcProviderFactory() {
    return <$2sxc> window.$2sxc;
}

export class $2sxc /*Interface*/ {
    private globSxc: any;

    constructor() {
        this.globSxc = $2sxcProviderFactory();
    };

    getInstance(seed: any, cbid?: number) : sxcInstanceInterface {
        return <sxcInstanceInterface> this.globSxc(seed, cbid);
    }

    urlParams(name: string): string {
        return <string> this.globSxc.urlParams(name);
    }
    
}