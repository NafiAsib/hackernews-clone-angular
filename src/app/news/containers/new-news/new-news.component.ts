import { Component, OnInit } from '@angular/core';
import { NewsDetails } from '../../models/news-details.model';

@Component({
  selector: 'app-new-news',
  templateUrl: './new-news.component.html',
  styleUrls: ['./new-news.component.scss']
})
export class NewNewsComponent implements OnInit {
  dummyNewsDetails: NewsDetails = {
    "by": "Tomte",
    "descendants": 62,
    "id": 26994024,
    "kids": [
        26994978,
        26996914,
        27002483,
        26994655,
        26994444,
        26995318,
        26996691,
        26994255,
        26997913,
        26998603,
        26996844,
        26998698,
        26996489,
        26997139,
        26998263,
        26999136,
        26995058
    ],
    "score": 106,
    "time": 1619793486,
    "title": "The 'Great Wave' has mystified art lovers for generations (2019)",
    "type": "story",
    "url": "https://edition.cnn.com/style/article/hokusai-great-wave-ukiyo-e-woodblock/index.html"
  };
  
  constructor() {}

  ngOnInit(): void {
  }

}
