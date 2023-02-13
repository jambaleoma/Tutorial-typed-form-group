import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputFieldComponent } from './input-field/input-field.component';
import { AngualarMaterialComponent } from './angular-material.component';
import { AppMaterialRoutingModule } from './angular-material-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCheckboxComponent } from './mat-checkbox/mat-checkbox.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { MatNativeDateModule } from '@angular/material/core';



@NgModule({
  declarations: [
    InputFieldComponent,
    AngualarMaterialComponent,
    MatCheckboxComponent,
    DatePickerComponent
  ],
  imports: [
    CommonModule,
    AppMaterialRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
  ]
})
export class AngularMaterialModule { }
