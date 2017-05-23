
import { ElementRef, Optional, Injectable } from "@angular/core";
import { ReplaySubject, Observable, Subscription } from "rxjs";
import { AppContext } from "tosic/sxc/app-context";
import { DnnDevSettings } from "tosic/sxc/dev/dnn-dev-settings";
import { SxcInstance } from "tosic/sxc/sxc-instance";

declare const window: any;

@Injectable()
export class SxcAngular {
    context: Observable<AppContext>;
    moduleId: Observable<number>;
    tabId: Observable<number>;
    contentBlockId: Observable<number>;
    antiForgeryToken: Observable<string>;
    sxc: Observable<SxcInstance>;

    // internal Observable Subjects
    private globSxc: any;
    private midSubject: ReplaySubject<number> = new ReplaySubject<number>();
    private tidSubject: ReplaySubject<number> = new ReplaySubject<number>();
    private cbIdSubject: ReplaySubject<number> = new ReplaySubject<number>();
    private afTokenSubject: ReplaySubject<string> = new ReplaySubject<string>();
    private contextSubject: ReplaySubject<AppContext> = new ReplaySubject<AppContext>();
    private sxcSubject: ReplaySubject<SxcInstance> = new ReplaySubject<SxcInstance>();
    private sxcInstance: SxcInstance;

    constructor(@Optional() private devSettings: DnnDevSettings) {
        // make sure we have a devSettings, which at least has the minimal ignore-settings
        devSettings = Object.assign({}, {
            ignoreMissing$2sxc: false,
            ignoreMissingServicesFramework: false
        }, devSettings);

        this.globSxc = <any>window.$2sxc;
        if (this.globSxc == undefined && !devSettings.ignoreMissing$2sxc)
            throw 'window.$2sxc is null - you probably forgot to include the script before loading angular';

        this.moduleId = this.midSubject.asObservable();
        this.tabId = this.tidSubject.asObservable();
        this.contentBlockId = this.cbIdSubject.asObservable();
        this.antiForgeryToken = this.afTokenSubject.asObservable();
        this.sxc = this.sxcSubject.asObservable();
        this.context = this.contextSubject.asObservable();

        Observable.combineLatest(this.moduleId, this.tabId, this.contentBlockId, this.sxc, this.antiForgeryToken)
            .subscribe(res => this.contextSubject.next(<AppContext>{
                    moduleId: res[0],
                    tabId: res[1],
                    contentBlockId: res[2],
                    sxc: res[3],
                    antiForgeryToken: res[4]
                })
            );
    };

    autoConfigure(htmlNode: ElementRef) {
        if (this.globSxc == undefined) {
            if (!this.devSettings.ignoreMissing$2sxc)
                throw "cannot autoConfigure - missing $2sxc";
            this.midSubject.next(this.devSettings.moduleId);
            this.tidSubject.next(this.devSettings.tabId);
            this.cbIdSubject.next(0);
        }
        else {
            let sxc = this.sxcInstance = <SxcInstance>this.globSxc(htmlNode.nativeElement);
            if (sxc == undefined || sxc == null)
                throw "couldn't get sxc instance - reason unknown";

            // update/publish moduleId
            this.midSubject.next(sxc.id);
            this.cbIdSubject.next(sxc.cbid);
            this.sxcSubject.next(sxc);

            // check if DNN Services framework exists...
            if(window.$ && window.$.ServicesFramework) {
                // run timer till sf is ready, but max for a second
                var timer = Observable.timer(0, 100)    // try every 100ms
                    .take(10)                           // max 10x
                    .subscribe(x => {
                        // this must be access AFTER a delay, as the SF is not be ready yet...
                        let sf =  window.$.ServicesFramework(this.sxcInstance.id);
                        if(sf.getAntiForgeryValue()){ // if this works, then SF is initialized
                            timer.unsubscribe();
                            if(window.dnn && window.dnn.vars && window.dnn.vars.length == 0)
                                window.dnn.vars = null; // must reset, as they are incorrectly initialized when accessed early
                            this.tidSubject.next(sf.getTabId());
                            this.afTokenSubject.next(sf.getAntiForgeryValue());
                        }
                    });
            } else {
                if(!this.devSettings.ignoreMissingServicesFramework)
                    throw "DNN Services Framework is missing, and it's not allowed according to devSettings. Either set devSettings to ignore this, or ensure it's there";
                
                this.tidSubject.next(this.devSettings.tabId);
                this.afTokenSubject.next(this.devSettings.antiForgeryToken);
            }
        }
    }


    // getInstance(seed: any, cbid?: number): SxcInstance {
    //     return <SxcInstance>this.globSxc(seed, cbid);
    // }

    // urlParams(name: string): string {
    //     return <string>this.globSxc.urlParams(name);
    // }

}