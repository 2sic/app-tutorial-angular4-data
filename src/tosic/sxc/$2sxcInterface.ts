
import { sxcInstanceInterface } from "tosic/sxc/sxcInstanceInterface";

export interface $2sxcInterface {
    // (seed: any) : sxcInstanceInterface,
    (seed: any, cbid?: number) : sxcInstanceInterface,
    urlParams(name: string): string
    
}