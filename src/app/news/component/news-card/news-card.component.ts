import { DOCUMENT } from '@angular/common';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { NewsDetails } from '../../models/news-details.model';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss']
})
export class NewsCardComponent implements OnInit {
  
  @Input()
  newsDetails: NewsDetails;
  
  numberOfComments: number;

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
    this.numberOfComments = this.newsDetails.kids.length;
  }

  redirectToHackerNews() {
    let id = this.newsDetails.id;
    this.document.location.href = 'https://news.ycombinator.com/item?id=' + id.toString();

  }

}
