import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { NewsComponent } from './containers/news/news.component';
import { NewsCardComponent } from './component/news-card/news-card.component';
import { NewNewsComponent } from './containers/new-news/new-news.component';
import { PastNewsComponent } from './containers/past-news/past-news.component';


@NgModule({
  declarations: [
    NewsComponent,
    NewsCardComponent,
    NewNewsComponent,
    PastNewsComponent,
  ],
  imports: [
    CommonModule,
    NewsRoutingModule
  ]
})
export class NewsModule { }
