import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import 'rxjs/Rx';

@Injectable()
export class HttpService {

  constructor(private http: Http) {
  }

  public get(url: string) {
    return this.http
        .get(url)
        .map((response: Response) => {
            return response.json();
        });
  }
}
