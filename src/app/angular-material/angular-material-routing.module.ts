import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page404Component } from '../page404/page404.component';
import { AngualarMaterialComponent } from './angular-material.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { InputFieldComponent } from './input-field/input-field.component';
import { MatCheckboxComponent } from './mat-checkbox/mat-checkbox.component';

const routes: Routes = [
  { path: '', component: AngualarMaterialComponent, children: [
    { path: 'input-field', component: InputFieldComponent},
    { path: 'mat-checkbox', component: MatCheckboxComponent},
    { path: 'date-picker', component: DatePickerComponent},
    { path: '', redirectTo: 'input-field', pathMatch: 'full' },
    { path: '**', component: Page404Component }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppMaterialRoutingModule { }
