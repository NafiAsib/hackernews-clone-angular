import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { NewsDetails } from "../models/news-details.model";
import { News } from "../models/news.model";

@Injectable()
export class NewNewsState {
  private newsId$ = new BehaviorSubject<News[]>(null);
  private newsDetails$ = new BehaviorSubject<NewsDetails[]>(null);
  private currentIndex$ = new BehaviorSubject<number>(0);

  getNews$() {
    return this.newsDetails$.asObservable();
  }
  
  setNewsId$(newsId: News[]) {
    this.newsId$.next(newsId);
  }

  getNewsId$() {
    return this.newsId$.getValue();
  }
  
  getIndex$() {
    return this.currentIndex$.getValue();
  }

  updateIndex$() {
    const currentIndex = this.currentIndex$.getValue();
    this.currentIndex$.next(currentIndex+3);
  }

  updateNews$(newsDetails: NewsDetails) {
    const currentValue = this.newsDetails$.getValue();
    this.newsDetails$.next([...currentValue, newsDetails]);
  }

  getNewsDetails$() {
    return this.newsDetails$.
  }
}