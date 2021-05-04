import { DOCUMENT } from '@angular/common';
import { Component, Inject, Input, OnInit, Output } from '@angular/core';
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
    if(this.newsDetails.kids != null) this.numberOfComments = this.newsDetails.kids.length;
    else this.numberOfComments = 0;
  }

  redirectToHackerNews() {
    let id = this.newsDetails.id;
    this.document.location.href = 'https://news.ycombinator.com/item?id=' + id.toString();

  }

}
