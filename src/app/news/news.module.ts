import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { NewsCardComponent } from './component/news-card/news-card.component';
import { NewsComponent } from './containers/news/news.component';


@NgModule({
  declarations: [
    NewsCardComponent,
    NewsComponent
  ],
  imports: [
    CommonModule,
    NewsRoutingModule
  ]
})
export class NewsModule { }
