import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeAgoPipe } from './pipes/time-ago.pipe';
import { SpinnerComponent } from './components/spinner/spinner.component';



@NgModule({
  declarations: [
    TimeAgoPipe,
    SpinnerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TimeAgoPipe,
    SpinnerComponent
  ]
})
export class SharedModule { }
