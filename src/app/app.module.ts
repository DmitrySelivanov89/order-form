import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { RadioComponent } from './form/controls/radio/radio.component'
import { ButtonComponent } from './form/controls/button/button.component'
import { FailComponent } from './form/fail/fail.component'
import { FormComponent } from './form/form.component'
import { SuccessComponent } from './success/success.component'


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    SuccessComponent,
    FailComponent,
    ButtonComponent,
    RadioComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
