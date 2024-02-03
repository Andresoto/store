import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { SpinnerService } from '@shared/services/spinner.service';

@Component({
  selector: 'app-spinner',
  template: `<div class="overlay" *ngIf="isLoading$ | async">
    <div class="spinner icon-spinner" aria-hidden="true"></div>
    <h3>Cargando...</h3>
  </div>`,
  styleUrls: ['./spinner.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class SpinnerComponent {
  
  private spinnerService = inject(SpinnerService);

  isLoading$ = this.spinnerService.isLoading$;
  
}
