import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import 'rxjs/Rx';

// Models
import { Word } from "../models/word.model";

@Injectable()
export class HttpService {
  public urlAPI: string;

  constructor(private http: Http) {
    this.urlAPI = "http://www.etymosapp.com:5000/";
  }

  /**
   * Method is to simplify the GET Requests in components
   * @param url: The URL without the API URL to get the resource
   */
  public get(url: string) {
    return this.http
        .get(this.urlAPI + url)
        .map((response: Response) => {
            return response.json();
        });
  }

  /**
   * Method is to get the words that the user has not answered correctly
   * @param wordsArray: The words answered incorrectly
   * @param url: The url to get the complete words serialized
   */
  public postWords(wordsArray: Word[], url: string) {
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    const requestOptions = new RequestOptions({ headers: headers });

    let postData = { "words": wordsArray };

    return this.http
        .post(this.urlAPI + url, postData, requestOptions)
        .map((response: Response) => {
          return response.json();
        });
  }
}
