import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PastNewsFacade } from '../../facade/past-news.facade';
import { NewsDetails } from '../../models/news-details.model';

@Component({
  selector: 'app-past-news',
  templateUrl: './past-news.component.html',
  styleUrls: ['./past-news.component.scss'],
})
export class PastNewsComponent implements OnInit {
  newsDetails$: Observable<NewsDetails[]>;
  constructor(private newsFacade: PastNewsFacade) {
    this.newsDetails$ = newsFacade.loadNewsDetails$();
  }

  ngOnInit(): void {}

  onLoadMore() {
    this.newsFacade.loadMoreNewsDetails$();
  }
}
