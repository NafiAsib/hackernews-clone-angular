import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

export abstract class MasterService {
  protected baseUrl = 'https://hacker-news.firebaseio.com/';
  protected apiVersion = 'v0';
  protected apiEndPoint = this.baseUrl + '/' + this.apiVersion;

  protected constructor(protected httpClient: HttpClient) {}

  get(url: string, header?: HttpHeaders): Observable<any> {
    return this.httpClient.get<any>(this.apiEndPoint + url, {
      headers: header
    });
  }
}
