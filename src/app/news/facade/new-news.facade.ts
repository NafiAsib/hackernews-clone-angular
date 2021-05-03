import { Injectable } from "@angular/core";
import { NewsApi } from "../api/news.api";
import { NewNewsState } from "../state/new-news.state";
import { shareReplay, tap } from 'rxjs/operators';

@Injectable()
export class NewNewsFacade {

  constructor(private newsApi: NewsApi, private newNewsSate: NewNewsState) {
    // this.getNews$();
  }

  getNews$() {
    return this.newsApi.getNewNews().pipe(tap(news => this.newNewsSate.setNewsId$(news)));
    // return this.newsApi.getNewNews().pipe(shareReplay(1));
  }

  // call this function everytime for load more, or  initial news loading
  loadNews$() {
    this.getNews$();
    const newsId = this.newNewsSate.getNewsId$();
    let index = this.newNewsSate.getIndex$();
    let maxIndex = index + 3;
    for(index = index; index < maxIndex + 3; index++) {
      this.newsApi.getNewsDetails(newsId[index][0]).subscribe(
        (res) => this.newNewsSate.updateNews$(res),
        (err) => console.log(err),
      )
    }
    this.newNewsSate.updateIndex$();

    return this.newNewsSate.
  }
}