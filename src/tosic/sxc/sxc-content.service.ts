

import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import { Observable } from "rxjs";



@Injectable()
export class ContentResourceFactory {
  constructor(private http: Http) {

  }

  resource(typeName: string) {
    return new ContentResource(this.http, typeName);
  }
}


@Injectable()
export class ContentResource {

  constructor(private http: Http, private typeName: string) {

  }

  get(id:number = null): Observable<Response> {
      var url = "app/auto/content/" + this.typeName;
      if(id)
        url += "/" + id.toString();
        let head = new Headers();
        head.append("hello", "there");
      return this.http.get(url, { headers: head });

    // this.http.get(`${this.base + this.path}/DirectoryItem`, { headers: this.headers })
    //   .map(res => res.json().map((entry: DirectoryEntry) => {
    //     entry.Logo = this.base + entry.Logo;
    //     return entry;
    //   }))
    //   .subscribe(entries => this.entrySubject.next(entries));
  }

}