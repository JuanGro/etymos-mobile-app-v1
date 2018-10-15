import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
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

  public postWords(wordsArray, url: string) {
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    const requestOptions = new RequestOptions({ headers: headers });

    let postData = { "words": wordsArray };

    return this.http
        .post(url, postData, requestOptions)
        .map((response: Response) => {
          return response.json();
        });
  }
}
