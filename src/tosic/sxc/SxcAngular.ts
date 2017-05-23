
import { sxcInstanceInterface } from "tosic/sxc/sxcInstanceInterface";
import { ElementRef, Optional, Injectable } from "@angular/core";
import { ReplaySubject, Observable, Subscription } from "rxjs";
import { sxcInstance } from "tosic/sxc/sxcInstance";
import { DnnDevSettings } from "tosic/sxc/dnn-dev-settings";
import { contextParameters } from "tosic/sxc/context-parameters";

declare const window: any;

@Injectable()
export class SxcAngular {
    context: Observable<contextParameters>;
    ready: boolean = false;
    moduleId: Observable<number>;
    tabId: Observable<number>;
    contentBlockId: Observable<number>;
    servicesFramework: Observable<any>;
    sxc: Observable<sxcInstanceInterface>;

    // often important dnn properties
    private globSxc: any;
    private midSubject: ReplaySubject<number> = new ReplaySubject<number>();
    private tidSubject: ReplaySubject<number> = new ReplaySubject<number>();
    private contentBlockIdSubject: ReplaySubject<number> = new ReplaySubject<number>();
    private sfSubject: ReplaySubject<any> = new ReplaySubject<any>();
    private contextSubject: ReplaySubject<contextParameters> = new ReplaySubject<contextParameters>();

    private sxcSubject: ReplaySubject<sxcInstanceInterface> = new ReplaySubject<sxcInstanceInterface>();
    private sxcInstance: sxcInstanceInterface;

    constructor(@Optional() private devSettings: DnnDevSettings) {
        // make sure we have a devSettings, which at least has the minimal ignore-settings
        devSettings = Object.assign({}, {
            ignoreMissing$2sxc: false,
            ignoreMissingServicesFramework: false
        }, devSettings);

        this.globSxc = <any>window.$2sxc;
        if (this.globSxc == undefined && !devSettings.ignoreMissing$2sxc)
            console.log('window.$2sxc is null - you probably forgot to include the script before loading angular');

        this.moduleId = this.midSubject.asObservable();
        this.tabId = this.tidSubject.asObservable();
        this.contentBlockId = this.contentBlockIdSubject.asObservable();
        this.servicesFramework = this.sfSubject.asObservable();
        this.sxc = this.sxcSubject.asObservable();
        this.context = this.contextSubject.asObservable();

        Observable.combineLatest(this.moduleId, this.tabId, this.contentBlockId, this.servicesFramework, this.sxc)
            .subscribe(res => {
                console.log('testing');
                this.contextSubject.next(<contextParameters>{
                    modulId: res[0],
                    tabId: res[1],
                    contentBlockId: res[2],
                    servicesFramework: res[3],
                    sxc: res[4]
                })
            });

        this.context.subscribe(x => console.log('inside', x));
    };

    autoConfigure(htmlNode: ElementRef) {
        if (this.globSxc == undefined) {
            if (!this.devSettings.ignoreMissing$2sxc)
                throw "cannot autoConfigure - missing $2sxc";
            this.midSubject.next(this.devSettings.moduleId);
            this.tidSubject.next(this.devSettings.tabId);
            this.contentBlockIdSubject.next(0);
        }
        else {
            let sxc = <sxcInstanceInterface>this.globSxc(htmlNode.nativeElement);
            console.log('sxc in bootstrap', sxc);
            if (sxc == undefined || sxc == null)
                throw "couldn't get sxc instance - reason unknown";

            // update/publish moduleId
            this.midSubject.next(sxc.id);
            this.contentBlockIdSubject.next(sxc.cbid);
            this.sxcSubject.next(sxc);
            this.sxcInstance = sxc;


            // check if DNN Services framework exists...
            if(window.$ && window.$.ServicesFramework) {
                // run timer till sf is ready, but max for a second
                var timer = Observable.timer(0, 100)    // try every 100ms
                    .take(10)                           // max 10x
                    .subscribe(x => {
                        // this must be access AFTER a delay, as the SF is not be ready yet...
                        let sf =  window.$.ServicesFramework(this.sxcInstance.id);
                        if(sf.getAntiForgeryValue()){ // if this works, the SF is initialized
                            if(timer) timer.unsubscribe();
                            if(window.dnn && window.dnn.vars && window.dnn.vars.length == 0)
                                window.dnn.vars = null; // must reset, as they are usually incorrect at this time
                            this.sfSubject.next(sf);
                            this.tidSubject.next(sf.getTabId());
                        }
                        this.ready = true;
                    });
            } else {
                if(!this.devSettings.ignoreMissingServicesFramework)
                    throw "DNN Services Framework is missing, and it's not allowed according to devSettings. Either set devSettings to ignore this, or ensure it's there";
                
                this.tidSubject.next(this.devSettings.tabId);
                this.sfSubject.next(null);
            }
        }
    }


    getInstance(seed: any, cbid?: number): sxcInstanceInterface {
        return <sxcInstanceInterface>this.globSxc(seed, cbid);
    }

    urlParams(name: string): string {
        return <string>this.globSxc.urlParams(name);
    }

}