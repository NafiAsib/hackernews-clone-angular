import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { NewsDetails } from "../models/news-details.model";

@Injectable({
  providedIn: 'root'
})
export class PastNewsState {
  private newsId$ = new BehaviorSubject<number[]>(null);
  private newsDetails$ = new BehaviorSubject<NewsDetails[]>(null);
  private currentIndex$ = new BehaviorSubject<number>(0);

  getNewsDetails$() {
    return this.newsDetails$.asObservable();
  }
  
  setNewsId$(newsId: number[]) {
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
    let currentValue = this.newsDetails$.getValue();

    if(currentValue != null) {
      currentValue.push(newsDetails);
      this.newsDetails$.next(currentValue);
    }
    else {
      let updateNewsList: NewsDetails[];
      updateNewsList = [newsDetails];
      this.newsDetails$.next(updateNewsList);
    }
  }
}