
import { sxcInstanceInterface } from "tosic/sxc/sxcInstanceInterface";
import { ElementRef } from "@angular/core";
import { ReplaySubject, Observable } from "rxjs";
import { sxcInstance } from "tosic/sxc/sxcInstance";

declare const window: any;

export class SxcNg {
    private globSxc: any;
    public ready : boolean = false;

    // often important dnn properties
    private midSubject: ReplaySubject<number> = new ReplaySubject<number>();
    moduleId: Observable<number>;
    private tidSubject: ReplaySubject<number> = new ReplaySubject<number>();
    tabId: Observable<number>;
    private contentBlockIdSubject: ReplaySubject<number> = new ReplaySubject<number>();
    contentBlockId: Observable<number>;
    private sfSubject: ReplaySubject<any> = new ReplaySubject<any>();
    servicesFramework: Observable<any>;

    private sxcSubject: ReplaySubject<sxcInstanceInterface> = new ReplaySubject<sxcInstanceInterface>();
    sxc: Observable<sxcInstanceInterface>;

    constructor() {
        this.globSxc = <any> window.$2sxc;
        if(this.globSxc == undefined)
            console.log('window.$2sxc is null - you probably forgot to include the script before loading angular');

        this.moduleId = this.midSubject.asObservable();
        this.tabId = this.tidSubject.asObservable();
        this.contentBlockId = this.contentBlockIdSubject.asObservable();
        this.servicesFramework = this.sfSubject.asObservable();
        this.sxc = this.sxcSubject.asObservable();
    };

    autoConfigure(htmlNode:ElementRef) {
        if(this.globSxc == undefined)
            throw "cannot autoConfigure - missing $2sxc";

        let sxc = <sxcInstanceInterface> this.globSxc(htmlNode.nativeElement);
        console.log('sxc in bootstrap', sxc);
        if(sxc == undefined || sxc == null)
            throw "couldn't get sxc instance - reason unknown";

        this.sxcSubject.next(sxc);

        // update/publish moduleId
        this.midSubject.next(sxc.id);
        this.contentBlockIdSubject.next(sxc.cbid);

        // todo: this may need a delay, as the SF may not be ready yet...
        let sf = window.$.ServicesFramework(sxc.id);
        this.sfSubject.next(sf);

        this.tidSubject.next(sf.getTabId());

        this.ready = true;
    }


    getInstance(seed: any, cbid?: number) : sxcInstanceInterface {
        return <sxcInstanceInterface> this.globSxc(seed, cbid);
    }

    urlParams(name: string): string {
        return <string> this.globSxc.urlParams(name);
    }
    
}