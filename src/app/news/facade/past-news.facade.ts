import { Injectable, OnInit } from "@angular/core";
import { NewsApi } from "../api/news.api";
import { tap } from 'rxjs/operators';
import { Observable } from "rxjs";
import { NewsDetails } from "../models/news-details.model";
import { PastNewsState } from "../state/past-news.state";

@Injectable({
  providedIn: 'root'
})
export class PastNewsFacade {

  constructor(private newsApi: NewsApi, private pastNewsSate: PastNewsState) {
      this.getNewsId$();
  }
  
  getNewsId$() {
    this.newsApi.getPastNews()
      .pipe(tap(news => this.pastNewsSate.setNewsId$(news)))
      .subscribe(
        () => {
          this.updateNewsDetails$();
        },
      )
  }

  updateNewsDetails$() {
    const newsId = this.pastNewsSate.getNewsId$();
    let index = this.pastNewsSate.getIndex$();
    let maxIndex = index + 3;
    for(index = index; index < maxIndex; index++) {
      this.newsApi.getNewsDetails(newsId[index]).subscribe(
        (res) => this.pastNewsSate.updateNews$(res),
        (err) => console.log(err),
      )
    }
    this.pastNewsSate.updateIndex$();
  }

  loadNewsDetails$(): Observable<NewsDetails[]> {
    return this.pastNewsSate.getNewsDetails$();
  }

  loadMoreNewsDetails$() {
    this.updateNewsDetails$();
  }
}