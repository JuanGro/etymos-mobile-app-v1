import { Injectable } from "@angular/core";
import { HTTP } from "@ionic-native/http";
import "rxjs/Rx";

// Models
import { Word } from "../models/word.model";

@Injectable()
export class HttpService {
  public urlAPI: string;
  private headers: any; 

  constructor(private http: HTTP) {
    this.urlAPI = "http://www.etymosapp.com:5000/";
    this.headers = {
      "Content-Type": "application/json"
    };
    this.http.setDataSerializer("json");
  }

  /**
   * Method is to simplify the GET Requests in components
   * @param url: The URL without the API URL to get the resource
   */
  public get(url: string) {
    return this.http.get(this.urlAPI + url, {}, this.headers);
  }

  /**
   * Method is to get the words that the user has not answered correctly
   * @param wordsArray: The words answered incorrectly
   * @param url: The url to get the complete words serialized
   */
  public postWords(wordsArray: Word[], url: string) {
    let postData = { "words": wordsArray };
    return this.http.post(this.urlAPI + url, postData, this.headers);
  }
}
