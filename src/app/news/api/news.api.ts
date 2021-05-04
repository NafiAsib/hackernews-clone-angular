import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

import { config } from '../../core/config';
import { News } from "../models/news.model";
import { Observable } from "rxjs";
import { NewsDetails } from "../models/news-details.model";

@Injectable({
  providedIn: 'root'
})
export class NewsApi {
  readonly NEW_API = '/newstories.json';
  readonly PAST_API = '/topstories'; // using topstories api, because didn't past stories api 
  readonly DETAILS_API = '/item'

  constructor(private http: HttpClient) {}

  getNewNews(): Observable<number[]> {
    return this.http.get<number[]>(config.apiUrl + this.NEW_API);
  }

  getPastNews(): Observable<News> {
    return this.http.get<News>(config.apiUrl + this.PAST_API);
  }

  getNewsDetails(id: number): Observable<NewsDetails> {
    return this.http.get<NewsDetails>(config.apiUrl + this.DETAILS_API + '/' + id + '.json');
  }

}