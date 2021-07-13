import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { AddProductsComponent } from './form/controls/add-products/add-products.component'
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
    AddProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
