import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeAgoPipe } from './pipes/time-ago.pipe';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterLinkActive, RouterLinkWithHref } from '@angular/router';



@NgModule({
  declarations: [
    TimeAgoPipe,
    SpinnerComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterLinkWithHref,
    RouterLinkActive
  ],
  exports: [
    TimeAgoPipe,
    SpinnerComponent,
    HeaderComponent
  ]
})
export class SharedModule { }
