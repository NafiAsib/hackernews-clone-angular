import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './core/component/layout/layout.component';

const routes: Routes = [
 {
   path: '',
   component: LayoutComponent,
   children: [
     {
       path: '',
       loadChildren: () => import('./news/news.module').then(m => m.NewsModule),
     }
   ],
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
