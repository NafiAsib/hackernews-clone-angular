import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { LayoutComponent } from './component/layout/layout.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    SharedModule,
    RouterModule,
    HttpClientModule,
  ],
  exports: [
    LayoutComponent
  ]
})
export class CoreModule { }
