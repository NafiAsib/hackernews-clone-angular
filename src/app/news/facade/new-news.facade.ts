import { Injectable, OnInit } from "@angular/core";
import { NewsApi } from "../api/news.api";
import { NewNewsState } from "../state/new-news.state";
import { map, shareReplay, tap } from 'rxjs/operators';
import { Observable } from "rxjs";
import { NewsDetails } from "../models/news-details.model";

@Injectable({
  providedIn: 'root'
})
export class NewNewsFacade {

  constructor(private newsApi: NewsApi, private newNewsSate: NewNewsState) {
      this.getNewsId$();
  }
  
  getNewsId$() {
    this.newsApi.getNewNews()
      .pipe(tap(news => this.newNewsSate.setNewsId$(news)))
      .subscribe(
        () => {
          this.updateNewsDetails$();
        },
      )
  }

  updateNewsDetails$() {
    const newsId = this.newNewsSate.getNewsId$();
    let index = this.newNewsSate.getIndex$();
    let maxIndex = index + 3;
    for(index = index; index < maxIndex; index++) {
      this.newsApi.getNewsDetails(newsId[index]).subscribe(
        (res) => this.newNewsSate.updateNews$(res),
        (err) => console.log(err),
      )
    }
    this.newNewsSate.updateIndex$();
  }

  loadNewsDetails$(): Observable<NewsDetails[]> {
    return this.newNewsSate.getNewsDetails$();
  }

  loadMoreNewsDetails$() {
    this.updateNewsDetails$();
  }
}