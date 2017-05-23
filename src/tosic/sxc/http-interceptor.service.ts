import { Injectable } from '@angular/core';
import { 
  Http,
  ConnectionBackend,
  RequestOptions,
  RequestOptionsArgs,
  Request,
  Response,
  Headers
} from '@angular/http';

import { Observable } from 'rxjs/Rx';
import { ActivatedRoute, Router } from "@angular/router";
import { SxcAngular } from "tosic/sxc/SxcAngular";
import { ReplaySubject } from "rxjs/ReplaySubject";
import { sxcInstanceInterface } from "tosic/sxc/sxcInstanceInterface";
import { Subject } from "rxjs/Subject";
import { contextParameters } from "tosic/sxc/context-parameters";

@Injectable()
export class Http2sxc extends Http {
  constructor(
    backend: ConnectionBackend,
    defaultOptions: RequestOptions,
    private sxcNg: SxcAngular
  ) {
    super(backend, defaultOptions);
  }

  request(url: string | Request, options: RequestOptionsArgs = new RequestOptions()): Observable<Response> {
    let subject = new Subject<Response>();
    this.sxcNg.context /*.contextSubject.*/ .toPromise()
      .then(res => {
        // todo: better dev mode detection using environment
        let isDevMode = window.location.hostname === 'localhost';


        this.configure(options, res);
        if (typeof url === 'string') url = res.sxc.resolveServiceUrl(<string>url);
        else url.url = res.sxc.resolveServiceUrl(<string>url.url);

        super.request(url, options)
          .subscribe(subject.next);
      })
    return subject.asObservable();
  }

  private configure(options: RequestOptionsArgs, params: contextParameters): void {
    if (!options.headers) options.headers = new Headers();
    options.headers.set('ModuleId', params.modulId.toString());
    options.headers.set('TabId', params.tabId.toString());
    options.headers.set('ContentBlockId', params.contentBlockId.toString());
    options.headers.set('RequestVerificationToken', params.servicesFramework(params.modulId).getAntiForgeryValue());
    options.headers.set('X-Debugging-Hint', 'bootstrapped by 2sxc4ng');
  }
}