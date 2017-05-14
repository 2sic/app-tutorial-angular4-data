
import { sxcInstanceInterface } from "tosic/sxc/sxcInstanceInterface";

export interface $2sxcInterface {
    (seed: any) : sxcInstanceInterface,
    (id: number, cbid: number) : sxcInstanceInterface,
    urlParams(name: string): string
    
}