import { Component } from '@angular/core'
import { ButtonComponent } from './controls/button/button.component'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  async handleClick(btn: ButtonComponent) {
    btn.loading = true
    await new Promise((resolve) => setTimeout(resolve, 2200))
    btn.loading = false
  }
}
