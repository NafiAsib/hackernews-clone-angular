import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  tabList = ['New', 'Past'];
  selectedTab: String = this.tabList[0];
  constructor() { }

  ngOnInit(): void {
  }

  openTab(tab: String)  {
    this.selectedTab = tab;
  }

  loadMore() {

  }
}
