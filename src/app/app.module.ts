import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { SuccessComponent } from './success/success.component';
import { FailComponent } from './fail/fail.component';
import { ButtonComponent } from './form/controls/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    SuccessComponent,
    FailComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
