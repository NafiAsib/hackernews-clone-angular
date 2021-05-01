import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

import { config } from '../../core/config';
import { News } from "../models/news.model";
import { Observable } from "rxjs";

@Injectable()
export class NewNewsApi {
  readonly NEW_API = 'newstories';
  readonly PAST_API = 'topstories'; // using topstories api, because didn't past stories api 

  constructor(private http: HttpClient) {}

  getNewNews(): Observable<News> {
    return this.http.get<News>(config.apiUrl+this.NEW_API);
  }

  getPastNews(): Observable<News> {
    return this.http.get<News>(config.apiUrl+this.PAST_API);
  }

}