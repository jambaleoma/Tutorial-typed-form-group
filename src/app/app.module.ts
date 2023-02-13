import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MultipleFormControlComponent } from './typed-form/multiple-form-control/multiple-form-control.component';
import { TypedFormComponent } from './typed-form/typed-form.component';
import { FormGroupComponent } from './typed-form/form-group/form-group.component';
import { HttpClientModule } from '@angular/common/http';
import { Page404Component } from './page404/page404.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MultipleFormControlComponent,
    TypedFormComponent,
    FormGroupComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
