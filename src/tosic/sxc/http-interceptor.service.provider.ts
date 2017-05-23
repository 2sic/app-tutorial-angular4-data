import { HttpInDnn } from './http-interceptor.service';
import { Http, XHRBackend, RequestOptions } from "@angular/http";
import { SxcAngular } from "tosic/sxc/SxcAngular";

export function Http2SxcProviderFactory(backend: XHRBackend, defaultOptions: RequestOptions, sxc: SxcAngular) {
    return new HttpInDnn(backend, defaultOptions, sxc);
}

export let Http2SxcHttpProvider =
    {
        provide: Http,
        useFactory: Http2SxcProviderFactory,
        deps: [XHRBackend, RequestOptions, SxcAngular]
    };
