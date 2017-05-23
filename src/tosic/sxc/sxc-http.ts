import { Injectable } from '@angular/core';
import {   Http,   ConnectionBackend,   RequestOptions,  RequestOptionsArgs,  Request,  Response,  Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ActivatedRoute, Router } from "@angular/router";
import { SxcAngular } from "tosic/sxc/SxcAngular";
import { ReplaySubject } from "rxjs/ReplaySubject";
import { SxcInstance } from "tosic/sxc/sxc-instance";
import { Subject } from "rxjs/Subject";
import { AppContext } from "tosic/sxc/app-context";

@Injectable()
export class SxcHttp extends Http {
  constructor(
    backend: ConnectionBackend,
    defaultOptions: RequestOptions,
    private sxcNg: SxcAngular
  ) {
    super(backend, defaultOptions);
  }

  request(url: string | Request, options: RequestOptionsArgs = new RequestOptions()): Observable<Response> {
    let subject = new Subject<Response>();
    this.sxcNg.context.take(1).subscribe(res => {
        // todo: better dev mode detection using environment
        let isDevMode = window.location.hostname === 'localhost';

        if (typeof url === 'string') {
          url = res.sxc.resolveServiceUrl(<string>url);
          this.configure(options, res);
        }
        else {
          url.url = res.sxc.resolveServiceUrl(<string>url.url);
          this.configure(<Request>url, res);
        }

        console.log("options", options);
        console.log('url', url);

        super.request(url)//, options)
          .subscribe(subject.next);
      })
      ;//.catch(e => console.error(e))
    return subject.asObservable();
  }

  private configure(options: RequestOptionsArgs | Request, params: AppContext): RequestOptionsArgs {
    if (!options.headers) options.headers = new Headers();
    options.headers.append('ModuleId', params.moduleId.toString());
    options.headers.append('TabId', params.tabId.toString());
    options.headers.append('ContentBlockId', params.contentBlockId.toString());
    options.headers.append('RequestVerificationToken', params.antiForgeryToken);
    options.headers.append('X-Debugging-Hint', 'bootstrapped by Sxc4Angular');
    return options;
  }
}