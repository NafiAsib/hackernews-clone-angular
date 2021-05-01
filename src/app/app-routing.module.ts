import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './core/component/layout/layout.component';
import { NewsComponent } from './news/containers/news/news.component';

const routes: Routes = [
 {
   path: '',
   component: LayoutComponent,
   children: [
     {
       path: '',
       component: NewsComponent,
     }
   ],
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
