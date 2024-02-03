import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeAgoPipe } from './pipes/time-ago.pipe';
import { RouterLinkActive, RouterLinkWithHref } from '@angular/router';



@NgModule({
  declarations: [
    TimeAgoPipe
  ],
  imports: [
    CommonModule,
    RouterLinkWithHref,
    RouterLinkActive
  ],
  exports: [
    TimeAgoPipe
  ]
})
export class SharedModule { }
