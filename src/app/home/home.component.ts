import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  template: `
    <div class="d-grid gap-3">
    <div class="p-2 bg-light border" style="display: flex;justify-content: space-evenly;">
      <button type="button" class="btn btn-primary btn-square-md" (click)="goToForm('typedForm')">Typed FORM</button>
      <button type="button" class="btn btn-primary btn-square-md" (click)="goToForm('angularMaterial')">Angular Material</button>
    </div>
  </div>
  `,
  styles: [
  ]
})
export class HomeComponent {

  constructor(
    private router: Router
  ) {}

  goToForm(path: string) {
    this.router.navigateByUrl(path);
  }

}
