import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-material',
  template: `
    
    <div class="d-grid gap-3">
      <div class="p-2 bg-light border">
        <div class="mb-3">
          <form>
          <label for="" class="form-label">Sezione</label>
          <select class="form-select form-select-lg" [formControl]="formSelection">
            <option selected value="angularMaterial/input-field">Input Field</option>
            <option value="angularMaterial/mat-checkbox">matCheckbox</option>
            <option value="angularMaterial/date-picker">MatDatepicker</option>
          </select>
          </form>
        </div>
      </div>
    </div>
    
    <div class="card text-start">
      <div class="card-body">
        <h4 class="card-title"></h4>
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class AngualarMaterialComponent {
  public formSelection = new FormControl('angularMaterial/input-field', {nonNullable: true});

  constructor(
    private router: Router
  ) {
    this.formSelection.valueChanges
      .subscribe(sel => {
        this.goTo(sel);
      });
  }

  goTo(path?: string) {
    this.router.navigateByUrl(path ? path : '');
  }
}
